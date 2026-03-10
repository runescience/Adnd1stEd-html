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
    const armorList = ['Banded', 'Chain', 'Leather', 'Padded', 'Plate', 'Ring', 'Scale', 'Shield, large', 'Shield, small', 'Splinted', 'Studded'];
    
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
            const weapon = combatWeapons[e.target.value];
            if (weapon) {
                const row = e.target.closest('tr');
                row.querySelector('.combat-dmg-sm').value = weapon.dmgSM;
                row.querySelector('.combat-dmg-l').value = weapon.dmgL;
                row.querySelector('.combat-wt').value = weapon.weight;
                
                const strHit = parseInt(document.getElementById('str-hit').textContent) || 0;
                const strDmg = parseInt(document.getElementById('str-dmg').textContent) || 0;
                const dexMissile = parseInt(document.getElementById('dex-missile').textContent) || 0;
                
                const hitInput = row.querySelector('.combat-hit');
                const dmgInput = row.querySelector('.combat-dmg');
                
                if (isRanged) {
                    hitInput.value = dexMissile || '';
                    dmgInput.value = '';
                } else {
                    hitInput.value = strHit || '';
                    dmgInput.value = strDmg || '';
                }
            }
        });
    });
    
    armorSelects.forEach(select => {
        armorList.forEach(armor => {
            const option = document.createElement('option');
            option.value = armor;
            option.textContent = armor;
            select.appendChild(option);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCombatEquipment();
});
