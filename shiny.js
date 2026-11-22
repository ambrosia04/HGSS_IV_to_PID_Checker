const NATURES = [
    "Hardy", "Lonely", "Brave", "Adamant", "Naughty",
    "Bold", "Docile", "Relaxed", "Impish", "Lax",
    "Timid", "Hasty", "Serious", "Jolly", "Naive",
    "Modest", "Mild", "Quiet", "Bashful", "Rash",
    "Calm", "Gentle", "Sassy", "Careful", "Quirky"
];

const GAME_VERSIONS = [
    { key: "diamond", name: "Pokémon Diamond", logo: "logo/diamond.png" },
    { key: "pearl", name: "Pokémon Pearl", logo: "logo/pearl.png" },
    { key: "platinum", name: "Pokémon Platinum", logo: "logo/platinum.png" },
    { key: "heartgold", name: "Pokémon HeartGold", logo: "logo/hg.png" },
    { key: "soulsilver", name: "Pokémon SoulSilver", logo: "logo/ss.png" }
];

// All 9 Pokémon that can have Cute Charm in Gen 4 (DPPt / HGSS)
const CUTE_CHARM_POKEMON = [
    {
        id: 173, name: "Cleffa", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm / Magic Guard",
        obtain: {
            diamond: "Wild: Mt. Coronet, Trophy Garden (Mr. Backlot's daily spawn).",
            pearl: "Wild: Mt. Coronet, Trophy Garden (Mr. Backlot's daily spawn).",
            platinum: "Wild: Mt. Coronet, Trophy Garden (Mr. Backlot's daily spawn).",
            heartgold: "Breed Clefairy or Clefable (or Pokéwalker: Amity Meadow).",
            soulsilver: "Breed Clefairy or Clefable (or Pokéwalker: Amity Meadow)."
        }
    },
    {
        id: 35, name: "Clefairy", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm / Magic Guard",
        obtain: {
            diamond: "Wild: Mt. Coronet, Trophy Garden (Mr. Backlot's daily spawn).",
            pearl: "Wild: Mt. Coronet, Trophy Garden (Mr. Backlot's daily spawn).",
            platinum: "Wild: Mt. Coronet, Trophy Garden (Mr. Backlot's daily spawn).",
            heartgold: "Wild: Mt. Moon, Safari Zone (Meadow tall grass).",
            soulsilver: "Wild: Mt. Moon, Safari Zone (Meadow tall grass)."
        }
    },
    {
        id: 36, name: "Clefable", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm / Magic Guard",
        obtain: {
            diamond: "Evolve Clefairy using a Moon Stone (wild Clefairy hold 5% Moon Stone).",
            pearl: "Evolve Clefairy using a Moon Stone (wild Clefairy hold 5% Moon Stone).",
            platinum: "Evolve Clefairy using a Moon Stone (wild Clefairy hold 5% Moon Stone).",
            heartgold: "Evolve Clefairy using a Moon Stone (Mt. Moon / Tohjo Falls / Pokéathlon).",
            soulsilver: "Evolve Clefairy using a Moon Stone (Mt. Moon / Tohjo Falls / Pokéathlon)."
        }
    },
    {
        id: 174, name: "Igglybuff", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm (only)",
        obtain: {
            diamond: "Wild: Trophy Garden (Mr. Backlot's daily spawn after National Dex).",
            pearl: "Wild: Trophy Garden (Mr. Backlot's daily spawn after National Dex).",
            platinum: "Wild: Trophy Garden (Mr. Backlot's daily spawn after National Dex).",
            heartgold: "Breed Jigglypuff or Wigglytuff (or Pokéwalker: Amity Meadow).",
            soulsilver: "Breed Jigglypuff or Wigglytuff (or Pokéwalker: Amity Meadow)."
        }
    },
    {
        id: 39, name: "Jigglypuff", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm (only)",
        obtain: {
            diamond: "Wild: Trophy Garden (Mr. Backlot's daily spawn after National Dex).",
            pearl: "Wild: Trophy Garden (Mr. Backlot's daily spawn after National Dex).",
            platinum: "Wild: Trophy Garden (Mr. Backlot's daily spawn after National Dex).",
            heartgold: "Wild: Kanto Routes 3 & 4, Safari Zone (Meadow / Swamp).",
            soulsilver: "Wild: Kanto Routes 3 & 4, Safari Zone (Meadow / Swamp)."
        }
    },
    {
        id: 40, name: "Wigglytuff", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm (only)",
        obtain: {
            diamond: "Evolve Jigglypuff using a Moon Stone.",
            pearl: "Evolve Jigglypuff using a Moon Stone.",
            platinum: "Evolve Jigglypuff using a Moon Stone.",
            heartgold: "Evolve Jigglypuff using a Moon Stone.",
            soulsilver: "Evolve Jigglypuff using a Moon Stone."
        }
    },
    {
        id: 300, name: "Skitty", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm / Normalize",
        obtain: {
            diamond: "Wild: Route 222 (Daily Swarm after National Dex).",
            pearl: "Wild: Route 222 (Daily Swarm after National Dex).",
            platinum: "Wild: Route 222 (Daily Swarm after National Dex).",
            heartgold: "Pokéwalker (Hoenn Field, 7,500+ steps) or trade from D/P/Pt.",
            soulsilver: "Pokéwalker (Hoenn Field, 7,500+ steps) or trade from D/P/Pt."
        }
    },
    {
        id: 301, name: "Delcatty", ratio: "25% ♂ / 75% ♀", ability: "Cute Charm / Normalize",
        obtain: {
            diamond: "Evolve Skitty (Route 222 Swarm) using a Moon Stone.",
            pearl: "Evolve Skitty (Route 222 Swarm) using a Moon Stone.",
            platinum: "Evolve Skitty (Route 222 Swarm) using a Moon Stone.",
            heartgold: "Evolve Skitty (Pokéwalker Hoenn Field / Trade) using a Moon Stone.",
            soulsilver: "Evolve Skitty (Pokéwalker Hoenn Field / Trade) using a Moon Stone."
        }
    },
    {
        id: 428, name: "Lopunny", ratio: "50% ♂ / 50% ♀", ability: "Cute Charm / Klutz",
        obtain: {
            diamond: "Evolve Buneary with High Friendship (Wild Buneary: Eterna Forest).",
            pearl: "Evolve Buneary with High Friendship (Wild Buneary: Eterna Forest).",
            platinum: "Evolve Buneary with High Friendship (Wild Buneary: Eterna Forest).",
            heartgold: "Evolve Buneary with High Friendship (Wild Buneary: Route 25 Swarm).",
            soulsilver: "Evolve Buneary with High Friendship (Wild Buneary: Route 25 Swarm)."
        }
    }
];

// Exact Gen 4 Cute Charm PID tables (each block = 25 consecutive PIDs, nature 0..24)
const CUTE_CHARM_TABLES = [
    {
        leadKey: "male",
        leadGender: "Male Lead",
        targetInfo: "Shiny Female (All mixed gender ratios)",
        basePid: 0x00000000
    },
    {
        leadKey: "female-87.5",
        leadGender: "Female Lead",
        targetInfo: "Shiny Male (87.5% Male / 12.5% Female)",
        basePid: 0x00000032
    },
    {
        leadKey: "female-75",
        leadGender: "Female Lead",
        targetInfo: "Shiny Male (75% Male / 25% Female)",
        basePid: 0x0000004B
    },
    {
        leadKey: "female-50",
        leadGender: "Female Lead",
        targetInfo: "Shiny Male (50% Male / 50% Female)",
        basePid: 0x00000096
    },
    {
        leadKey: "female-25",
        leadGender: "Female Lead",
        targetInfo: "Shiny Male (25% Male / 75% Female)",
        basePid: 0x000000C8
    }
];

function toHex8(num) {
    return (num >>> 0).toString(16).toUpperCase().padStart(8, "0");
}

function padId(num) {
    return String(num).padStart(5, "0");
}

function getTsv(tid, sid) {
    return (tid ^ sid) >>> 3;
}

function getPsv(pid) {
    return (((pid >>> 16) ^ (pid & 0xFFFF)) >>> 3);
}

// Build all Cute Charm Shiny Groups
const ALL_GROUPS = [];
const CC_GROUPS_BY_PSV = new Map();

CUTE_CHARM_TABLES.forEach((table) => {
    const groupsByPsv = new Map();

    for (let natureIdx = 0; natureIdx < 25; natureIdx++) {
        const pid = table.basePid + natureIdx;
        const psv = getPsv(pid);
        const entry = {
            pid,
            pidHex: toHex8(pid),
            psv,
            natureIndex: natureIdx,
            nature: NATURES[natureIdx],
            abilitySlot: (pid % 2) + 1
        };

        if (!groupsByPsv.has(psv)) {
            groupsByPsv.set(psv, []);
        }
        groupsByPsv.get(psv).push(entry);
    }

    let groupNum = 1;
    for (const [psv, entries] of groupsByPsv.entries()) {
        const groupObj = {
            leadKey: table.leadKey,
            leadGender: table.leadGender,
            targetInfo: table.targetInfo,
            groupName: `Shiny Group ${groupNum}`,
            psv,
            entries,
            shinyOddsPercent: ((2 / 3) * (entries.length / 25) * 100).toFixed(2)
        };

        ALL_GROUPS.push(groupObj);

        if (!CC_GROUPS_BY_PSV.has(psv)) {
            CC_GROUPS_BY_PSV.set(psv, []);
        }
        CC_GROUPS_BY_PSV.get(psv).push(groupObj);
        groupNum++;
    }
});

function populateNatures() {
    const select = document.getElementById("cc-nature");
    NATURES.forEach((nature, idx) => {
        const opt = document.createElement("option");
        opt.value = String(idx);
        opt.textContent = nature;
        select.appendChild(opt);
    });
}

const floatingTooltip = document.createElement("div");
floatingTooltip.className = "floating-game-tooltip";
floatingTooltip.setAttribute("role", "tooltip");
document.body.appendChild(floatingTooltip);

function showGameTooltip(btn, gameName, obtainText) {
    floatingTooltip.innerHTML =
        `<span class="game-tooltip-title">${gameName}</span>` +
        `${obtainText}`;
    floatingTooltip.classList.add("visible");

    const rect = btn.getBoundingClientRect();
    const tipRect = floatingTooltip.getBoundingClientRect();
    const margin = 12;

    let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
    left = Math.max(margin, Math.min(left, window.innerWidth - tipRect.width - margin));

    let top = rect.top - tipRect.height - 8;
    if (top < margin) {
        top = rect.bottom + 8;
    }

    floatingTooltip.style.left = `${left}px`;
    floatingTooltip.style.top = `${top}px`;
}

function hideGameTooltip() {
    floatingTooltip.classList.remove("visible");
}

function renderSprites() {
    const row = document.getElementById("sprite-row");
    row.addEventListener("scroll", hideGameTooltip);
    window.addEventListener("scroll", hideGameTooltip);

    CUTE_CHARM_POKEMON.forEach((mon) => {
        const card = document.createElement("div");
        card.className = "sprite-card";

        const img = document.createElement("img");
        img.width = 288;
        img.height = 288;
        img.alt = mon.name;
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/${mon.id}.png`;
        img.onerror = () => {
            img.onerror = null;
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.id}.png`;
        };

        const nameEl = document.createElement("div");
        nameEl.className = "sprite-name";
        nameEl.textContent = `#${String(mon.id).padStart(3, "0")} ${mon.name}`;

        const ratioEl = document.createElement("div");
        ratioEl.className = "sprite-meta";
        ratioEl.textContent = `Gender Ratio: ${mon.ratio}`;

        const abilityEl = document.createElement("div");
        abilityEl.className = "sprite-meta";
        abilityEl.textContent = mon.ability;

        const gamesRow = document.createElement("div");
        gamesRow.className = "game-logos-row";

        GAME_VERSIONS.forEach((game) => {
            const item = document.createElement("div");
            item.className = "game-logo-item";

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = `game-logo-btn ${game.key}`;
            btn.setAttribute("aria-label", `${mon.name} in ${game.name}: ${mon.obtain[game.key]}`);

            const logoImg = document.createElement("img");
            logoImg.src = game.logo;
            logoImg.alt = game.name;
            btn.appendChild(logoImg);

            btn.addEventListener("mouseenter", () => showGameTooltip(btn, game.name, mon.obtain[game.key]));
            btn.addEventListener("focus", () => showGameTooltip(btn, game.name, mon.obtain[game.key]));
            btn.addEventListener("mouseleave", hideGameTooltip);
            btn.addEventListener("blur", hideGameTooltip);

            item.appendChild(btn);
            gamesRow.appendChild(item);
        });

        card.appendChild(img);
        card.appendChild(nameEl);
        card.appendChild(ratioEl);
        card.appendChild(abilityEl);
        card.appendChild(gamesRow);
        row.appendChild(card);
    });
}



function getAllMatchingIds(baseId, psv) {
    const list = [];
    for (let k = 0; k < 8; k++) {
        list.push(((psv << 3) | k) ^ baseId);
    }
    return list;
}

function renderBanner(type, text) {
    return `<div class="cc-banner ${type}">${text}</div>`;
}

function renderIdCallout(items, altText = "") {
    const pills = items.map((item) =>
        `<span class="cc-id-pill"><span class="cc-id-label">${item.label}:</span>${item.value}</span>`
    ).join("");
    const altHtml = altText ? `<div class="cc-alt-ids">${altText}</div>` : "";
    return `<div class="cc-id-callout">${pills}</div>${altHtml}`;
}

function renderGroupCard(group, options = {}) {
    const {
        highlightNatureIdx = null,
        idItems = null,
        altText = "",
        cardTitle = ""
    } = options;

    const titleHtml = cardTitle ? `<div class="cc-section-label" style="margin-top:0;">${cardTitle}</div>` : "";
    const idHtml = idItems ? renderIdCallout(idItems, altText) : "";

    const natureChips = group.entries.map((e) => {
        const isTarget = highlightNatureIdx === e.natureIndex;
        const star = isTarget ? "★ " : "";
        return (
            `<div class="cc-nature-chip ${isTarget ? "highlight" : ""}">` +
            `<span class="cc-nature-name">${star}${e.nature}</span>` +
            `<span class="cc-nature-sub">Abil ${e.abilitySlot} · PID ${e.pidHex}</span>` +
            `</div>`
        );
    }).join("");

    return (
        `<div class="cc-card">` +
        titleHtml +
        idHtml +
        `<div class="cc-meta-line"><strong>Lead:</strong> ${group.leadGender} → ${group.targetInfo}</div>` +
        `<div class="cc-meta-line"><strong>Shiny Rate:</strong> ~${group.shinyOddsPercent}% (${group.entries.length}/25 natures · ${group.groupName}, PSV ${group.psv})</div>` +
        `<div class="cc-section-label">Shiny Natures You Will Get:</div>` +
        `<div class="cc-nature-grid">${natureChips}</div>` +
        `</div>`
    );
}

function parseOptionalInt16(raw, label) {
    const trimmed = raw.trim();
    if (trimmed === "") return { provided: false, value: null };
    if (!/^\d+$/.test(trimmed)) {
        return { error: `${label} must be an integer between 0 and 65535.` };
    }
    const num = Number(trimmed);
    if (num < 0 || num > 65535) {
        return { error: `${label} must be between 0 and 65535.` };
    }
    return { provided: true, value: num };
}

function getGroupsForCriteria(leadFilter, natureIdx) {
    return ALL_GROUPS.filter((g) => {
        if (leadFilter !== "any" && g.leadKey !== leadFilter) return false;
        if (natureIdx !== null && !g.entries.some((e) => e.natureIndex === natureIdx)) return false;
        return true;
    });
}

document.getElementById("cute-charm-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const resultsDiv = document.getElementById("results");

    const tidParsed = parseOptionalInt16(document.getElementById("cc-tid").value, "Trainer ID");
    const sidParsed = parseOptionalInt16(document.getElementById("cc-sid").value, "Secret ID");
    const natureRaw = document.getElementById("cc-nature").value;
    const leadFilter = document.getElementById("cc-lead").value;

    for (const p of [tidParsed, sidParsed]) {
        if (p.error) {
            resultsDiv.innerHTML = renderBanner("bad", p.error);
            return;
        }
    }

    const hasTid = tidParsed.provided;
    const hasSid = sidParsed.provided;
    const tid = tidParsed.value;
    const sid = sidParsed.value;
    const natureIdx = (natureRaw === "") ? null : Number(natureRaw);
    const natureName = (natureIdx !== null) ? NATURES[natureIdx] : null;

    // 1. BOTH TID & SID PROVIDED
    if (hasTid && hasSid) {
        const tsv = getTsv(tid, sid);
        const rawGroups = CC_GROUPS_BY_PSV.get(tsv) || [];
        const leadMatchedGroups = (leadFilter === "any")
            ? rawGroups
            : rawGroups.filter((g) => g.leadKey === leadFilter);

        if (leadMatchedGroups.length > 0) {
            if (natureIdx === null) {
                const cards = leadMatchedGroups.map((g, i) => renderGroupCard(g, {
                    idItems: i === 0 ? [
                        { label: "TID", value: padId(tid) },
                        { label: "SID", value: padId(sid) },
                        { label: "TSV", value: tsv }
                    ] : null
                })).join("");
                resultsDiv.innerHTML = renderBanner("ok", "Cute Charm works with this TID & SID!") + cards;
                return;
            }

            const natureMatchedGroups = leadMatchedGroups.filter((g) =>
                g.entries.some((entry) => entry.natureIndex === natureIdx)
            );

            if (natureMatchedGroups.length > 0) {
                const cards = natureMatchedGroups.map((g, i) => renderGroupCard(g, {
                    highlightNatureIdx: natureIdx,
                    idItems: i === 0 ? [
                        { label: "TID", value: padId(tid) },
                        { label: "SID", value: padId(sid) },
                        { label: "Target", value: natureName }
                    ] : null
                })).join("");
                resultsDiv.innerHTML = renderBanner("ok", `Cute Charm works for ${natureName} shinies!`) + cards;
                return;
            }

            // TID+SID works for Cute Charm, just not for the requested Nature
            const targetGroups = getGroupsForCriteria(leadFilter, natureIdx);
            targetGroups.sort((a, b) => (a.leadKey === "male" ? -1 : 1) - (b.leadKey === "male" ? -1 : 1) || b.entries.length - a.entries.length);
            const primaryTarget = targetGroups[0];
            const fixSids = getAllMatchingIds(tid, primaryTarget.psv).map(padId);
            const fixTids = getAllMatchingIds(sid, primaryTarget.psv).map(padId);

            const currentCards = leadMatchedGroups.map((g) => renderGroupCard(g, {
                cardTitle: "What works on your current save:",
                idItems: [
                    { label: "TID", value: padId(tid) },
                    { label: "SID", value: padId(sid) }
                ]
            })).join("");

            const fixCard = renderGroupCard(primaryTarget, {
                highlightNatureIdx: natureIdx,
                cardTitle: `How to get ${natureName} instead:`,
                idItems: [
                    { label: `Keep TID ${padId(tid)} → Use SID`, value: fixSids[0] },
                    { label: `Or Keep SID ${padId(sid)} → Use TID`, value: fixTids[0] }
                ],
                altText: `Other matching SIDs for TID ${padId(tid)}: ${fixSids.slice(1).join(", ")}`
            });

            resultsDiv.innerHTML =
                renderBanner("warn", `Your TID/SID works for Cute Charm, just NOT for ${natureName}.`) +
                currentCards +
                fixCard;
            return;
        }

        // TID+SID does not match Cute Charm for the chosen lead
        const targetGroups = getGroupsForCriteria(leadFilter, natureIdx);
        targetGroups.sort((a, b) => (a.leadKey === "male" ? -1 : 1) - (b.leadKey === "male" ? -1 : 1) || b.entries.length - a.entries.length);

        const recGroup = (natureIdx !== null)
            ? targetGroups[0]
            : (targetGroups.find((g) => g.psv === 1) || targetGroups[0]);

        const fixSids = getAllMatchingIds(tid, recGroup.psv).map(padId);
        const fixTids = getAllMatchingIds(sid, recGroup.psv).map(padId);

        const otherLeadHtml = (rawGroups.length > 0 && leadFilter !== "any")
            ? `<div class="cc-card"><div class="cc-meta-line"><strong>Note:</strong> Your TID/SID <em>does</em> work for a different lead gender: ${rawGroups.map((g) => `${g.leadGender} (${g.targetInfo})`).join(", ")}.</div></div>`
            : "";

        const fixCard = renderGroupCard(recGroup, {
            highlightNatureIdx: natureIdx,
            cardTitle: `Recommended Fix (TSV ${tsv} is not a Cute Charm TSV):`,
            idItems: [
                { label: `Keep TID ${padId(tid)} → Use SID`, value: fixSids[0] },
                { label: `Or Keep SID ${padId(sid)} → Use TID`, value: fixTids[0] }
            ],
            altText: `Other matching SIDs for TID ${padId(tid)}: ${fixSids.slice(1).join(", ")}`
        });

        resultsDiv.innerHTML =
            renderBanner("bad", `Cute Charm will NOT work with TID ${padId(tid)} & SID ${padId(sid)}.`) +
            otherLeadHtml +
            fixCard;
        return;
    }

    // 2. ONLY TID PROVIDED (OR TID + NATURE)
    if (hasTid && !hasSid) {
        let matchingGroups = getGroupsForCriteria(leadFilter, natureIdx);
        if (natureIdx === null && leadFilter === "any") {
            matchingGroups = ALL_GROUPS.filter((g) => g.leadKey === "male" && (g.psv === 1 || g.psv === 0));
        }
        matchingGroups.sort((a, b) => (a.leadKey === "male" ? -1 : 1) - (b.leadKey === "male" ? -1 : 1) || b.entries.length - a.entries.length);

        const cards = matchingGroups.map((g, idx) => {
            const sids = getAllMatchingIds(tid, g.psv).map(padId);
            return renderGroupCard(g, {
                highlightNatureIdx: natureIdx,
                cardTitle: matchingGroups.length > 1 ? `Option ${idx + 1}` : "Working Combination",
                idItems: [
                    { label: "TID", value: padId(tid) },
                    { label: "Needed SID", value: sids[0] }
                ],
                altText: `Other equivalent SIDs: ${sids.slice(1).join(", ")}`
            });
        }).join("");

        const title = natureIdx !== null
            ? `SID needed with TID ${padId(tid)} to hunt ${natureName}:`
            : `Recommended SIDs for TID ${padId(tid)}:`;

        resultsDiv.innerHTML = renderBanner("ok", title) + cards;
        return;
    }

    // 3. ONLY SID PROVIDED (OR SID + NATURE)
    if (!hasTid && hasSid) {
        let matchingGroups = getGroupsForCriteria(leadFilter, natureIdx);
        if (natureIdx === null && leadFilter === "any") {
            matchingGroups = ALL_GROUPS.filter((g) => g.leadKey === "male" && (g.psv === 1 || g.psv === 0));
        }
        matchingGroups.sort((a, b) => (a.leadKey === "male" ? -1 : 1) - (b.leadKey === "male" ? -1 : 1) || b.entries.length - a.entries.length);

        const cards = matchingGroups.map((g, idx) => {
            const tids = getAllMatchingIds(sid, g.psv).map(padId);
            return renderGroupCard(g, {
                highlightNatureIdx: natureIdx,
                cardTitle: matchingGroups.length > 1 ? `Option ${idx + 1}` : "Working Combination",
                idItems: [
                    { label: "Needed TID", value: tids[0] },
                    { label: "SID", value: padId(sid) }
                ],
                altText: `Other equivalent TIDs: ${tids.slice(1).join(", ")}`
            });
        }).join("");

        const title = natureIdx !== null
            ? `TID needed with SID ${padId(sid)} to hunt ${natureName}:`
            : `Recommended TIDs for SID ${padId(sid)}:`;

        resultsDiv.innerHTML = renderBanner("ok", title) + cards;
        return;
    }

    // 4. NEITHER TID NOR SID PROVIDED, NATURE SELECTED
    if (natureIdx !== null) {
        const matchingGroups = getGroupsForCriteria(leadFilter, natureIdx);
        matchingGroups.sort((a, b) => (a.leadKey === "male" ? -1 : 1) - (b.leadKey === "male" ? -1 : 1) || b.entries.length - a.entries.length);

        const exampleTid = 14010;
        const cards = matchingGroups.map((g, idx) => {
            const exampleSid = (g.psv << 3) ^ exampleTid;
            return renderGroupCard(g, {
                highlightNatureIdx: natureIdx,
                cardTitle: matchingGroups.length > 1 ? `Option ${idx + 1}` : "100% Working Pair",
                idItems: [
                    { label: "TID", value: padId(exampleTid) },
                    { label: "SID", value: padId(exampleSid) }
                ]
            });
        }).join("");

        resultsDiv.innerHTML =
            renderBanner("ok", `100% Certain TID & SID to hunt ${natureName} shinies:`) + cards;
        return;
    }

    // 5. ALL BLANK -> 100% CERTAIN RECOMMENDATIONS
    if (leadFilter === "any" || leadFilter === "male") {
        const group2 = ALL_GROUPS.find((g) => g.leadKey === "male" && g.psv === 1);
        const group1 = ALL_GROUPS.find((g) => g.leadKey === "male" && g.psv === 0);

        resultsDiv.innerHTML =
            renderBanner("ok", "100% Certain Gen 4 Cute Charm Combos (Male Lead — Best):") +
            renderGroupCard(group2, {
                cardTitle: "Recommended #1 (Fast Sweepers — Timid / Jolly / Modest)",
                idItems: [
                    { label: "TID", value: "14010" },
                    { label: "SID", value: "14007" }
                ]
            }) +
            renderGroupCard(group1, {
                cardTitle: "Recommended #2 (Physical / Bulky — Adamant / Bold / Brave)",
                idItems: [
                    { label: "TID", value: "20101" },
                    { label: "SID", value: "20101" }
                ]
            });
    } else {
        const groupsForLead = getGroupsForCriteria(leadFilter, null);
        groupsForLead.sort((a, b) => b.entries.length - a.entries.length);
        const bestGroup = groupsForLead[0];
        const exampleTid = 14010;
        const exampleSid = (bestGroup.psv << 3) ^ exampleTid;

        resultsDiv.innerHTML =
            renderBanner("ok", `100% Certain Combo for ${bestGroup.leadGender}:`) +
            renderGroupCard(bestGroup, {
                idItems: [
                    { label: "TID", value: padId(exampleTid) },
                    { label: "SID", value: padId(exampleSid) }
                ]
            });
    }
});

populateNatures();
renderSprites();