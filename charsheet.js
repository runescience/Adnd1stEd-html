const racialStatLimits = {
    Human: { str: [3, 18, 0], int: [3, 18], wis: [3, 18], dex: [3, 18], con: [3, 18], chr: [3, 18] },
    Dwarf: { str: [8, 18, 99], int: [3, 18], wis: [3, 18], dex: [3, 17], con: [12, 19], chr: [3, 16] },
    Elf: { str: [3, 18, 75], int: [8, 18], wis: [3, 18], dex: [7, 19], con: [6, 18], chr: [8, 18] },
    Gnome: { str: [6, 18, 50], int: [7, 18], wis: [3, 18], dex: [3, 18], con: [8, 18], chr: [3, 18] },
    'Half-Elf': { str: [3, 18, 90], int: [4, 18], wis: [3, 18], dex: [6, 18], con: [6, 18], chr: [3, 18] },
    Halfling: { str: [6, 17], int: [6, 18], wis: [3, 17], dex: [10, 19], con: [8, 18], chr: [3, 18] },
    'Half-Orc': { str: [6, 18, 99], int: [3, 17], wis: [3, 14], dex: [3, 17], con: [13, 19], chr: [3, 12] }
};

const racialAdjustments = {
    Human: { str: 0, int: 0, wis: 0, dex: 0, con: 0, chr: 0 },
    Dwarf: { str: 0, int: 0, wis: 0, dex: 0, con: 1, chr: -1 },
    Elf: { str: 0, int: 0, wis: 0, dex: 1, con: -1, chr: 0 },
    'Half-Elf': { str: 0, int: 0, wis: 0, dex: 0, con: 0, chr: 0 },
    Halfling: { str: -1, int: 0, wis: 0, dex: 1, con: 0, chr: 0 },
    Gnome: { str: 0, int: 0, wis: 0, dex: 0, con: 0, chr: 0 },
    'Half-Orc': { str: 1, int: 0, wis: 0, dex: 0, con: 1, chr: -2 }
};

const classRestrictions = {
    cleric: { armor: 'any', shield: 'any', weapons: 'club, flail, hammer, mace, staff, sling' },
    druid: { armor: 'leather', shield: 'wooden', weapons: 'club, dagger, dart, hammer, sling, scimitar, spear, staff' },
    fighter: { armor: 'any', shield: 'any', weapons: 'any' },
    paladin: { armor: 'any', shield: 'any', weapons: 'any' },
    ranger: { armor: 'any', shield: 'any', weapons: 'any' },
    'magic-user': { armor: 'none', shield: 'none', weapons: 'dagger, dart, sling, staff' },
    illusionist: { armor: 'none', shield: 'none', weapons: 'dagger, dart, sling, staff' },
    thief: { armor: 'leather, elfin chain', shield: 'none', weapons: 'bow (short), crossbow (light), dagger, dart, sling, swords (broad, long, short)' },
    assassin: { armor: 'leather, elfin chain', shield: 'any', weapons: 'any' },
    bard: { armor: 'leather, ring mail, elfin chain, magic chain mail', shield: 'none', weapons: 'club, dagger, dart, javelin, scimitar, sling, spear, staff, sword (bastard, broad, long, short)' }
};

const weaponProficiencies = {
    cleric: { starting: 2, penalty: -3, rateLevel: 4 },
    druid: { starting: 2, penalty: -4, rateLevel: 5 },
    fighter: { starting: 4, penalty: -2, rateLevel: 3 },
    paladin: { starting: 3, penalty: -2, rateLevel: 3 },
    ranger: { starting: 3, penalty: -2, rateLevel: 3 },
    'magic-user': { starting: 1, penalty: -5, rateLevel: 6 },
    illusionist: { starting: 1, penalty: -5, rateLevel: 6 },
    thief: { starting: 2, penalty: -3, rateLevel: 4 },
    assassin: { starting: 3, penalty: -2, rateLevel: 4 },
    bard: { starting: 4, penalty: -2, rateLevel: 3 }
};

const secondarySkills = [
    { range: [1, 2], skill: 'Armorer' },
    { range: [3, 4], skill: 'Bowyer/Fletcher' },
    { range: [5, 10], skill: 'Farmer/Gardener' },
    { range: [11, 14], skill: 'Fisher (nets)' },
    { range: [15, 20], skill: 'Forester' },
    { range: [21, 23], skill: 'Gambler' },
    { range: [24, 27], skill: 'Hunter/Fisher' },
    { range: [28, 32], skill: 'Animal Handler' },
    { range: [33, 34], skill: 'Jeweler' },
    { range: [35, 37], skill: 'Leather Worker' },
    { range: [38, 39], skill: 'Painter' },
    { range: [40, 42], skill: 'Mason/Carpenter' },
    { range: [43, 44], skill: 'Miner' },
    { range: [45, 46], skill: 'Navigator' },
    { range: [47, 49], skill: 'Sailor' },
    { range: [50, 51], skill: 'Shipwright' },
    { range: [52, 54], skill: 'Tailor/Weaver' },
    { range: [55, 57], skill: 'Freighter' },
    { range: [58, 60], skill: 'Trader' },
    { range: [61, 64], skill: 'Trapper' },
    { range: [65, 67], skill: 'Woodworker' },
    { range: [68, 85], skill: 'NO SKILL' },
    { range: [86, 100], skill: 'ROLL TWICE' }
];

const classAbilities = {
    cleric: {
        hitDie: 'd8 (max 9)',
        alignment: 'Any',
        xpBonus: 'Wisdom 16+: 10%',
        armor: 'Any',
        weapons: 'Blunt only - club, flail, hammer, mace, staff, sling',
        weaponProf: '2+1/4 levels',
        nonProfPenalty: '-3',
        abilities: [
            'Turn Undead - Cause undead to flee 3d4 rounds or be destroyed. Requires holy symbol.',
            'Spell Casting - Level 1-2 spells granted by faith. Level 3+ granted by deity vassals or deity.',
            'Level 8 - Establish place of worship (>2,000 ft²). Attract 20-200 fanatical followers + men-at-arms.',
            'Level 9 - Establish religious stronghold (>2,500 ft² temple). Construction cost ½ normal due to religious help. Revenue: 9sp/month per inhabitant.'
        ]
    },
    druid: {
        hitDie: 'd8 (max 14)',
        alignment: 'True Neutral Only',
        xpBonus: 'Wisdom and Charisma 16+: 10%',
        armor: 'Leather (wooden shields only)',
        weapons: 'club, dagger, dart, hammer, sling, scimitar, spear, staff',
        weaponProf: '2+1/5 levels',
        nonProfPenalty: '-4',
        abilities: [
            'Spell Casting - Must have mistletoe to cast druidic spells.',
            'Nature Attuned - Never destroy woodlands/crops. Avoid slaying wild animals except self-defense.',
            'Elemental Resistance - +2 vs fire and lightning attacks.',
            'Druid Language - Secret language. Level 3+: +1 language per level.',
            'Level 3 - Identify plants, animals, pure water. Pass through overgrowth without trail at normal speed.',
            'Level 7 - Immune to charm from woodland creatures. Shape change 3/day (reptile, bird, mammal up to 2x druid weight). Heal 1d6x10% damage when changing.',
            'Level 11 - Establish grove in woodlands.',
            'Level 12 - Druid (max 9 in world). Level 13 - Archdruid (max 3). Level 14 - Great Druid (max 1).'
        ]
    },
    fighter: {
        hitDie: 'd10 (max 9)',
        alignment: 'Any',
        xpBonus: 'Strength 16+: 10%',
        armor: 'Any',
        weapons: 'Any',
        weaponProf: '4+1/3 levels',
        nonProfPenalty: '-2',
        abilities: [
            'Multiple Attacks vs <1HD - One attack per level vs foes with <1d8 HD.',
            'Additional Attacks - Level 7: 3/2 attacks with melee. Level 13: 2/1 attacks with melee.',
            'Level 9 - Establish stronghold. Attract men-at-arms led by above-average fighter. Revenue: 7sp/month per inhabitant.',
            'THAC0 improves by 1 every level to minimum of 4. Gain 3 HP per level after 9th. 250,000 XP per level after 11th.'
        ]
    },
    paladin: {
        hitDie: 'd10 (max 9)',
        alignment: 'Lawful Good',
        xpBonus: 'Strength and Wisdom 16+: 10%',
        armor: 'Any',
        weapons: 'Any',
        weaponProf: '3+1/3 levels',
        nonProfPenalty: '-2',
        abilities: [
            'Lawful Good - Seek atonement for chaotic acts. Evil acts = lose powers permanently, become fighter.',
            'Detect Evil - 60\' range, at will.',
            'Improved Saving Throws - +2 to all saves.',
            'Disease Immunity - Immune to all disease.',
            'Lay on Hands - Heal 2 HP per level, 1/day.',
            'Cure Disease - 1/week per 5 levels.',
            'Protection from Evil - 10\' radius aura at all times.',
            'Multiple Attacks vs <1HD - One attack per level vs <1d8 HD foes.',
            'Level 3 - Turn Undead as 1st level cleric, improves per level.',
            'Level 4 - Call Holy Steed (once per 10 years).',
            'Level 7 - 3/2 melee attacks. Level 13 - 2/1 melee attacks.',
            'Level 9 - Construct stronghold (no men-at-arms attracted).',
            'Holy Sword - If possessed, 10\' diameter circle of power dispels magic when unsheathed.',
            'Tenets: Max 10 magic items. Tithe 10%. Only LG henchmen. Minimal wealth retention.'
        ]
    },
    ranger: {
        hitDie: 'd8 (max 11)',
        alignment: 'Any Good',
        xpBonus: 'Strength, Intelligence, Wisdom 16+: 10%',
        armor: 'Any',
        weapons: 'Any',
        weaponProf: '3+1/3 levels',
        nonProfPenalty: '-2',
        abilities: [
            'Favored Enemies - +1/level melee damage vs giant class: bugbears, ettins, giants, gnolls, goblins, hobgoblins, kobolds, ogres, ogre mages, orcs, trolls.',
            'Favored Surprise - Surprise 1-3 in 6, only surprised 1 in 6.',
            'Scroll Use - Cannot read druid or magic-user scrolls.',
            'Ranger Tracking - Underground 65% (normal), 55% (door/stairs), 45% (trap door), 35% (chimney/concealed), 25% (secret). Outdoors 90% base +2% per creature -10% per 24hrs -25% per hour rain.',
            'Level 8 - Can hire henchmen.',
            'Level 10 - Employ clairaudience, clairvoyance, ESP, telepathy items. Attract 2-24 followers (permanent). Stronghold like fighter (no men-at-arms).',
            'Tenets: Non-good alignment = lose powers, become d8 fighter. No hirelings until level 8. Max 3 rangers per party. Carry only personal goods, excess to worthy cause.'
        ]
    },
    'magic-user': {
        hitDie: 'd4 (max 11)',
        alignment: 'Any',
        xpBonus: 'None',
        armor: 'None',
        weapons: 'dagger, dart, sling, staff',
        weaponProf: '1+1/6 levels',
        nonProfPenalty: '-5',
        abilities: [
            'Spell Casting - Must memorize and prepare spells from spell book each day.',
            'Additional Spells - Gain one spell of choice per level. All others must be sought and studied.',
            'Level 11 - Enchant items and scribe magic scrolls.',
            'Level 12 - Construct stronghold. Revenue: 5sp/month per inhabitant. Gain 1 HP per level after 11th.'
        ]
    },
    illusionist: {
        hitDie: 'd4 (max 10)',
        alignment: 'Any',
        xpBonus: 'None',
        armor: 'None',
        weapons: 'dagger, dart, sling, staff',
        weaponProf: '1+1/6 levels',
        nonProfPenalty: '-5',
        abilities: [
            'Spell Casting - Must memorize and prepare spells from spell book each day.',
            'Additional Spells - Gain one spell of choice per level. All others must be sought and studied.',
            'Magic Item Restriction - Potions, illusionist/magic-user scrolls, all rings, specific rods/staves/wands, misc items, artifacts, magic daggers, robes (except arch-magi), books.',
            'Level 10 - Enchant items, scribe scrolls, construct stronghold like magic-user. Gain 1 HP per level after 10th.'
        ]
    },
    thief: {
        hitDie: 'd6 (max 10)',
        alignment: 'Any Neutral or Evil',
        xpBonus: 'Dexterity 16+: 10%',
        armor: 'Leather or elfin chain (no shields)',
        weapons: 'bow (short), crossbow (light), dagger, dart, sling, swords (broad, long, short)',
        weaponProf: '2+1/4 levels',
        nonProfPenalty: '-3',
        abilities: [
            'Thieves\' Cant - Secret language known only to thieves.',
            'Backstab - x2 damage (x3 at level 5, x4 at level 9, x5 at level 13, x6 at level 17). +4 to hit with surprise.',
            'Thief Skills - Pick Pockets, Open Locks, Find/Remove Traps, Move Silently, Hide in Shadows, Hear Noise, Climb Walls, Read Languages. All improve with level.',
            'Level 10 - 75% chance to use magic-user/illusionist/druid scrolls. Construct thieves\' headquarters, attract 4-24 thieves. Gain 2 HP per level after 10th.'
        ]
    },
    assassin: {
        hitDie: 'd8 (max 9)',
        alignment: 'Any Evil',
        xpBonus: 'None',
        armor: 'Leather or elfin chain (any shields)',
        weapons: 'Any',
        weaponProf: '3+1/4 levels',
        nonProfPenalty: '-2',
        abilities: [
            'Poison Use - Expert with poison on weapons. 10% chance per round opponents notice.',
            'Disguise - Change race, class, sex, height, weight. Base 2% detection +2% per change (max 8%). Adjusted ±1% per point of INT+WIS above/below 24.',
            'Spying - May conduct spying operations for hire.',
            'Assassination - x2 damage (x3 at level 5, x4 at level 9, x5 at level 13). +4 to hit with surprise. Base chance to assassinate level-0/1 victim, modified by victim level.',
            'Level 4 - Hire assassins as henchmen. Level 8 - Hire thieves/assassins. Level 9 - Learn secret languages (+1 per level, max INT-14). Level 12 - Hire any evil/neutral class.',
            'Level 14 - Guild with 7-24 members. Must assassinate local master to advance. 75% leave after assassination. Level 15 - Must assassinate grandfather of assassins.'
        ]
    },
    bard: {
        hitDie: 'd6 (max 10)',
        alignment: 'Any Neutral',
        xpBonus: 'None',
        armor: 'leather, ring mail, elfin chain, magic chain mail',
        weapons: 'club, dagger, dart, javelin, scimitar, sling, spear, staff, sword (bastard, broad, long, short)',
        weaponProf: 'As Fighter and Thief',
        nonProfPenalty: '-2',
        abilities: [
            'College - Bards associate only with bards of equal or higher college. Magna-Alumnae aid lesser colleges.',
            'Charm - Chance to charm creatures with music. Does not negate immunities or saves vs magic.',
            'Legend Lore - Chance to know about legendary persons, places, things, or magic items (requires magical inscriptions).',
            'Poetic Ability - Two rounds of speaking poetry grant +10% morale and +1 to hit for all associated creatures in hearing range. Bard may engage in melee but not singing or spell-casting.',
            'Bard Song - Negate Harpies, Shriekers, and song effects. Charm creatures within 40 feet - save vs magic or check percentage. Charmed creatures subject to suggestion at -2 to save.',
            'Magic Items - May use items permitted to fighters, thieves, and druids. Music-related items have additional benefits.',
            'Henchmen - Never serve longer than 1-4 months. May employ 1 at level 5, 2 at level 8, 3 at level 11, 4 at level 14, 5 at level 17, 6 at level 20, unlimited at level 23 (limited by charisma).',
            'Level 23 - Construct stronghold of any sort (fighter, thief, or druid).'
        ]
    }
};

const classLevelProgression = {
    cleric: [
        { level: 1, xp: 0, hd: 1, spells: [1, 0, 0, 0, 0, 0, 0] },
        { level: 2, xp: 1500, hd: 2, spells: [2, 0, 0, 0, 0, 0, 0] },
        { level: 3, xp: 3000, hd: 3, spells: [2, 1, 0, 0, 0, 0, 0] },
        { level: 4, xp: 6000, hd: 4, spells: [3, 2, 0, 0, 0, 0, 0] },
        { level: 5, xp: 13000, hd: 5, spells: [3, 3, 1, 0, 0, 0, 0] },
        { level: 6, xp: 27500, hd: 6, spells: [3, 3, 2, 0, 0, 0, 0] },
        { level: 7, xp: 55000, hd: 7, spells: [3, 3, 2, 1, 0, 0, 0] },
        { level: 8, xp: 110000, hd: 8, spells: [3, 3, 3, 2, 0, 0, 0] },
        { level: 9, xp: 225000, hd: 9, spells: [4, 4, 3, 2, 1, 0, 0] },
        { level: 10, xp: 450000, hd: '9+2', spells: [4, 4, 3, 3, 2, 0, 0] },
        { level: 11, xp: 675000, hd: '9+4', spells: [5, 4, 4, 3, 2, 1, 0] },
        { level: 12, xp: 900000, hd: '9+6', spells: [6, 5, 5, 3, 2, 2, 0] },
        { level: 13, xp: 1125000, hd: '9+8', spells: [6, 6, 6, 5, 2, 2, 0] },
        { level: 14, xp: 1350000, hd: '9+10', spells: [6, 6, 6, 5, 3, 2, 0] },
        { level: 15, xp: 1575000, hd: '9+12', spells: [7, 7, 7, 5, 4, 2, 0] },
        { level: 16, xp: 1800000, hd: '9+14', spells: [7, 7, 7, 6, 5, 3, 1] }
    ],
    druid: [
        { level: 1, xp: 0, hd: 1, spells: [2, 0, 0, 0, 0, 0, 0] },
        { level: 2, xp: 2000, hd: 2, spells: [2, 1, 0, 0, 0, 0, 0] },
        { level: 3, xp: 4000, hd: 3, spells: [3, 2, 1, 0, 0, 0, 0] },
        { level: 4, xp: 7500, hd: 4, spells: [4, 2, 2, 0, 0, 0, 0] },
        { level: 5, xp: 12500, hd: 5, spells: [4, 3, 2, 0, 0, 0, 0] },
        { level: 6, xp: 20000, hd: 6, spells: [4, 3, 2, 1, 0, 0, 0] },
        { level: 7, xp: 35000, hd: 7, spells: [4, 4, 3, 1, 0, 0, 0] },
        { level: 8, xp: 60000, hd: 8, spells: [4, 4, 3, 2, 0, 0, 0] },
        { level: 9, xp: 90000, hd: 9, spells: [5, 4, 3, 2, 1, 0, 0] },
        { level: 10, xp: 125000, hd: 10, spells: [5, 4, 3, 3, 2, 0, 0] },
        { level: 11, xp: 200000, hd: 11, spells: [5, 5, 3, 3, 2, 1, 0] },
        { level: 12, xp: 300000, hd: 12, spells: [5, 5, 4, 4, 3, 2, 1] },
        { level: 13, xp: 750000, hd: 13, spells: [6, 5, 5, 5, 4, 3, 2] },
        { level: 14, xp: 1500000, hd: 14, spells: [6, 6, 6, 6, 5, 4, 3] }
    ],
    fighter: [
        { level: 1, xp: 0, hd: 1, thaco: 20 },
        { level: 2, xp: 2000, hd: 2, thaco: 19 },
        { level: 3, xp: 4000, hd: 3, thaco: 18 },
        { level: 4, xp: 8000, hd: 4, thaco: 17 },
        { level: 5, xp: 18000, hd: 5, thaco: 16 },
        { level: 6, xp: 35000, hd: 6, thaco: 15 },
        { level: 7, xp: 70000, hd: 7, thaco: 14 },
        { level: 8, xp: 125000, hd: 8, thaco: 13 },
        { level: 9, xp: 250000, hd: 9, thaco: 12 },
        { level: 10, xp: 500000, hd: '9+3', thaco: 11 },
        { level: 11, xp: 750000, hd: '9+6', thaco: 10 }
    ],
    paladin: [
        { level: 1, xp: 0, hd: 1, thaco: 20, spells: [0, 0, 0, 0] },
        { level: 2, xp: 2750, hd: 2, thaco: 19, spells: [0, 0, 0, 0] },
        { level: 3, xp: 5500, hd: 3, thaco: 18, spells: [0, 0, 0, 0] },
        { level: 4, xp: 12000, hd: 4, thaco: 17, spells: [0, 0, 0, 0] },
        { level: 5, xp: 24000, hd: 5, thaco: 16, spells: [0, 0, 0, 0] },
        { level: 6, xp: 45000, hd: 6, thaco: 15, spells: [0, 0, 0, 0] },
        { level: 7, xp: 95000, hd: 7, thaco: 14, spells: [0, 0, 0, 0] },
        { level: 8, xp: 175000, hd: 8, thaco: 13, spells: [0, 0, 0, 0] },
        { level: 9, xp: 350000, hd: 9, thaco: 12, spells: [1, 0, 0, 0] },
        { level: 10, xp: 700000, hd: '9+3', thaco: 11, spells: [2, 0, 0, 0] },
        { level: 11, xp: 1050000, hd: '9+6', thaco: 10, spells: [2, 1, 0, 0] },
        { level: 12, xp: 1400000, hd: '9+9', thaco: 9, spells: [2, 2, 0, 0] }
    ],
    ranger: [
        { level: 1, xp: 0, hd: 2, thaco: 20, druidSpells: [0, 0, 0], magicSpells: [0, 0] },
        { level: 2, xp: 2250, hd: 3, thaco: 19, druidSpells: [0, 0, 0], magicSpells: [0, 0] },
        { level: 3, xp: 4500, hd: 4, thaco: 18, druidSpells: [0, 0, 0], magicSpells: [0, 0] },
        { level: 4, xp: 10000, hd: 5, thaco: 17, druidSpells: [0, 0, 0], magicSpells: [0, 0] },
        { level: 5, xp: 20000, hd: 6, thaco: 16, druidSpells: [0, 0, 0], magicSpells: [0, 0] },
        { level: 6, xp: 40000, hd: 7, thaco: 15, druidSpells: [0, 0, 0], magicSpells: [0, 0] },
        { level: 7, xp: 90000, hd: 8, thaco: 14, druidSpells: [0, 0, 0], magicSpells: [0, 0] },
        { level: 8, xp: 150000, hd: 9, thaco: 13, druidSpells: [1, 0, 0], magicSpells: [0, 0] },
        { level: 9, xp: 225000, hd: 10, thaco: 12, druidSpells: [1, 0, 0], magicSpells: [1, 0] },
        { level: 10, xp: 325000, hd: 11, thaco: 11, druidSpells: [2, 0, 0], magicSpells: [1, 0] },
        { level: 11, xp: 650000, hd: '11+2', thaco: 10, druidSpells: [2, 0, 0], magicSpells: [2, 0] },
        { level: 12, xp: 975000, hd: '11+4', thaco: 9, druidSpells: [2, 1, 0], magicSpells: [2, 0] },
        { level: 13, xp: 1300000, hd: '11+6', thaco: 8, druidSpells: [2, 1, 0], magicSpells: [2, 1] },
        { level: 14, xp: 1625000, hd: '11+8', thaco: 7, druidSpells: [2, 2, 0], magicSpells: [2, 1] },
        { level: 15, xp: 1950000, hd: '11+10', thaco: 6, druidSpells: [2, 2, 0], magicSpells: [2, 2] },
        { level: 16, xp: 2275000, hd: '11+12', thaco: 5, druidSpells: [2, 2, 1], magicSpells: [2, 2] },
        { level: 17, xp: 2600000, hd: '11+14', thaco: 4, druidSpells: [2, 2, 2], magicSpells: [2, 2] }
    ],
    'magic-user': [
        { level: 1, xp: 0, hd: 1, thaco: 20, spells: [1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { level: 2, xp: 2500, hd: 2, thaco: 20, spells: [2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { level: 3, xp: 5000, hd: 3, thaco: 20, spells: [2, 1, 0, 0, 0, 0, 0, 0, 0] },
        { level: 4, xp: 10000, hd: 4, thaco: 20, spells: [3, 2, 0, 0, 0, 0, 0, 0, 0] },
        { level: 5, xp: 22500, hd: 5, thaco: 20, spells: [4, 2, 1, 0, 0, 0, 0, 0, 0] },
        { level: 6, xp: 40000, hd: 6, thaco: 19, spells: [4, 2, 2, 0, 0, 0, 0, 0, 0] },
        { level: 7, xp: 60000, hd: 7, thaco: 19, spells: [4, 3, 2, 1, 0, 0, 0, 0, 0] },
        { level: 8, xp: 90000, hd: 8, thaco: 19, spells: [4, 3, 2, 2, 0, 0, 0, 0, 0] },
        { level: 9, xp: 135000, hd: 9, thaco: 19, spells: [4, 3, 3, 2, 1, 0, 0, 0, 0] },
        { level: 10, xp: 250000, hd: 10, thaco: 19, spells: [4, 4, 3, 2, 2, 0, 0, 0, 0] },
        { level: 11, xp: 375000, hd: 11, thaco: 16, spells: [4, 4, 3, 3, 3, 0, 0, 0, 0] },
        { level: 12, xp: 750000, hd: '11+1', thaco: 16, spells: [4, 4, 4, 4, 4, 1, 0, 0, 0] },
        { level: 13, xp: 1125000, hd: '11+2', thaco: 16, spells: [5, 5, 4, 4, 4, 2, 0, 0, 0] },
        { level: 14, xp: 1500000, hd: '11+3', thaco: 16, spells: [5, 5, 4, 4, 4, 2, 1, 0, 0] },
        { level: 15, xp: 1875000, hd: '11+4', thaco: 16, spells: [5, 5, 5, 5, 5, 2, 1, 0, 0] },
        { level: 16, xp: 2250000, hd: '11+5', thaco: 13, spells: [5, 5, 5, 5, 5, 3, 2, 1, 0] },
        { level: 17, xp: 2625000, hd: '11+6', thaco: 13, spells: [5, 5, 5, 5, 5, 3, 3, 2, 0] },
        { level: 18, xp: 3000000, hd: '11+7', thaco: 13, spells: [5, 5, 5, 5, 5, 3, 3, 2, 1] },
        { level: 19, xp: 3375000, hd: '11+8', thaco: 13, spells: [5, 5, 5, 5, 5, 3, 3, 3, 1] },
        { level: 20, xp: 3750000, hd: '11+9', thaco: 13, spells: [5, 5, 5, 5, 5, 4, 3, 3, 2] },
        { level: 21, xp: 4125000, hd: '11+10', thaco: 11, spells: [5, 5, 5, 5, 5, 4, 4, 4, 2] },
        { level: 22, xp: 4500000, hd: '11+11', thaco: 11, spells: [5, 5, 5, 5, 5, 5, 4, 4, 3] },
        { level: 23, xp: 4875000, hd: '11+12', thaco: 11, spells: [5, 5, 5, 5, 5, 5, 5, 5, 3] },
        { level: 24, xp: 5250000, hd: '11+13', thaco: 11, spells: [5, 5, 5, 5, 5, 5, 5, 5, 4] },
        { level: 25, xp: 5625000, hd: '11+14', thaco: 11, spells: [5, 5, 5, 5, 5, 5, 5, 5, 5] },
        { level: 26, xp: 6000000, hd: '11+15', thaco: 11, spells: [6, 6, 6, 6, 5, 5, 5, 5, 5] },
        { level: 27, xp: 6350000, hd: '11+16', thaco: 11, spells: [6, 6, 6, 6, 6, 6, 6, 5, 5] },
        { level: 28, xp: 6750000, hd: '11+17', thaco: 11, spells: [6, 6, 6, 6, 6, 6, 6, 6, 6] },
        { level: 29, xp: 7125000, hd: '11+18', thaco: 11, spells: [7, 7, 7, 7, 6, 6, 6, 6, 6] }
    ],
    illusionist: [
        { level: 1, xp: 0, hd: 1, thaco: 20, spells: [1, 0, 0, 0, 0, 0, 0] },
        { level: 2, xp: 2250, hd: 2, thaco: 20, spells: [2, 0, 0, 0, 0, 0, 0] },
        { level: 3, xp: 4500, hd: 3, thaco: 20, spells: [2, 1, 0, 0, 0, 0, 0] },
        { level: 4, xp: 9000, hd: 4, thaco: 20, spells: [3, 2, 0, 0, 0, 0, 0] },
        { level: 5, xp: 18000, hd: 5, thaco: 20, spells: [4, 2, 1, 0, 0, 0, 0] },
        { level: 6, xp: 35000, hd: 6, thaco: 19, spells: [4, 3, 1, 0, 0, 0, 0] },
        { level: 7, xp: 60000, hd: 7, thaco: 19, spells: [4, 3, 2, 0, 0, 0, 0] },
        { level: 8, xp: 95000, hd: 8, thaco: 19, spells: [4, 3, 2, 1, 0, 0, 0] },
        { level: 9, xp: 145000, hd: 9, thaco: 19, spells: [5, 3, 3, 2, 0, 0, 0] },
        { level: 10, xp: 220000, hd: 10, thaco: 19, spells: [5, 4, 3, 2, 1, 0, 0] },
        { level: 11, xp: 440000, hd: '10+1', thaco: 16, spells: [5, 4, 3, 3, 2, 0, 0] },
        { level: 12, xp: 660000, hd: '10+2', thaco: 16, spells: [5, 5, 4, 3, 2, 1, 0] },
        { level: 13, xp: 880000, hd: '10+3', thaco: 16, spells: [5, 5, 4, 3, 2, 2, 0] },
        { level: 14, xp: 1100000, hd: '10+4', thaco: 16, spells: [5, 5, 4, 3, 2, 2, 1] },
        { level: 15, xp: 1320000, hd: '10+5', thaco: 16, spells: [5, 5, 4, 4, 2, 2, 2] },
        { level: 16, xp: 1540000, hd: '10+6', thaco: 13, spells: [5, 5, 5, 4, 3, 2, 2] },
        { level: 17, xp: 1760000, hd: '10+7', thaco: 13, spells: [5, 5, 5, 5, 3, 2, 2] },
        { level: 18, xp: 1980000, hd: '10+8', thaco: 13, spells: [5, 5, 5, 5, 3, 3, 2] },
        { level: 19, xp: 2200000, hd: '10+9', thaco: 13, spells: [5, 5, 5, 5, 4, 3, 2] },
        { level: 20, xp: 2420000, hd: '10+10', thaco: 13, spells: [5, 5, 5, 5, 4, 3, 3] },
        { level: 21, xp: 2640000, hd: '10+11', thaco: 11, spells: [5, 5, 5, 5, 5, 4, 3] },
        { level: 22, xp: 2860000, hd: '10+12', thaco: 11, spells: [5, 5, 5, 5, 5, 5, 4] },
        { level: 23, xp: 3080000, hd: '10+13', thaco: 11, spells: [5, 5, 5, 5, 5, 5, 5] },
        { level: 24, xp: 3300000, hd: '10+14', thaco: 11, spells: [6, 6, 6, 6, 5, 5, 5] },
        { level: 25, xp: 3520000, hd: '10+15', thaco: 11, spells: [6, 6, 6, 6, 6, 6, 6] },
        { level: 26, xp: 3740000, hd: '10+16', thaco: 11, spells: [7, 7, 7, 7, 6, 6, 6] }
    ],
    thief: [
        { level: 1, xp: 0, hd: 1, thaco: 20, backstab: 'x2', pp: '30%', ol: '25%', ft: '20%', ms: '15%', hs: '10%', hn: '85%', cw: '-', rl: '-' },
        { level: 2, xp: 1250, hd: 2, thaco: 20, backstab: 'x2', pp: '35%', ol: '29%', ft: '25%', ms: '21%', hs: '15%', hn: '86%', cw: '-', rl: '-' },
        { level: 3, xp: 2500, hd: 3, thaco: 20, backstab: 'x2', pp: '40%', ol: '33%', ft: '30%', ms: '27%', hs: '20%', hn: '87%', cw: '-', rl: '-' },
        { level: 4, xp: 5000, hd: 4, thaco: 20, backstab: 'x2', pp: '45%', ol: '37%', ft: '35%', ms: '33%', hs: '25%', hn: '88%', cw: '20%', rl: '-' },
        { level: 5, xp: 10000, hd: 5, thaco: 19, backstab: 'x3', pp: '50%', ol: '42%', ft: '40%', ms: '40%', hs: '31%', hn: '90%', cw: '25%', rl: '-' },
        { level: 6, xp: 20000, hd: 6, thaco: 19, backstab: 'x3', pp: '55%', ol: '47%', ft: '45%', ms: '47%', hs: '37%', hn: '92%', cw: '30%', rl: '-' },
        { level: 7, xp: 42500, hd: 7, thaco: 19, backstab: 'x3', pp: '60%', ol: '52%', ft: '50%', ms: '55%', hs: '43%', hn: '94%', cw: '35%', rl: '-' },
        { level: 8, xp: 70000, hd: 8, thaco: 19, backstab: 'x3', pp: '65%', ol: '57%', ft: '55%', ms: '62%', hs: '49%', hn: '96%', cw: '40%', rl: '-' },
        { level: 9, xp: 110000, hd: 9, thaco: 16, backstab: 'x4', pp: '70%', ol: '62%', ft: '60%', ms: '70%', hs: '56%', hn: '98%', cw: '45%', rl: '-' },
        { level: 10, xp: 160000, hd: 10, thaco: 16, backstab: 'x4', pp: '80%', ol: '67%', ft: '65%', ms: '78%', hs: '63%', hn: '99%', cw: '50%', rl: '-' },
        { level: 11, xp: 220000, hd: '10+2', thaco: 16, backstab: 'x4', pp: '90%', ol: '72%', ft: '70%', ms: '86%', hs: '70%', hn: '99.1%', cw: '55%', rl: '-' },
        { level: 12, xp: 440000, hd: '10+4', thaco: 16, backstab: 'x4', pp: '100%', ol: '77%', ft: '75%', ms: '94%', hs: '77%', hn: '99.2%', cw: '60%', rl: '-' },
        { level: 13, xp: 660000, hd: '10+6', thaco: 14, backstab: 'x5', pp: '105%', ol: '82%', ft: '80%', ms: '99%', hs: '85%', hn: '99.3%', cw: '65%', rl: '-' },
        { level: 14, xp: 880000, hd: '10+8', thaco: 14, backstab: 'x5', pp: '110%', ol: '87%', ft: '85%', ms: '99%', hs: '93%', hn: '99.4%', cw: '70%', rl: '-' },
        { level: 15, xp: 1100000, hd: '10+10', thaco: 14, backstab: 'x5', pp: '115%', ol: '92%', ft: '90%', ms: '99%', hs: '99%', hn: '99.5%', cw: '75%', rl: '-' },
        { level: 16, xp: 1320000, hd: '10+12', thaco: 14, backstab: 'x5', pp: '125%', ol: '97%', ft: '95%', ms: '99%', hs: '99%', hn: '99.6%', cw: '80%', rl: '-' },
        { level: 17, xp: 1540000, hd: '10+14', thaco: 12, backstab: 'x6', pp: '125%', ol: '99%', ft: '99%', ms: '99%', hs: '99%', hn: '99.7%', cw: '80%', rl: '-' }
    ],
    assassin: [
        { level: 1, xp: 0, hd: 1, thaco: 20, backstab: '50%', assassination: '-', pp: '-', ol: '-', ft: '-', ms: '-', hs: '-', hn: '-', cw: '-', rl: '-' },
        { level: 2, xp: 1500, hd: 2, thaco: 20, backstab: '55%', assassination: '-', pp: '-', ol: '-', ft: '-', ms: '-', hs: '-', hn: '-', cw: '-', rl: '-' },
        { level: 3, xp: 3000, hd: 3, thaco: 20, backstab: '60%', assassination: '30%', pp: '25%', ol: '20%', ft: '15%', ms: '10%', hs: '10%', hn: '85%', cw: '-', rl: '-' },
        { level: 4, xp: 6000, hd: 4, thaco: 20, backstab: '65%', assassination: '35%', pp: '29%', ol: '25%', ft: '21%', ms: '15%', hs: '10%', hn: '86%', cw: '-', rl: '-' },
        { level: 5, xp: 12000, hd: 5, thaco: 19, backstab: '70%', assassination: '40%', pp: '33%', ol: '30%', ft: '27%', ms: '20%', hs: '15%', hn: '87%', cw: '-', rl: '-' },
        { level: 6, xp: 25000, hd: 6, thaco: 19, backstab: '75%', assassination: '45%', pp: '37%', ol: '35%', ft: '33%', ms: '25%', hs: '15%', hn: '88%', cw: '20%', rl: '-' },
        { level: 7, xp: 50000, hd: 7, thaco: 19, backstab: '80%', assassination: '50%', pp: '42%', ol: '40%', ft: '40%', ms: '31%', hs: '20%', hn: '90%', cw: '25%', rl: '-' },
        { level: 8, xp: 100000, hd: 8, thaco: 19, backstab: '85%', assassination: '55%', pp: '47%', ol: '45%', ft: '47%', ms: '37%', hs: '20%', hn: '92%', cw: '30%', rl: '-' },
        { level: 9, xp: 200000, hd: 9, thaco: 16, backstab: '90%', assassination: '60%', pp: '52%', ol: '50%', ft: '55%', ms: '43%', hs: '25%', hn: '94%', cw: '35%', rl: '-' },
        { level: 10, xp: 300000, hd: 10, thaco: 16, backstab: '95%', assassination: '65%', pp: '57%', ol: '55%', ft: '62%', ms: '49%', hs: '25%', hn: '96%', cw: '40%', rl: '-' },
        { level: 11, xp: 425000, hd: 11, thaco: 16, backstab: '99%', assassination: '70%', pp: '62%', ol: '60%', ft: '70%', ms: '56%', hs: '30%', hn: '98%', cw: '45%', rl: '-' },
        { level: 12, xp: 575000, hd: 12, thaco: 16, backstab: '100%', assassination: '80%', pp: '67%', ol: '65%', ft: '78%', ms: '63%', hs: '30%', hn: '99%', cw: '50%', rl: '-' },
        { level: 13, xp: 750000, hd: 13, thaco: 14, backstab: '100%', assassination: '90%', pp: '72%', ol: '70%', ft: '86%', ms: '70%', hs: '35%', hn: '99.1%', cw: '55%', rl: '-' },
        { level: 14, xp: 1000000, hd: 14, thaco: 14, backstab: '100%', assassination: '100%', pp: '77%', ol: '75%', ft: '94%', ms: '77%', hs: '35%', hn: '99.2%', cw: '60%', rl: '-' },
        { level: 15, xp: 1500000, hd: 15, thaco: 14, backstab: '100%', assassination: '105%', pp: '82%', ol: '80%', ft: '99%', ms: '85%', hs: '40%', hn: '99.3%', cw: '65%', rl: '-' }
    ]
};

const racialAbilities = {
    Human: {
        languages: 'Common, Alignment',
        infravision: 'None',
        hearing: '2 in 20 (10%)',
        movement: '12" (120\'/turn)',
        special: 'No level limits - can advance to maximum/unlimited level in all classes',
        dualClass: 'May dual-class: 15+ in 1st class prime req, 17+ in 2nd class prime req. Retain HD/HP, start at 1st level in new class, lose old abilities until new level exceeds old. Must follow stricter armor/weapon restrictions when using abilities.'
    },
    Dwarf: {
        languages: 'Dwarven, Gnome, Goblin, Kobold, Orcish, Common, Alignment. +2 languages max from INT',
        infravision: '60\'',
        hearing: '2 in 20 (10%)',
        movement: '9" (90\'/turn)',
        combatBonus: '+1 to hit vs goblins, half-orcs, hobgoblins, orcs',
        defenseBonus: '-4 AC vs giants, ogres, ogre mages, titans, trolls',
        saveBonus: '+1 per 3.5 CON vs spells, wands, rods, staves, poison',
        multiClass: 'Must use thief armor limits when using thief abilities',
        stoneSense: { slopes: '75%', newConstruction: '75%', slidingWalls: '1-4 in 6', traps: '50%', depth: '50%' },
        thiefSkills: { openLocks: '+10%', findTraps: '+15%', climbWalls: '-10%', readLang: '-5%' }
    },
    Elf: { languages: 'Elven, Gnome, Halfling, Goblin, Hobgoblin, Orcish, Gnoll, Common, Alignment', infravision: '60\'', movement: '12"', special: 'Placeholder' },
    Gnome: {
        languages: 'Dwarven, Gnome, Halfling, Goblin, Kobold, Burrowing Mammals, Common, Alignment. +2 languages max from INT',
        infravision: '60\'',
        hearing: '4 in 20 (20%)',
        movement: '9" (90\'/turn)',
        combatBonus: '+1 to hit vs kobolds and goblins',
        defenseBonus: '-4 AC vs bugbears, gnolls, ogres, ogre mages, giants, titans, trolls',
        saveBonus: '+1 per 3.5 CON vs spells, wands, rods, staves, poison',
        multiClass: 'May not wear armor better than leather when multi-classed',
        stoneSense: { slopes: '80%', unsafe: '70%', depth: '60%', direction: '50%' },
        thiefSkills: { openLocks: '+5%', findTraps: '+10%', moveSilent: '+5%', hideShadows: '+5%', hearNoise: '+10%', climbWalls: '-15%' }
    },
    'Half-Elf': {
        languages: 'Elven, Gnome, Halfling, Goblin, Hobgoblin, Orcish, Gnoll, Common, Alignment. +1 language per INT above 16',
        infravision: '60\'',
        hearing: '2 in 20 (10%)',
        movement: '12" (120\'/turn)',
        resistance: '30% vs sleep and charm spells',
        secretDoors: '1-in-6 notice passing (10\'), 2-in-6 searching, 3-in-6 concealed doors',
        multiClass: 'Must use thief armor limits when using thief abilities',
        thiefSkills: { pickPockets: '+10%', hideShadows: '+5%' }
    },
    Halfling: {
        languages: 'Dwarven, Elven, Gnome, Goblin, Halfling, Orcish, Common, Alignment. +1 language per INT above 16',
        infravision: '15% chance 60\', 25% chance limited 30\'',
        hearing: '3 in 20 (15%)',
        movement: '9" (90\'/turn)',
        combatBonus: '+3 to hit with bows or slings',
        saveBonus: '+1 per 3.5 CON vs spells, wands, rods, staves, poison',
        surprise: '4-in-6 (non-metal armor, alone/90\' ahead or all elves/halflings)',
        multiClass: 'Must use thief armor limits when using thief abilities',
        thiefSkills: { pickPockets: '+5%', openLocks: '+5%', findTraps: '+5%', moveSilent: '+10%', hideShadows: '+15%', hearNoise: '+5%', climbWalls: '-15%', readLang: '-10%' }
    },
    'Half-Orc': {
        languages: 'Orcish, Common, Alignment. +2 languages max from INT',
        infravision: '60\'',
        hearing: '3 in 20 (15%)',
        movement: '12" (120\'/turn)',
        multiClass: 'Must use armor limits of most restrictive class when multi-classing',
        thiefSkills: { pickPockets: '-5%', openLocks: '+5%', findTraps: '+5%', hearNoise: '+5%', climbWalls: '+5%', readLang: '-10%' },
        special: 'Soulless: Cannot be raised via Raise Dead or Resurrection, only Reincarnation'
    }
};

const strengthTable = {
    3: { hitAdj: -3, dmgAdj: -1, weightAllow: -350, openDoors: '1', bendBars: '0%' },
    4: { hitAdj: -2, dmgAdj: -1, weightAllow: -250, openDoors: '1', bendBars: '0%' },
    5: { hitAdj: -2, dmgAdj: -1, weightAllow: -250, openDoors: '1', bendBars: '0%' },
    6: { hitAdj: -1, dmgAdj: 0, weightAllow: -150, openDoors: '1', bendBars: '0%' },
    7: { hitAdj: -1, dmgAdj: 0, weightAllow: -150, openDoors: '1', bendBars: '0%' },
    8: { hitAdj: 0, dmgAdj: 0, weightAllow: 0, openDoors: '1-2', bendBars: '1%' },
    9: { hitAdj: 0, dmgAdj: 0, weightAllow: 0, openDoors: '1-2', bendBars: '1%' },
    10: { hitAdj: 0, dmgAdj: 0, weightAllow: 0, openDoors: '1-2', bendBars: '2%' },
    11: { hitAdj: 0, dmgAdj: 0, weightAllow: 0, openDoors: '1-2', bendBars: '2%' },
    12: { hitAdj: 0, dmgAdj: 0, weightAllow: 100, openDoors: '1-2', bendBars: '4%' },
    13: { hitAdj: 0, dmgAdj: 0, weightAllow: 100, openDoors: '1-2', bendBars: '4%' },
    14: { hitAdj: 0, dmgAdj: 0, weightAllow: 200, openDoors: '1-2', bendBars: '7%' },
    15: { hitAdj: 0, dmgAdj: 0, weightAllow: 200, openDoors: '1-2', bendBars: '7%' },
    16: { hitAdj: 0, dmgAdj: 1, weightAllow: 350, openDoors: '1-3', bendBars: '10%' },
    17: { hitAdj: 1, dmgAdj: 1, weightAllow: 500, openDoors: '1-3', bendBars: '13%' },
    18: { hitAdj: 1, dmgAdj: 2, weightAllow: 750, openDoors: '1-3', bendBars: '16%' },
    '18/01': { hitAdj: 1, dmgAdj: 3, weightAllow: 1000, openDoors: '1-3', bendBars: '20%' },
    '18/51': { hitAdj: 2, dmgAdj: 3, weightAllow: 1250, openDoors: '1-4', bendBars: '25%' },
    '18/76': { hitAdj: 2, dmgAdj: 4, weightAllow: 1500, openDoors: '1-4', bendBars: '30%' },
    '18/91': { hitAdj: 2, dmgAdj: 5, weightAllow: 2000, openDoors: '1-4', bendBars: '35%' },
    '18/00': { hitAdj: 3, dmgAdj: 6, weightAllow: 3000, openDoors: '1-5', bendBars: '40%' }
};

const intelligenceTable = {
    3: { addLang: 0, knowSpell: '-', minSpells: '-', maxSpells: '-', maxLevel: '-', illusionImmune: '-' },
    4: { addLang: 0, knowSpell: '-', minSpells: '-', maxSpells: '-', maxLevel: '-', illusionImmune: '-' },
    5: { addLang: 0, knowSpell: '-', minSpells: '-', maxSpells: '-', maxLevel: '-', illusionImmune: '-' },
    6: { addLang: 0, knowSpell: '-', minSpells: '-', maxSpells: '-', maxLevel: '-', illusionImmune: '-' },
    7: { addLang: 0, knowSpell: '-', minSpells: '-', maxSpells: '-', maxLevel: '-', illusionImmune: '-' },
    8: { addLang: 1, knowSpell: '-', minSpells: '-', maxSpells: '-', maxLevel: '-', illusionImmune: '-' },
    9: { addLang: 1, knowSpell: '35%', minSpells: 4, maxSpells: 6, maxLevel: '4th', illusionImmune: '-' },
    10: { addLang: 2, knowSpell: '45%', minSpells: 5, maxSpells: 7, maxLevel: '5th', illusionImmune: '-' },
    11: { addLang: 2, knowSpell: '45%', minSpells: 5, maxSpells: 7, maxLevel: '5th', illusionImmune: '-' },
    12: { addLang: 3, knowSpell: '45%', minSpells: 5, maxSpells: 7, maxLevel: '6th', illusionImmune: '-' },
    13: { addLang: 3, knowSpell: '55%', minSpells: 6, maxSpells: 9, maxLevel: '6th', illusionImmune: '-' },
    14: { addLang: 4, knowSpell: '55%', minSpells: 6, maxSpells: 9, maxLevel: '7th', illusionImmune: '-' },
    15: { addLang: 4, knowSpell: '65%', minSpells: 7, maxSpells: 11, maxLevel: '7th', illusionImmune: '-' },
    16: { addLang: 5, knowSpell: '65%', minSpells: 7, maxSpells: 11, maxLevel: '8th', illusionImmune: '-' },
    17: { addLang: 6, knowSpell: '75%', minSpells: 8, maxSpells: 14, maxLevel: '8th', illusionImmune: '-' },
    18: { addLang: 7, knowSpell: '85%', minSpells: 9, maxSpells: 18, maxLevel: '9th', illusionImmune: '-' },
    19: { addLang: 7, knowSpell: '95%', minSpells: 10, maxSpells: 'All', maxLevel: '9th', illusionImmune: '1st' },
    20: { addLang: 7, knowSpell: '96%', minSpells: 11, maxSpells: 'All', maxLevel: '9th', illusionImmune: '2nd' },
    21: { addLang: 7, knowSpell: '97%', minSpells: 12, maxSpells: 'All', maxLevel: '9th', illusionImmune: '3rd' },
    22: { addLang: 7, knowSpell: '98%', minSpells: 13, maxSpells: 'All', maxLevel: '9th', illusionImmune: '4th' },
    23: { addLang: 7, knowSpell: '99%', minSpells: 14, maxSpells: 'All', maxLevel: '9th', illusionImmune: '5th' },
    24: { addLang: 7, knowSpell: '100%', minSpells: 15, maxSpells: 'All', maxLevel: '9th', illusionImmune: '6th' },
    25: { addLang: 7, knowSpell: '100%', minSpells: 16, maxSpells: 'All', maxLevel: '9th', illusionImmune: '7th' }
};

const wisdomTable = {
    3: { magicAdj: -3, bonusSpells: 'none', spellFailure: '-', spellImmune: '-' },
    4: { magicAdj: -2, bonusSpells: 'none', spellFailure: '-', spellImmune: '-' },
    5: { magicAdj: -1, bonusSpells: 'none', spellFailure: '-', spellImmune: '-' },
    6: { magicAdj: 0, bonusSpells: 'none', spellFailure: '-', spellImmune: '-' },
    7: { magicAdj: 0, bonusSpells: 'none', spellFailure: '-', spellImmune: '-' },
    8: { magicAdj: 0, bonusSpells: 'none', spellFailure: '-', spellImmune: '-' },
    9: { magicAdj: 0, bonusSpells: 'none', spellFailure: '20%', spellImmune: '-' },
    10: { magicAdj: 0, bonusSpells: 'none', spellFailure: '15%', spellImmune: '-' },
    11: { magicAdj: 0, bonusSpells: 'none', spellFailure: '10%', spellImmune: '-' },
    12: { magicAdj: 0, bonusSpells: 'none', spellFailure: '5%', spellImmune: '-' },
    13: { magicAdj: 0, bonusSpells: '1/-/-/-/-/-/-', spellFailure: '0%', spellImmune: '-' },
    14: { magicAdj: 0, bonusSpells: '2/-/-/-/-/-/-', spellFailure: '-', spellImmune: '-' },
    15: { magicAdj: 1, bonusSpells: '2/1/-/-/-/-/-', spellFailure: '-', spellImmune: '-' },
    16: { magicAdj: 2, bonusSpells: '2/2/-/-/-/-/-', spellFailure: '-', spellImmune: '-' },
    17: { magicAdj: 3, bonusSpells: '2/2/1/-/-/-/-', spellFailure: '-', spellImmune: '-' },
    18: { magicAdj: 4, bonusSpells: '2/2/1/1/-/-/-', spellFailure: '-', spellImmune: '-' }
};

const charismaTable = {
    3: { maxHench: 1, loyaltyBase: '-30%', reactionAdj: '-25%' },
    4: { maxHench: 1, loyaltyBase: '-25%', reactionAdj: '-20%' },
    5: { maxHench: 2, loyaltyBase: '-20%', reactionAdj: '-15%' },
    6: { maxHench: 2, loyaltyBase: '-15%', reactionAdj: '-10%' },
    7: { maxHench: 3, loyaltyBase: '-10%', reactionAdj: '-5%' },
    8: { maxHench: 3, loyaltyBase: '-5%', reactionAdj: 'normal' },
    9: { maxHench: 4, loyaltyBase: 'normal', reactionAdj: 'normal' },
    10: { maxHench: 4, loyaltyBase: 'normal', reactionAdj: 'normal' },
    11: { maxHench: 4, loyaltyBase: 'normal', reactionAdj: 'normal' },
    12: { maxHench: 5, loyaltyBase: 'normal', reactionAdj: 'normal' },
    13: { maxHench: 5, loyaltyBase: 'normal', reactionAdj: '+5%' },
    14: { maxHench: 6, loyaltyBase: '+5%', reactionAdj: '+10%' },
    15: { maxHench: 7, loyaltyBase: '+15%', reactionAdj: '+15%' },
    16: { maxHench: 8, loyaltyBase: '+20%', reactionAdj: '+25%' },
    17: { maxHench: 10, loyaltyBase: '+30%', reactionAdj: '+30%' },
    18: { maxHench: 15, loyaltyBase: '+40%', reactionAdj: '+35%' }
};

const savingThrowMatrix = {
    clerics: [
        { levels: '1-3', paralyzation: 10, petrification: 13, rodStaffWand: 14, breathWeapon: 16, spell: 15 },
        { levels: '4-6', paralyzation: 9, petrification: 12, rodStaffWand: 13, breathWeapon: 15, spell: 14 },
        { levels: '7-9', paralyzation: 7, petrification: 10, rodStaffWand: 11, breathWeapon: 13, spell: 12 },
        { levels: '10-12', paralyzation: 6, petrification: 9, rodStaffWand: 10, breathWeapon: 12, spell: 11 },
        { levels: '13-15', paralyzation: 5, petrification: 8, rodStaffWand: 9, breathWeapon: 11, spell: 10 },
        { levels: '16-18', paralyzation: 4, petrification: 7, rodStaffWand: 8, breathWeapon: 10, spell: 9 },
        { levels: '19+', paralyzation: 2, petrification: 5, rodStaffWand: 6, breathWeapon: 8, spell: 7 }
    ],
    fighters: [
        { levels: '0', paralyzation: 16, petrification: 17, rodStaffWand: 18, breathWeapon: 20, spell: 19 },
        { levels: '1-2', paralyzation: 14, petrification: 15, rodStaffWand: 16, breathWeapon: 17, spell: 17 },
        { levels: '3-4', paralyzation: 13, petrification: 14, rodStaffWand: 15, breathWeapon: 16, spell: 16 },
        { levels: '5-6', paralyzation: 11, petrification: 12, rodStaffWand: 13, breathWeapon: 13, spell: 14 },
        { levels: '7-8', paralyzation: 10, petrification: 11, rodStaffWand: 12, breathWeapon: 12, spell: 13 },
        { levels: '9-10', paralyzation: 8, petrification: 9, rodStaffWand: 10, breathWeapon: 9, spell: 11 },
        { levels: '11-12', paralyzation: 7, petrification: 8, rodStaffWand: 9, breathWeapon: 8, spell: 10 },
        { levels: '13-14', paralyzation: 5, petrification: 6, rodStaffWand: 7, breathWeapon: 5, spell: 8 },
        { levels: '15-16', paralyzation: 4, petrification: 5, rodStaffWand: 6, breathWeapon: 4, spell: 7 },
        { levels: '17+', paralyzation: 3, petrification: 4, rodStaffWand: 5, breathWeapon: 4, spell: 6 }
    ],
    magicUsers: [
        { levels: '1-5', paralyzation: 14, petrification: 13, rodStaffWand: 11, breathWeapon: 15, spell: 12 },
        { levels: '6-10', paralyzation: 13, petrification: 11, rodStaffWand: 9, breathWeapon: 13, spell: 10 },
        { levels: '11-15', paralyzation: 11, petrification: 9, rodStaffWand: 7, breathWeapon: 11, spell: 8 },
        { levels: '16-20', paralyzation: 10, petrification: 7, rodStaffWand: 5, breathWeapon: 9, spell: 6 },
        { levels: '21+', paralyzation: 8, petrification: 5, rodStaffWand: 3, breathWeapon: 7, spell: 4 }
    ],
    thieves: [
        { levels: '1-4', paralyzation: 13, petrification: 12, rodStaffWand: 14, breathWeapon: 16, spell: 15 },
        { levels: '5-8', paralyzation: 12, petrification: 11, rodStaffWand: 12, breathWeapon: 15, spell: 13 },
        { levels: '9-12', paralyzation: 11, petrification: 10, rodStaffWand: 10, breathWeapon: 14, spell: 11 },
        { levels: '13-16', paralyzation: 10, petrification: 9, rodStaffWand: 8, breathWeapon: 13, spell: 9 },
        { levels: '17-20', paralyzation: 9, petrification: 8, rodStaffWand: 6, breathWeapon: 12, spell: 7 },
        { levels: '21+', paralyzation: 8, petrification: 7, rodStaffWand: 4, breathWeapon: 11, spell: 5 }
    ]
};

const raceLevelLimits = [
    { class: 'cleric', dwarf: 8, elf: 7, gnome: 7, halfElf: 5, halfling: 'no', halfOrc: 4, human: 'U' },
    { class: 'druid', dwarf: 'no', elf: 'no', gnome: 'no', halfElf: 'U', halfling: 6, halfOrc: 'no', human: 'U' },
    { class: 'fighter', dwarf: 9, elf: 7, gnome: 6, halfElf: 8, halfling: 6, halfOrc: 10, human: 'U' },
    { class: 'paladin', dwarf: 'no', elf: 'no', gnome: 'no', halfElf: 'no', halfling: 'no', halfOrc: 'no', human: 'U' },
    { class: 'ranger', dwarf: 'no', elf: 'no', gnome: 'no', halfElf: 8, halfling: 'no', halfOrc: 'no', human: 'U' },
    { class: 'magic-user', dwarf: 'no', elf: 11, gnome: 'no', halfElf: 8, halfling: 'no', halfOrc: 'no', human: 'U' },
    { class: 'illusionist', dwarf: 'no', elf: 'no', gnome: 7, halfElf: 'no', halfling: 'no', halfOrc: 'no', human: 'U' },
    { class: 'thief', dwarf: 'U', elf: 'U', gnome: 'U', halfElf: 'U', halfling: 'U', halfOrc: 8, human: 'U' },
    { class: 'assassin', dwarf: 9, elf: 10, gnome: 8, halfElf: 11, halfling: 'no', halfOrc: 'U', human: 'U' },
    { class: 'bard', dwarf: 'no', elf: 'no', gnome: 'no', halfElf: 'U', halfling: 'no', halfOrc: 'no', human: 'U' }
];

function getLevelLimit(charClass, race) {
    const raceKey = race.toLowerCase().replace('-', '');
    const entry = raceLevelLimits.find(row => row.class === charClass);
    return entry ? entry[raceKey] : 'no';
}

const thacoTable = {
    'Cleric/Thief': [
        { maxLevel: 3, thaco: 19 },
        { maxLevel: 8, thaco: 17 },
        { maxLevel: 12, thaco: 15 },
        { maxLevel: 16, thaco: 13 },
        { maxLevel: 20, thaco: 11 },
        { maxLevel: Infinity, thaco: 9 }
    ],
    'Fighter/Demi-Human': [
        { maxLevel: 3, thaco: 17 },
        { maxLevel: 6, thaco: 15 },
        { maxLevel: 9, thaco: 13 },
        { maxLevel: 12, thaco: 11 },
        { maxLevel: 15, thaco: 9 },
        { maxLevel: Infinity, thaco: 7 }
    ],
    'Magic-User': [
        { maxLevel: 5, thaco: 19 },
        { maxLevel: 10, thaco: 17 },
        { maxLevel: 15, thaco: 15 },
        { maxLevel: 20, thaco: 13 },
        { maxLevel: Infinity, thaco: 11 }
    ]
};

function getThaco(className, level) {
    let group;
    if (['cleric', 'druid', 'thief', 'assassin', 'bard'].includes(className)) {
        group = 'Cleric/Thief';
    } else if (['fighter', 'paladin', 'ranger'].includes(className)) {
        group = 'Fighter/Demi-Human';
    } else if (['magic-user', 'illusionist'].includes(className)) {
        group = 'Magic-User';
    } else {
        return '-';
    }
    
    const progression = thacoTable[group];
    const entry = progression.find(range => level <= range.maxLevel);
    return entry ? entry.thaco : '-';
}

function validateRaceClassCombo() {
    const selectedRace = document.getElementById('race').value;
    const selectedClass = document.getElementById('class').value;
    
    if (!selectedRace || !selectedClass) {
        document.getElementById('race').style.backgroundColor = '';
        document.getElementById('class').style.backgroundColor = '';
        return;
    }
    
    const limit = getLevelLimit(selectedClass, selectedRace);
    
    if (limit === 'no') {
        document.getElementById('race').style.backgroundColor = 'red';
        document.getElementById('class').style.backgroundColor = 'red';
    } else {
        document.getElementById('race').style.backgroundColor = '';
        document.getElementById('class').style.backgroundColor = '';
    }
}

const constitutionTable = {
    3: { hpAdj: -2, systemShock: '35%', resurrection: '40%', poisonSave: '-', regen: '-' },
    4: { hpAdj: -1, systemShock: '40%', resurrection: '45%', poisonSave: '-', regen: '-' },
    5: { hpAdj: -1, systemShock: '45%', resurrection: '50%', poisonSave: '-', regen: '-' },
    6: { hpAdj: -1, systemShock: '50%', resurrection: '55%', poisonSave: '-', regen: '-' },
    7: { hpAdj: 0, systemShock: '55%', resurrection: '60%', poisonSave: '-', regen: '-' },
    8: { hpAdj: 0, systemShock: '60%', resurrection: '65%', poisonSave: '-', regen: '-' },
    9: { hpAdj: 0, systemShock: '65%', resurrection: '70%', poisonSave: '-', regen: '-' },
    10: { hpAdj: 0, systemShock: '70%', resurrection: '75%', poisonSave: '-', regen: '-' },
    11: { hpAdj: 0, systemShock: '75%', resurrection: '80%', poisonSave: '-', regen: '-' },
    12: { hpAdj: 0, systemShock: '80%', resurrection: '85%', poisonSave: '-', regen: '-' },
    13: { hpAdj: 0, systemShock: '85%', resurrection: '90%', poisonSave: '-', regen: '-' },
    14: { hpAdj: 0, systemShock: '88%', resurrection: '92%', poisonSave: '-', regen: '-' },
    15: { hpAdj: 1, systemShock: '91%', resurrection: '94%', poisonSave: '-', regen: '-' },
    16: { hpAdj: 2, systemShock: '95%', resurrection: '96%', poisonSave: '-', regen: '-' },
    17: { hpAdj: 2, systemShock: '97%', resurrection: '98%', poisonSave: '-', regen: '-' },
    18: { hpAdj: 2, systemShock: '99%', resurrection: '100%', poisonSave: '-', regen: '-' }
};

const dexterityTable = {
    3: { reactionAdj: -3, defenseAdj: 4, pickPockets: '-', openLocks: '-', findTraps: '-', moveSilent: '-', hideShad: '-' },
    4: { reactionAdj: -2, defenseAdj: 3, pickPockets: '-', openLocks: '-', findTraps: '-', moveSilent: '-', hideShad: '-' },
    5: { reactionAdj: -1, defenseAdj: 2, pickPockets: '-', openLocks: '-', findTraps: '-', moveSilent: '-', hideShad: '-' },
    6: { reactionAdj: 0, defenseAdj: 1, pickPockets: '-', openLocks: '-', findTraps: '-', moveSilent: '-', hideShad: '-' },
    7: { reactionAdj: 0, defenseAdj: 0, pickPockets: '-', openLocks: '-', findTraps: '-', moveSilent: '-', hideShad: '-' },
    8: { reactionAdj: 0, defenseAdj: 0, pickPockets: '-', openLocks: '-', findTraps: '-', moveSilent: '-', hideShad: '-' },
    9: { reactionAdj: 0, defenseAdj: 0, pickPockets: '-15%', openLocks: '-10%', findTraps: '-10%', moveSilent: '-20%', hideShad: '-10%' },
    10: { reactionAdj: 0, defenseAdj: 0, pickPockets: '-10%', openLocks: '-5%', findTraps: '-10%', moveSilent: '-15%', hideShad: '-5%' },
    11: { reactionAdj: 0, defenseAdj: 0, pickPockets: '-5%', openLocks: '0', findTraps: '-5%', moveSilent: '-10%', hideShad: '0' },
    12: { reactionAdj: 0, defenseAdj: 0, pickPockets: '0', openLocks: '0', findTraps: '0', moveSilent: '-5%', hideShad: '0' },
    13: { reactionAdj: 0, defenseAdj: 0, pickPockets: '0', openLocks: '0', findTraps: '0', moveSilent: '0', hideShad: '0' },
    14: { reactionAdj: 0, defenseAdj: 0, pickPockets: '0', openLocks: '0', findTraps: '0', moveSilent: '0', hideShad: '0' },
    15: { reactionAdj: 0, defenseAdj: -1, pickPockets: '0', openLocks: '0', findTraps: '0', moveSilent: '0', hideShad: '0' },
    16: { reactionAdj: 1, defenseAdj: -2, pickPockets: '0', openLocks: '+5%', findTraps: '0', moveSilent: '0', hideShad: '0' },
    17: { reactionAdj: 2, defenseAdj: -3, pickPockets: '+5%', openLocks: '+10%', findTraps: '0', moveSilent: '+5%', hideShad: '+5%' },
    18: { reactionAdj: 3, defenseAdj: -4, pickPockets: '+10%', openLocks: '+15%', findTraps: '+5%', moveSilent: '+10%', hideShad: '+10%' }
};

const classStatMinimums = {
    cleric: { str: 6, int: 6, wis: 9, dex: 3, con: 6, chr: 6 },
    druid: { str: 6, int: 6, wis: 12, dex: 6, con: 6, chr: 15 },
    fighter: { str: 9, int: 3, wis: 6, dex: 6, con: 7, chr: 6 },
    paladin: { str: 12, int: 9, wis: 13, dex: 6, con: 9, chr: 17 },
    ranger: { str: 13, int: 13, wis: 14, dex: 6, con: 14, chr: 6 },
    'magic-user': { str: 3, int: 9, wis: 6, dex: 6, con: 6, chr: 6 },
    illusionist: { str: 6, int: 15, wis: 6, dex: 16, con: 3, chr: 6 },
    thief: { str: 6, int: 6, wis: 3, dex: 9, con: 6, chr: 6 },
    assassin: { str: 12, int: 11, wis: 6, dex: 12, con: 6, chr: 3 },
    bard: { str: 15, int: 12, wis: 15, dex: 15, con: 10, chr: 15 }
};

function applyRacialAdjustments() {
    const selectedRace = document.getElementById('race').value;
    if (!selectedRace || !racialAdjustments[selectedRace]) return;
    
    const stats = ['str', 'int', 'wis', 'dex', 'con', 'chr'];
    const adjustments = racialAdjustments[selectedRace];
    
    stats.forEach(stat => {
        const baseInput = document.getElementById(stat);
        const racialInput = document.getElementById(`${stat}-racial`);
        const finalInput = document.getElementById(`${stat}-final`);
        
        const baseValue = parseInt(baseInput.value) || 10;
        const adjustment = adjustments[stat];
        const finalValue = baseValue + adjustment;
        
        racialInput.value = adjustment >= 0 ? `+${adjustment}` : adjustment;
        finalInput.value = finalValue;
    });
    
    updateStrengthModifiers();
    updateIntelligenceModifiers();
    updateWisdomModifiers();
    updateDexterityModifiers();
    updateConstitutionModifiers();
    updateCharismaModifiers();
    validateRaceClassCombo();
    checkClassRequirements();
}

function updateStrengthModifiers() {
    const strValue = parseInt(document.getElementById('str-final').value) || 10;
    const strData = strengthTable[strValue] || strengthTable[10];
    
    document.getElementById('str-hit').textContent = strData.hitAdj >= 0 ? `+${strData.hitAdj}` : strData.hitAdj;
    document.getElementById('str-dmg').textContent = strData.dmgAdj >= 0 ? `+${strData.dmgAdj}` : strData.dmgAdj;
    document.getElementById('str-wt').textContent = strData.weightAllow >= 0 ? `+${strData.weightAllow}` : strData.weightAllow;
    document.getElementById('str-doors').textContent = strData.openDoors;
    document.getElementById('str-bend').textContent = strData.bendBars;
}

function updateIntelligenceModifiers() {
    const intValue = parseInt(document.getElementById('int-final').value) || 10;
    const intData = intelligenceTable[intValue] || intelligenceTable[10];
    
    document.getElementById('int-lang').textContent = intData.addLang;
    document.getElementById('int-know').textContent = intData.knowSpell;
    document.getElementById('int-min').textContent = intData.minSpells;
    document.getElementById('int-max').textContent = intData.maxSpells;
}

function updateWisdomModifiers() {
    const wisValue = parseInt(document.getElementById('wis-final').value) || 10;
    const wisData = wisdomTable[wisValue] || wisdomTable[10];
    
    document.getElementById('wis-save').textContent = wisData.magicAdj >= 0 ? `+${wisData.magicAdj}` : wisData.magicAdj;
    document.getElementById('wis-fail').textContent = wisData.spellFailure;
    document.getElementById('wis-bonus').textContent = wisData.bonusSpells;
}

function updateDexterityModifiers() {
    const dexValue = parseInt(document.getElementById('dex-final').value) || 10;
    const dexData = dexterityTable[dexValue] || dexterityTable[10];
    
    document.getElementById('dex-surprise').textContent = dexData.reactionAdj >= 0 ? `+${dexData.reactionAdj}` : dexData.reactionAdj;
    document.getElementById('dex-missile').textContent = dexData.reactionAdj >= 0 ? `+${dexData.reactionAdj}` : dexData.reactionAdj;
    document.getElementById('dex-defense').textContent = dexData.defenseAdj >= 0 ? `+${dexData.defenseAdj}` : dexData.defenseAdj;
}

function updateConstitutionModifiers() {
    const conValue = parseInt(document.getElementById('con-final').value) || 10;
    const conData = constitutionTable[conValue] || constitutionTable[10];
    
    document.getElementById('con-hp').textContent = conData.hpAdj >= 0 ? `+${conData.hpAdj}` : conData.hpAdj;
    document.getElementById('con-shock').textContent = conData.systemShock;
    document.getElementById('con-res').textContent = conData.resurrection;
}

function updateCharismaModifiers() {
    const chrValue = parseInt(document.getElementById('chr-final').value) || 10;
    const chrData = charismaTable[chrValue] || charismaTable[10];
    
    document.getElementById('chr-hench').textContent = chrData.maxHench;
    document.getElementById('chr-loyal').textContent = chrData.loyaltyBase;
    document.getElementById('chr-react').textContent = chrData.reactionAdj;
}

function updateSavingThrows() {
    const selectedClass = document.getElementById('class').value;
    const level = parseInt(document.getElementById('level').value) || 1;
    
    let classGroup = '';
    if (selectedClass === 'cleric' || selectedClass === 'druid') classGroup = 'clerics';
    else if (selectedClass === 'fighter' || selectedClass === 'paladin' || selectedClass === 'ranger') classGroup = 'fighters';
    else if (selectedClass === 'magic-user' || selectedClass === 'illusionist') classGroup = 'magicUsers';
    else if (selectedClass === 'thief' || selectedClass === 'assassin' || selectedClass === 'bard') classGroup = 'thieves';
    
    if (!classGroup) return;
    
    const saves = savingThrowMatrix[classGroup].find(row => {
        const range = row.levels;
        if (range.includes('+')) return level >= parseInt(range);
        if (range.includes('-')) {
            const [min, max] = range.split('-').map(n => parseInt(n));
            return level >= min && level <= max;
        }
        return level === parseInt(range);
    });
    
    if (saves) {
        const paralMod = parseInt(document.getElementById('save-paral-mod').value) || 0;
        const petriMod = parseInt(document.getElementById('save-petri-mod').value) || 0;
        const rodMod = parseInt(document.getElementById('save-rod-mod').value) || 0;
        const breathMod = parseInt(document.getElementById('save-breath-mod').value) || 0;
        const spellMod = parseInt(document.getElementById('save-spell-mod').value) || 0;
        
        document.getElementById('save-paral').textContent = saves.paralyzation;
        document.getElementById('save-paral-final').textContent = saves.paralyzation + paralMod;
        document.getElementById('save-petri').textContent = saves.petrification;
        document.getElementById('save-petri-final').textContent = saves.petrification + petriMod;
        document.getElementById('save-rod').textContent = saves.rodStaffWand;
        document.getElementById('save-rod-final').textContent = saves.rodStaffWand + rodMod;
        document.getElementById('save-breath').textContent = saves.breathWeapon;
        document.getElementById('save-breath-final').textContent = saves.breathWeapon + breathMod;
        document.getElementById('save-spell').textContent = saves.spell;
        document.getElementById('save-spell-final').textContent = saves.spell + spellMod;
    }
    
    updateThaco();
}

function updateThaco() {
    const selectedClass = document.getElementById('class').value;
    const level = parseInt(document.getElementById('level').value) || 1;
    
    if (!selectedClass) {
        for (let ac = 10; ac >= -9; ac--) {
            document.getElementById(`thaco-${ac}`).textContent = '-';
        }
        return;
    }
    
    const thaco = getThaco(selectedClass, level);
    
    for (let ac = 10; ac >= -9; ac--) {
        const rollNeeded = thaco - ac;
        document.getElementById(`thaco-${ac}`).textContent = rollNeeded;
    }
}

function checkClassRequirements() {
    const selectedClass = document.getElementById('class').value;
    if (!selectedClass || !classStatMinimums[selectedClass]) return;
    
    const stats = ['str', 'int', 'wis', 'dex', 'con', 'chr'];
    const minimums = classStatMinimums[selectedClass];
    
    stats.forEach(stat => {
        const input = document.getElementById(`${stat}-final`);
        const value = parseInt(input.value) || 0;
        if (value < minimums[stat]) {
            input.style.backgroundColor = 'yellow';
        } else {
            input.style.backgroundColor = '';
        }
    });
    
    // Show/hide spell containers based on class
    const clericContainer = document.getElementById('cleric-spells-container');
    const druidContainer = document.getElementById('druid-spells-container');
    const wizardContainer = document.getElementById('wizard-spells-container');
    const illusionistContainer = document.getElementById('illusionist-spells-container');
    
    if (selectedClass === 'cleric') {
        if (clericContainer) clericContainer.style.display = 'block';
        if (druidContainer) druidContainer.style.display = 'none';
        if (wizardContainer) wizardContainer.style.display = 'none';
        if (illusionistContainer) illusionistContainer.style.display = 'none';
    } else if (selectedClass === 'druid') {
        if (clericContainer) clericContainer.style.display = 'none';
        if (druidContainer) druidContainer.style.display = 'block';
        if (wizardContainer) wizardContainer.style.display = 'none';
        if (illusionistContainer) illusionistContainer.style.display = 'none';
    } else if (selectedClass === 'magic-user') {
        if (clericContainer) clericContainer.style.display = 'none';
        if (druidContainer) druidContainer.style.display = 'none';
        if (wizardContainer) wizardContainer.style.display = 'block';
        if (illusionistContainer) illusionistContainer.style.display = 'none';
    } else if (selectedClass === 'illusionist') {
        if (clericContainer) clericContainer.style.display = 'none';
        if (druidContainer) druidContainer.style.display = 'none';
        if (wizardContainer) wizardContainer.style.display = 'none';
        if (illusionistContainer) illusionistContainer.style.display = 'block';
    } else {
        if (clericContainer) clericContainer.style.display = 'none';
        if (druidContainer) druidContainer.style.display = 'none';
        if (wizardContainer) wizardContainer.style.display = 'none';
        if (illusionistContainer) illusionistContainer.style.display = 'none';
    }
    
    validateRaceClassCombo();
    updateSavingThrows();
}

document.getElementById('race').addEventListener('change', applyRacialAdjustments);
document.getElementById('class').addEventListener('change', checkClassRequirements);
document.getElementById('level').addEventListener('input', updateSavingThrows);
['save-paral-mod', 'save-petri-mod', 'save-rod-mod', 'save-breath-mod', 'save-spell-mod'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateSavingThrows);
});
['str', 'int', 'wis', 'dex', 'con', 'chr'].forEach(stat => {
    document.getElementById(stat).addEventListener('input', applyRacialAdjustments);
});
['str-final', 'int-final', 'wis-final', 'dex-final', 'con-final', 'chr-final'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        if (id === 'str-final') updateStrengthModifiers();
        if (id === 'int-final') updateIntelligenceModifiers();
        if (id === 'wis-final') updateWisdomModifiers();
        if (id === 'dex-final') updateDexterityModifiers();
        if (id === 'con-final') updateConstitutionModifiers();
        if (id === 'chr-final') updateCharismaModifiers();
        checkClassRequirements();
    });
});

updateStrengthModifiers();
updateIntelligenceModifiers();
updateWisdomModifiers();
updateDexterityModifiers();
updateConstitutionModifiers();
updateCharismaModifiers();

function saveCharacter() {
    const data = {
        charName: document.getElementById('charName').value,
        race: document.getElementById('race').value,
        class: document.getElementById('class').value,
        alignment: document.getElementById('alignment').value,
        age: document.getElementById('age').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        level: document.getElementById('level').value,
        str: document.getElementById('str').value,
        int: document.getElementById('int').value,
        wis: document.getElementById('wis').value,
        dex: document.getElementById('dex').value,
        con: document.getElementById('con').value,
        chr: document.getElementById('chr').value,
        saveParalMod: document.getElementById('save-paral-mod').value,
        savePetriMod: document.getElementById('save-petri-mod').value,
        saveRodMod: document.getElementById('save-rod-mod').value,
        saveBreathMod: document.getElementById('save-breath-mod').value,
        saveSpellMod: document.getElementById('save-spell-mod').value,
        throwExplanation: document.getElementById('throw-explanation')?.value || '',
        goldAmount: document.getElementById('gold-amount').value,
        acVal: document.getElementById('ac-val').value,
        adjacVal: document.getElementById('adjac-val').value,
        hpVal: document.getElementById('hp-val').value,
        adjhpVal: document.getElementById('adjhp-val').value,
        totalCost: document.getElementById('total-cost').value,
        totalWeight: document.getElementById('total-weight').value,
        additionalEquipment: document.getElementById('additional-equipment').value,
        additionalWeight: document.getElementById('additional-weight').value,
        weaponCheckboxes: Array.from(document.querySelectorAll('.combat-check')).map(cb => cb.checked),
        weaponSelects: Array.from(document.querySelectorAll('.combat-weapon')).map(sel => sel.value),
        weaponHits: Array.from(document.querySelectorAll('.combat-hit')).map(inp => inp.value),
        weaponDmgs: Array.from(document.querySelectorAll('.combat-dmg')).map(inp => inp.value),
        armorSelects: Array.from(document.querySelectorAll('.combat-armor')).map(sel => sel.value),
        equipmentCheckboxes: Array.from(document.querySelectorAll('.item-checkbox')).map(cb => cb.checked),
        clericSpellCheckboxes: Array.from(document.querySelectorAll('.cleric-spell-check')).map(cb => cb.checked),
        druidSpellCheckboxes: Array.from(document.querySelectorAll('.druid-spell-check')).map(cb => cb.checked),
        wizardSpellCheckboxes: Array.from(document.querySelectorAll('.wizard-spell-check')).map(cb => cb.checked),
        illusionistSpellCheckboxes: Array.from(document.querySelectorAll('.illusionist-spell-check')).map(cb => cb.checked)
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (data.charName || 'character') + '.json';
    a.click();
    URL.revokeObjectURL(url);
}

function loadCharacter(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const data = JSON.parse(e.target.result);
        document.getElementById('charName').value = data.charName || '';
        document.getElementById('race').value = data.race || '';
        document.getElementById('class').value = data.class || '';
        document.getElementById('alignment').value = data.alignment || '';
        document.getElementById('age').value = data.age || '';
        document.getElementById('height').value = data.height || '';
        document.getElementById('weight').value = data.weight || '';
        document.getElementById('level').value = data.level || '1';
        document.getElementById('str').value = data.str || '10';
        document.getElementById('int').value = data.int || '10';
        document.getElementById('wis').value = data.wis || '10';
        document.getElementById('dex').value = data.dex || '10';
        document.getElementById('con').value = data.con || '10';
        document.getElementById('chr').value = data.chr || '10';
        document.getElementById('save-paral-mod').value = data.saveParalMod || '0';
        document.getElementById('save-petri-mod').value = data.savePetriMod || '0';
        document.getElementById('save-rod-mod').value = data.saveRodMod || '0';
        document.getElementById('save-breath-mod').value = data.saveBreathMod || '0';
        document.getElementById('save-spell-mod').value = data.saveSpellMod || '0';
        const throwExplain = document.getElementById('throw-explanation');
        if (throwExplain) throwExplain.value = data.throwExplanation || '';
        document.getElementById('gold-amount').value = data.goldAmount || '';
        document.getElementById('ac-val').value = data.acVal || '';
        document.getElementById('adjac-val').value = data.adjacVal || '';
        document.getElementById('hp-val').value = data.hpVal || '';
        document.getElementById('adjhp-val').value = data.adjhpVal || '';
        document.getElementById('total-cost').value = data.totalCost || '';
        document.getElementById('total-weight').value = data.totalWeight || '';
        document.getElementById('additional-equipment').value = data.additionalEquipment || '';
        document.getElementById('additional-weight').value = data.additionalWeight || '';
        if (data.weaponCheckboxes) {
            Array.from(document.querySelectorAll('.combat-check')).forEach((cb, i) => {
                cb.checked = data.weaponCheckboxes[i] || false;
            });
        }
        if (data.weaponSelects) {
            Array.from(document.querySelectorAll('.combat-weapon')).forEach((sel, i) => {
                sel.value = data.weaponSelects[i] || '';
                sel.dispatchEvent(new Event('change'));
            });
        }
        if (data.weaponHits) {
            Array.from(document.querySelectorAll('.combat-hit')).forEach((inp, i) => {
                inp.value = data.weaponHits[i] || '';
            });
        }
        if (data.weaponDmgs) {
            Array.from(document.querySelectorAll('.combat-dmg')).forEach((inp, i) => {
                inp.value = data.weaponDmgs[i] || '';
            });
        }
        if (data.armorSelects) {
            Array.from(document.querySelectorAll('.combat-armor')).forEach((sel, i) => {
                sel.value = data.armorSelects[i] || '';
            });
        }
        if (data.equipmentCheckboxes) {
            Array.from(document.querySelectorAll('.item-checkbox')).forEach((cb, i) => {
                cb.checked = data.equipmentCheckboxes[i] || false;
            });
        }
        if (data.clericSpellCheckboxes) {
            Array.from(document.querySelectorAll('.cleric-spell-check')).forEach((cb, i) => {
                cb.checked = data.clericSpellCheckboxes[i] || false;
            });
        }
        if (data.druidSpellCheckboxes) {
            Array.from(document.querySelectorAll('.druid-spell-check')).forEach((cb, i) => {
                cb.checked = data.druidSpellCheckboxes[i] || false;
            });
        }
        if (data.wizardSpellCheckboxes) {
            Array.from(document.querySelectorAll('.wizard-spell-check')).forEach((cb, i) => {
                cb.checked = data.wizardSpellCheckboxes[i] || false;
            });
        }
        if (data.illusionistSpellCheckboxes) {
            Array.from(document.querySelectorAll('.illusionist-spell-check')).forEach((cb, i) => {
                cb.checked = data.illusionistSpellCheckboxes[i] || false;
            });
        }
        applyRacialAdjustments();
        checkClassRequirements();
        updateSavingThrows();
        
        setTimeout(() => {
            if (typeof calculateTotalAC === 'function') {
                calculateTotalAC();
            }
            if (typeof calculateTotals === 'function') {
                calculateTotals();
            }
        }, 200);
    };
    reader.readAsText(file);
}

document.getElementById('saveBtn').addEventListener('click', saveCharacter);
document.getElementById('loadBtn').addEventListener('click', () => document.getElementById('loadFile').click());
document.getElementById('loadFile').addEventListener('change', loadCharacter);

function rollGold() {
    const selectedClass = document.getElementById('class').value;
    if (!selectedClass) {
        alert('Please select a class first');
        return;
    }
    
    const goldRolls = {
        'cleric': { dice: 3, sides: 6 },
        'druid': { dice: 3, sides: 6 },
        'fighter': { dice: 5, sides: 4 },
        'paladin': { dice: 5, sides: 4 },
        'ranger': { dice: 5, sides: 4 },
        'bard': { dice: 5, sides: 4 },
        'magic-user': { dice: 2, sides: 4 },
        'illusionist': { dice: 2, sides: 4 },
        'thief': { dice: 2, sides: 6 },
        'assassin': { dice: 2, sides: 6 }
    };
    
    const roll = goldRolls[selectedClass];
    if (!roll) return;
    
    let total = 0;
    for (let i = 0; i < roll.dice; i++) {
        total += Math.floor(Math.random() * roll.sides) + 1;
    }
    
    document.getElementById('gold-amount').value = total * 10;
}

document.getElementById('roll-gold').addEventListener('click', rollGold);
document.getElementById('class').addEventListener('change', () => {
    const btn = document.getElementById('roll-gold');
    btn.disabled = !document.getElementById('class').value;
});

document.getElementById('roll-gold').disabled = true;

document.getElementById('toggle-combat-checks').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.combat-check');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    checkboxes.forEach(cb => cb.checked = !allChecked);
});

document.getElementById('hide-unselected-cleric')?.addEventListener('change', (e) => {
    const rows = document.querySelectorAll('#cleric-spells-container tr');
    rows.forEach(row => {
        if (row.querySelector('th')) return;
        const checkboxes = row.querySelectorAll('.cleric-spell-check');
        const hasChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (e.target.checked && !hasChecked) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    });
});

document.getElementById('hide-unselected-druid')?.addEventListener('change', (e) => {
    const rows = document.querySelectorAll('#druid-spells-container tr');
    rows.forEach(row => {
        if (row.querySelector('th')) return;
        const checkboxes = row.querySelectorAll('.druid-spell-check');
        const hasChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (e.target.checked && !hasChecked) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    });
});

document.getElementById('hide-unselected-wizard')?.addEventListener('change', (e) => {
    const rows = document.querySelectorAll('#wizard-spells-container tr');
    rows.forEach(row => {
        if (row.querySelector('th')) return;
        const checkboxes = row.querySelectorAll('.wizard-spell-check');
        const hasChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (e.target.checked && !hasChecked) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    });
});

document.getElementById('hide-unselected-illusionist')?.addEventListener('change', (e) => {
    const rows = document.querySelectorAll('#illusionist-spells-container tr');
    rows.forEach(row => {
        if (row.querySelector('th')) return;
        const checkboxes = row.querySelectorAll('.illusionist-spell-check');
        const hasChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (e.target.checked && !hasChecked) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    });
});

// Bard level progression - appended separately due to size
classLevelProgression.bard = [
    { level: 1, xp: 0, hd: 1, college: 'Fochlucan', druidSpells: 0, addLang: 0, charm: '15%', legendLore: '0%' },
    { level: 2, xp: 2000, hd: 1, college: 'Fochlucan', druidSpells: 0, addLang: 0, charm: '20%', legendLore: '5%' },
    { level: 3, xp: 4000, hd: 2, college: 'Fochlucan', druidSpells: 0, addLang: 0, charm: '22%', legendLore: '7%' },
    { level: 4, xp: 8000, hd: 3, college: 'Fochlucan', druidSpells: 1, addLang: 1, charm: '24%', legendLore: '10%' },
    { level: 5, xp: 16000, hd: 4, college: 'Mac-Fuirmidh', druidSpells: 2, addLang: 2, charm: '30%', legendLore: '13%' },
    { level: 6, xp: 25000, hd: 5, college: 'Mac-Fuirmidh', druidSpells: 3, addLang: 3, charm: '32%', legendLore: '16%' },
    { level: 7, xp: 40000, hd: 6, college: 'Mac-Fuirmidh', druidSpells: 3, addLang: 3, charm: '34%', legendLore: '20%' },
    { level: 8, xp: 60000, hd: 7, college: 'Doss', druidSpells: 3, addLang: 3, charm: '40%', legendLore: '25%' },
    { level: 9, xp: 85000, hd: 8, college: 'Doss', druidSpells: 3, addLang: 3, charm: '42%', legendLore: '30%' },
    { level: 10, xp: 110000, hd: 9, college: 'Doss', druidSpells: 3, addLang: 3, charm: '44%', legendLore: '35%' },
    { level: 11, xp: 150000, hd: 10, college: 'Canaith', druidSpells: 3, addLang: 3, charm: '50%', legendLore: '40%' },
    { level: 12, xp: 200000, hd: '10+1', college: 'Canaith', druidSpells: 3, addLang: 3, charm: '53%', legendLore: '45%' },
    { level: 13, xp: 400000, hd: '10+2', college: 'Canaith', druidSpells: 3, addLang: 3, charm: '56%', legendLore: '50%' },
    { level: 14, xp: 600000, hd: '10+3', college: 'Cli', druidSpells: 3, addLang: 3, charm: '60%', legendLore: '55%' },
    { level: 15, xp: 800000, hd: '10+4', college: 'Cli', druidSpells: 3, addLang: 3, charm: '63%', legendLore: '60%' },
    { level: 16, xp: 1000000, hd: '10+5', college: 'Cli', druidSpells: 3, addLang: 3, charm: '66%', legendLore: '65%' },
    { level: 17, xp: 1200000, hd: '10+6', college: 'Anstruth', druidSpells: 4, addLang: 4, charm: '70%', legendLore: '70%' },
    { level: 18, xp: 1400000, hd: '10+7', college: 'Anstruth', druidSpells: 4, addLang: 4, charm: '73%', legendLore: '75%' },
    { level: 19, xp: 1600000, hd: '10+8', college: 'Anstruth', druidSpells: 5, addLang: 4, charm: '76%', legendLore: '80%' },
    { level: 20, xp: 1800000, hd: '10+9', college: 'Ollamh', druidSpells: 5, addLang: 4, charm: '80%', legendLore: '85%' },
    { level: 21, xp: 2000000, hd: '10+10', college: 'Ollamh', druidSpells: 5, addLang: 5, charm: '84%', legendLore: '90%' },
    { level: 22, xp: 2200000, hd: '10+11', college: 'Ollamh', druidSpells: 5, addLang: 5, charm: '88%', legendLore: '95%' },
    { level: 23, xp: 3000000, hd: '10+12', college: 'Magna Alumnae', druidSpells: 5, addLang: 5, charm: '95%', legendLore: '99%' }
];
