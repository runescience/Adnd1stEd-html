const classWeaponRestrictions = {
    cleric: ['club', 'flail', 'hammer', 'mace', 'staff', 'sling'],
    druid: ['club', 'dagger', 'dart', 'hammer', 'sling', 'scimitar', 'spear', 'staff'],
    fighter: [],
    paladin: [],
    ranger: [],
    'magic-user': ['dagger', 'dart', 'sling', 'staff'],
    illusionist: ['dagger', 'dart', 'sling', 'staff'],
    thief: ['bow (short)', 'crossbow (light)', 'dagger', 'dart', 'sling', 'sword (broad)', 'sword (long)', 'sword (short)'],
    assassin: [],
    bard: ['club', 'dagger', 'dart', 'javelin', 'scimitar', 'sling', 'spear', 'staff', 'sword (bastard)', 'sword (broad)', 'sword (long)', 'sword (short)']
};

const classArmorRestrictions = {
    cleric: ['any'],
    druid: ['leather', 'wooden shields only'],
    fighter: ['any'],
    paladin: ['any'],
    ranger: ['any'],
    'magic-user': ['none'],
    illusionist: ['none'],
    thief: ['leather', 'elfin chain'],
    assassin: ['leather', 'elfin chain'],
    bard: ['leather', 'ring mail', 'elfin chain', 'magic chain mail']
};

function normalizeWeaponName(weaponName) {
    return weaponName.toLowerCase().trim();
}

function isWeaponAllowed(weaponName, className) {
    if (!className || !classWeaponRestrictions[className]) return true;
    
    const restrictions = classWeaponRestrictions[className];
    if (restrictions.length === 0) return true;
    
    const normalized = normalizeWeaponName(weaponName);
    return restrictions.some(allowed => normalized.includes(normalizeWeaponName(allowed)));
}

function isArmorAllowed(armorName, className) {
    if (!className || !classArmorRestrictions[className]) return true;
    
    const restrictions = classArmorRestrictions[className];
    if (restrictions.includes('any')) return true;
    if (restrictions.includes('none')) return false;
    
    const normalized = normalizeWeaponName(armorName);
    return restrictions.some(allowed => normalized.includes(normalizeWeaponName(allowed)));
}

const combatWeapons = {
    'Arrow': { weight: 2, dmgSM: '1-6', dmgL: '1-6', ranged: true },
    'Axe, Battle': { weight: 75, dmgSM: '1-8', dmgL: '1-4' },
    'Axe, Hand or throwing': { weight: 50, dmgSM: '1-6', dmgL: '1-4', ranged: true },
    'Bardiche': { weight: 125, dmgSM: '2-8', dmgL: '3-12' },
    'Bec de corbin': { weight: 100, dmgSM: '1-8', dmgL: '1-6' },
    'Bill-Guisarme': { weight: 150, dmgSM: '2-8', dmgL: '1-10' },
    'Bo Stick': { weight: 15, dmgSM: '1-6', dmgL: '1-3' },
    'Bow, composite short': { weight: 75, dmgSM: '1-6', dmgL: '1-6', ranged: true },
    'Bow, composite, long': { weight: 100, dmgSM: '1-8', dmgL: '1-8', ranged: true },
    'Bow, long': { weight: 60, dmgSM: '1-8', dmgL: '1-8', ranged: true },
    'Bow, short': { weight: 15, dmgSM: '1-6', dmgL: '1-6', ranged: true },
    'Club': { weight: 30, dmgSM: '1-6', dmgL: '1-3' },
    'Crossbow, heavy': { weight: 20, dmgSM: '1-8', dmgL: '1-8', ranged: true },
    'Crossbow, light': { weight: 12, dmgSM: '1-6', dmgL: '1-6', ranged: true },
    'Dagger': { weight: 10, dmgSM: '1-4', dmgL: '1-3' },
    'Dart': { weight: 5, dmgSM: '1-3', dmgL: '1-2', ranged: true },
    'Fauchard': { weight: 60, dmgSM: '1-6', dmgL: '1-8' },
    'Fauchard-Fork': { weight: 80, dmgSM: '1-8', dmgL: '1-10' },
    'Flail, footman\'s': { weight: 150, dmgSM: '2-7', dmgL: '2-8' },
    'Flail, horseman\'s': { weight: 35, dmgSM: '2-5', dmgL: '2-5' },
    'Fork, Military': { weight: 75, dmgSM: '1-8', dmgL: '2-8' },
    'Glaive': { weight: 75, dmgSM: '1-6', dmgL: '1-10' },
    'Glaive-Guisarme': { weight: 100, dmgSM: '2-8', dmgL: '2-12' },
    'Guisarme': { weight: 80, dmgSM: '2-8', dmgL: '1-8' },
    'Guisarme-Voulge': { weight: 150, dmgSM: '2-8', dmgL: '2-8' },
    'Halberd': { weight: 175, dmgSM: '1-10', dmgL: '2-12' },
    'Hammer, lucern': { weight: 150, dmgSM: '2-8', dmgL: '1-6' },
    'Hammer': { weight: 50, dmgSM: '2-5', dmgL: '1-4' },
    'Javelin': { weight: 20, dmgSM: '1-6', dmgL: '1-6', ranged: true },
    'Jo Stick': { weight: 40, dmgSM: '1-6', dmgL: '1-4' },
    'Lance (light horse)': { weight: 50, dmgSM: '1-6', dmgL: '1-8' },
    'Lance (medium horse)': { weight: 100, dmgSM: '2-7', dmgL: '2-12' },
    'Lance (heavy horse)': { weight: 150, dmgSM: '3-9', dmgL: '3-18' },
    'Mace, footman\'s': { weight: 100, dmgSM: '2-7', dmgL: '1-6' },
    'Mace, horseman\'s': { weight: 50, dmgSM: '1-6', dmgL: '1-4' },
    'Morning Star': { weight: 125, dmgSM: '2-8', dmgL: '2-7' },
    'Partisan': { weight: 80, dmgSM: '1-6', dmgL: '2-7' },
    'Pick, Military, footman\'s': { weight: 60, dmgSM: '2-7', dmgL: '2-8' },
    'Pick, Military, horseman\'s': { weight: 40, dmgSM: '2-5', dmgL: '1-4' },
    'Pike, Awl': { weight: 80, dmgSM: '1-6', dmgL: '1-12' },
    'Quarrel (or Bolt), light': { weight: 1, dmgSM: '1-4', dmgL: '1-4', ranged: true },
    'Quarrel (or Bolt), heavy': { weight: 2, dmgSM: '2-5', dmgL: '2-7', ranged: true },
    'Ranseur': { weight: 50, dmgSM: '2-8', dmgL: '2-8' },
    'Scimitar': { weight: 40, dmgSM: '1-8', dmgL: '1-8' },
    'Sling bullet': { weight: 2, dmgSM: '2-5', dmgL: '2-7', ranged: true },
    'Sling stone': { weight: 1, dmgSM: '1-4', dmgL: '1-4', ranged: true },
    'Spear': { weight: 50, dmgSM: '1-6', dmgL: '1-8' },
    'Spetum': { weight: 50, dmgSM: '2-7', dmgL: '2-12' },
    'Staff, Quarter': { weight: 50, dmgSM: '1-6', dmgL: '1-6' },
    'Sword, Bastard': { weight: 100, dmgSM: '2-8', dmgL: '2-16' },
    'Sword, Broad': { weight: 75, dmgSM: '2-8', dmgL: '2-7' },
    'Sword, Long': { weight: 60, dmgSM: '1-8', dmgL: '1-12' },
    'Sword, Short': { weight: 35, dmgSM: '1-6', dmgL: '1-8' },
    'Sword, Two-handed': { weight: 250, dmgSM: '1-10', dmgL: '3-18' },
    'Trident': { weight: 50, dmgSM: '2-7', dmgL: '3-12' },
    'Voulge': { weight: 125, dmgSM: '2-8', dmgL: '2-8' }
};

function initCombatEquipment() {
    const weaponSelects = document.querySelectorAll('.combat-weapon');
    const rangedSelects = Array.from(document.querySelectorAll('.combat-weapon')).filter((_, i) => i >= 3 && i < 6);
    const armorSelects = document.querySelectorAll('.combat-armor');
    const armorList = [
        { name: 'Banded', ac: 4 },
        { name: 'Chain', ac: 5 },
        { name: 'Leather', ac: 8 },
        { name: 'Padded', ac: 8 },
        { name: 'Plate', ac: 3 },
        { name: 'Ring', ac: 7 },
        { name: 'Scale', ac: 6 },
        { name: 'Shield, large', ac: -1 },
        { name: 'Shield, small', ac: -1 },
        { name: 'Splinted', ac: 4 },
        { name: 'Studded', ac: 7 }
    ];
    
    weaponSelects.forEach((select, idx) => {
        const isRanged = rangedSelects.includes(select);
        Object.keys(combatWeapons).forEach(weapon => {
            if (isRanged && !combatWeapons[weapon].ranged) return;
            if (!isRanged && combatWeapons[weapon].ranged) return;
            const option = document.createElement('option');
            option.value = weapon;
            option.textContent = weapon;
            select.appendChild(option);
        });
        
        select.addEventListener('change', (e) => {
            const selectedClass = document.getElementById('class')?.value || '';
            const weaponName = e.target.value;
            const isAllowed = isWeaponAllowed(weaponName, selectedClass);
            
            if (weaponName && !isAllowed) {
                e.target.style.backgroundColor = 'red';
            } else {
                e.target.style.backgroundColor = '';
            }
            const weapon = combatWeapons[e.target.value];
            if (!weapon) {
                const row = e.target.closest('tr');
                row.querySelector('.combat-dmg-sm').value = '';
                row.querySelector('.combat-dmg-l').value = '';
                row.querySelector('.combat-wt').value = '';
                row.querySelector('.combat-hit').value = '';
                row.querySelector('.combat-dmg').value = '';
                return;
            }
            
            const row = e.target.closest('tr');
            const dmgSmInput = row.querySelector('.combat-dmg-sm');
            const dmgLInput = row.querySelector('.combat-dmg-l');
            const wtInput = row.querySelector('.combat-wt');
            const hitInput = row.querySelector('.combat-hit');
            const dmgInput = row.querySelector('.combat-dmg');
            
            dmgSmInput.value = weapon.dmgSM;
            dmgLInput.value = weapon.dmgL;
            wtInput.value = weapon.weight;
            
            const strHitText = document.getElementById('str-hit')?.textContent || '0';
            const strDmgText = document.getElementById('str-dmg')?.textContent || '0';
            const dexMissileText = document.getElementById('dex-missile')?.textContent || '0';
            
            const strHit = parseInt(strHitText) || 0;
            const strDmg = parseInt(strDmgText) || 0;
            const dexMissile = parseInt(dexMissileText) || 0;
            
            if (isRanged) {
                hitInput.value = dexMissile !== 0 ? (dexMissile > 0 ? '+' + dexMissile : dexMissile) : '0';
                dmgInput.value = '0';
            } else {
                hitInput.value = strHit !== 0 ? (strHit > 0 ? '+' + strHit : strHit) : '0';
                dmgInput.value = strDmg !== 0 ? (strDmg > 0 ? '+' + strDmg : strDmg) : '0';
            }
        });
    });
    
    armorSelects.forEach(select => {
        armorList.forEach(armor => {
            const option = document.createElement('option');
            option.value = armor.name;
            option.textContent = `${armor.name} (AC ${armor.ac})`;
            option.dataset.ac = armor.ac;
            select.appendChild(option);
        });
        
        select.addEventListener('change', (e) => {
            const selectedClass = document.getElementById('class')?.value || '';
            const armorName = e.target.value;
            const isAllowed = isArmorAllowed(armorName, selectedClass);
            
            if (armorName && !isAllowed) {
                e.target.style.backgroundColor = 'red';
            } else {
                e.target.style.backgroundColor = '';
            }
            
            calculateTotalAC();
        });
    });
}

function validateAllWeaponsAndArmor() {
    const selectedClass = document.getElementById('class')?.value || '';
    
    document.querySelectorAll('.combat-weapon').forEach(select => {
        const weaponName = select.value;
        const isAllowed = isWeaponAllowed(weaponName, selectedClass);
        
        if (weaponName && !isAllowed) {
            select.style.backgroundColor = 'red';
        } else {
            select.style.backgroundColor = '';
        }
    });
    
    document.querySelectorAll('.combat-armor').forEach(select => {
        const armorName = select.value;
        const isAllowed = isArmorAllowed(armorName, selectedClass);
        
        if (armorName && !isAllowed) {
            select.style.backgroundColor = 'red';
        } else {
            select.style.backgroundColor = '';
        }
    });
}

function calculateTotalAC() {
    const armorSelects = document.querySelectorAll('.combat-armor');
    const checkedArmor = [];
    
    armorSelects.forEach(select => {
        const row = select.closest('tr');
        const checkbox = row?.querySelector('.combat-check');
        if (checkbox?.checked && select.value) {
            const selectedOption = select.options[select.selectedIndex];
            const ac = parseInt(selectedOption.dataset.ac);
            if (!isNaN(ac)) {
                checkedArmor.push(ac);
            }
        }
    });
    
    if (checkedArmor.length === 0) {
        document.getElementById('ac-val').value = '10';
        return;
    }
    
    let baseAC = 10;
    let shieldBonus = 0;
    
    checkedArmor.forEach(ac => {
        if (ac === -1) {
            shieldBonus = -1;
        } else if (ac < baseAC) {
            baseAC = ac;
        }
    });
    
    const totalAC = baseAC + shieldBonus;
    document.getElementById('ac-val').value = totalAC;
}

document.addEventListener('DOMContentLoaded', () => {
    initCombatEquipment();
    
    const armorRows = Array.from(document.querySelectorAll('.combat-armor')).map(s => s.closest('tr'));
    armorRows.forEach(row => {
        const checkbox = row.querySelector('.combat-check');
        if (checkbox) {
            checkbox.addEventListener('change', calculateTotalAC);
        }
    });
    
    document.getElementById('class')?.addEventListener('change', validateAllWeaponsAndArmor);
});
