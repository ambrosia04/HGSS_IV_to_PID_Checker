/////////////////////////////////////////////////////////////////
//  CORE RNG AND CALCULATION LOGIC FROM SHINYFINDER SOURCE
/////////////////////////////////////////////////////////////////
function lcrngr(seed) { this.seed = seed; }
function lcrngr_get() {
    this.seed = (((0xEEB90000 * this.seed | 0) + (0xEB65 * this.seed)) + 0x0A3561A1) & 0xFFFFFFFF;
    return this.seed >>> 16;
}
lcrngr.prototype.lcrngr_get = lcrngr_get;

function seed(method, seed, pid, ability, gender, sid) {
    this.method = method; this.seed = seed; this.pid = pid;
    this.ability = ability; this.gender = gender; this.sid = sid;
}

function unsign(v) { return (v >>> 1) * 2 + (v & 1); }

// This is the main calculation engine from the source code.
function calculate(hp, atk, def, spa, spd, spe, nature, id) {
    var resultArray = [];
    var lastIvClear = spe + (spa << 5) + (spd << 10);
    var lastIvSet = lastIvClear ^ 0x8000;
    var firstIvClear = hp + (atk << 5) + (def << 10);
    var firstIvSet = firstIvClear ^ 0x8000;

    for (var cnt = 0; cnt <= 0x1FFFE; cnt++) {
        var lastivTest = (cnt % 2 == 0) ? lastIvClear : lastIvSet;
        var seedTest = (lastivTest << 16) + (cnt % 0xFFFF);
        var rng = new lcrngr(seedTest);
        var rng1 = rng.lcrngr_get();
        var rng2 = rng.lcrngr_get();

        if (rng1 == firstIvSet || rng1 == firstIvClear) {
            var rng3 = rng.lcrngr_get();
            var method1pid = unsign((rng2 << 16) + rng3);
            if (method1pid % 25 == nature) {
                var method1Seed = (new lcrngr(rng.seed)).lcrngr_get(); // Simplified to get the correct seed
                var sid = (rng2 ^ rng3 ^ id) & 0xFFF8;
                resultArray.push(new seed("Method 1", unsign(method1Seed), method1pid, method1pid % 2, method1pid % 256, sid));
            }
        }
    }
    return resultArray;
}
/////////////////////////////////////////////////////////////////
//  END OF SHINYFINDER SOURCE
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
//  NEW UI AND SEARCH HANDLER
/////////////////////////////////////////////////////////////////
const natures = [
    "Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed",
    "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest",
    "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"
];

let isSearching = false;

// Populate nature dropdown
const natureSelect = document.getElementById("nature");
natures.forEach((n, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = n;
    natureSelect.appendChild(opt);
});

document.getElementById("pid-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (isSearching) {
        isSearching = false;
        document.getElementById("search-button").textContent = "Find PID";
    } else {
        isSearching = true;
        document.getElementById("search-button").textContent = "Stop Search";
        startSearch();
    }
});

function isGenderMatch(genderValue, genderRatio, genderWanted) {
    let femaleThreshold;
    switch (genderRatio) {
        case 12.5: femaleThreshold = 30; break;
        case 25: femaleThreshold = 63; break;
        case 50: femaleThreshold = 126; break;
        case 75: femaleThreshold = 190; break;
        default: return false;
    }
    const determinedGender = (genderValue <= femaleThreshold) ? 'female' : 'male';
    return determinedGender === genderWanted;
}

async function startSearch() {
    const resultsDiv = document.getElementById("results");
    
    // Get user criteria
    const criteria = {
        tid: parseInt(document.getElementById("tid").value),
        nature: parseInt(document.getElementById("nature").value),
        gender: document.getElementById("gender").value,
        genderRatio: parseFloat(document.getElementById("gender-ratio").value),
        ability: parseInt(document.getElementById("ability").value),
        ivs: {
            hp: document.getElementById("hp").value, atk: document.getElementById("atk").value, def: document.getElementById("def").value,
            spa: document.getElementById("spa").value, spd: document.getElementById("spd").value, spe: document.getElementById("spe").value,
        }
    };

    const ivRanges = {};
    for (const stat in criteria.ivs) {
        const val = criteria.ivs[stat];
        ivRanges[stat] = (val === '') ? [0, 31] : [parseInt(val), parseInt(val)];
    }

    let combinationsChecked = 0;

    for (let hp = ivRanges.hp[0]; hp <= ivRanges.hp[1]; hp++) {
    for (let atk = ivRanges.atk[0]; atk <= ivRanges.atk[1]; atk++) {
    for (let def = ivRanges.def[0]; def <= ivRanges.def[1]; def++) {
    for (let spa = ivRanges.spa[0]; spa <= ivRanges.spa[1]; spa++) {
    for (let spd = ivRanges.spd[0]; spd <= ivRanges.spd[1]; spd++) {
    for (let spe = ivRanges.spe[0]; spe <= ivRanges.spe[1]; spe++) {
        if (!isSearching) {
            resultsDiv.textContent = "Search stopped by user.";
            return;
        }

        const currentIvs = { hp, atk, def, spa, spd, spe };
        const results = calculate(hp, atk, def, spa, spd, spe, criteria.nature, criteria.tid);

        if (results.length > 0) {
            for (const result of results) {
                if (result.method === "Method 1" && result.ability === criteria.ability && isGenderMatch(result.gender, criteria.genderRatio, criteria.gender)) {
                    // Success!
                    const pidHex = result.pid.toString(16).toUpperCase().padStart(8, '0');
                    const gender = isGenderMatch(result.gender, criteria.genderRatio, "female") ? "Female" : "Male";
                    resultsDiv.innerHTML =
                        `<b>PID:</b> ${pidHex}<br>` +
                        `<b>Nature:</b> ${natures[criteria.nature]}<br>` +
                        `<b>Ability:</b> ${result.ability + 1}<br>` +
                        `<b>Gender:</b> ${gender} (Value: ${result.gender})<br>` +
                        `<b>IVs:</b> ${currentIvs.hp}/${currentIvs.atk}/${currentIvs.def}/${currentIvs.spa}/${currentIvs.spd}/${currentIvs.spe}`;
                    
                    isSearching = false;
                    document.getElementById("search-button").textContent = "Find PID";
                    return;
                }
            }
        }
        
        combinationsChecked++;
        if (combinationsChecked % 100 === 0) { // Update progress and yield frequently on big searches
            resultsDiv.textContent = `Searching...\nCombinations checked: ${combinationsChecked.toLocaleString()}`;
            await new Promise(resolve => setTimeout(resolve, 0));
        }
    }}}}}}

    resultsDiv.textContent = "No valid PID found for this combination of criteria.";
    isSearching = false;
    document.getElementById("search-button").textContent = "Find PID";
}