const equipment = {
    armor: [
        { name: 'Banded', cost: '90 g.p.' },
        { name: 'Chain', cost: '75 g.p.' },
        { name: 'Helmet, great', cost: '15 g.p.' },
        { name: 'Helmet, small', cost: '10 g.p.' },
        { name: 'Leather', cost: '5 g.p.' },
        { name: 'Padded', cost: '4 g.p.' },
        { name: 'Plate', cost: '400 g.p.' },
        { name: 'Ring', cost: '30 g.p.' },
        { name: 'Scale', cost: '45 g.p.' },
        { name: 'Shield, large', cost: '15 g.p.' },
        { name: 'Shield, small', cost: '10 g.p.' },
        { name: 'Shield, small, wooden', cost: '1 g.p.' },
        { name: 'Splinted', cost: '80 g.p.' },
        { name: 'Studded', cost: '15 g.p.' }
    ],
    arms: [
        { name: 'Arrow, normal, single', cost: '2 s.p.' },
        { name: 'Arrow, normal, dozen', cost: '1 g.p.' },
        { name: 'Arrow, silver, single', cost: '1 g.p.' },
        { name: 'Axe, battle', cost: '5 g.p.' },
        { name: 'Axe, hand or throwing', cost: '1 g.p.' },
        { name: 'Bardiche', cost: '7 g.p.' },
        { name: 'Bec de corbin', cost: '6 g.p.' },
        { name: 'Bill-Guisarme', cost: '6 g.p.' },
        { name: 'Bow, composite short', cost: '75 g.p.' },
        { name: 'Bow, composite, long', cost: '100 g.p.' },
        { name: 'Bow, long', cost: '60 g.p.' },
        { name: 'Bow, short', cost: '15 g.p.' },
        { name: 'Crossbow, heavy', cost: '20 g.p.' },
        { name: 'Crossbow, light', cost: '12 g.p.' },
        { name: 'Dagger and scabbard', cost: '2 g.p.' },
        { name: 'Dart', cost: '5 s.p.' },
        { name: 'Fauchard', cost: '3 g.p.' },
        { name: 'Fauchard — Fork', cost: '8 g.p.' },
        { name: 'Flail, footman\'s', cost: '3 g.p.' },
        { name: 'Flail, horseman\'s', cost: '8 g.p.' },
        { name: 'Fork, Military', cost: '4 g.p.' },
        { name: 'Glaive', cost: '6 g.p.' },
        { name: 'Glaive-Guisarme', cost: '10 g.p.' },
        { name: 'Guisarme', cost: '5 g.p.' },
        { name: 'Guisarme — Voulge', cost: '7 g.p.' },
        { name: 'Halberd', cost: '9 g.p.' },
        { name: 'Hammer, Lucern', cost: '7 g.p.' },
        { name: 'Hammer', cost: '1 g.p.' },
        { name: 'Javelin', cost: '10 s.p.' },
        { name: 'Lance', cost: '6 g.p.' },
        { name: 'Mace, footman\'s', cost: '8 g.p.' },
        { name: 'Mace, horseman\'s', cost: '4 g.p.' },
        { name: 'Morning Star', cost: '5 g.p.' },
        { name: 'Partisan', cost: '10 g.p.' },
        { name: 'Pick, Military, footman\'s', cost: '8 g.p.' },
        { name: 'Pick, Military, horseman\'s', cost: '5 g.p.' },
        { name: 'Pike, awl', cost: '3 g.p.' },
        { name: 'Quarrel (or Bolt), light, single', cost: '1 s.p.' },
        { name: 'Quarrel (or Bolt), heavy, score', cost: '2 g.p.' },
        { name: 'Ranseur', cost: '4 g.p.' },
        { name: 'Scimitar', cost: '15 g.p.' },
        { name: 'Sling & Bullets, dozen', cost: '15 s.p.' },
        { name: 'Sling Bullets, score', cost: '10 s.p.' },
        { name: 'Spear', cost: '1 g.p.' },
        { name: 'Spetum', cost: '3 g.p.' },
        { name: 'Sword, bastard, & scabbard', cost: '25 g.p.' },
        { name: 'Sword, broad, & scabbard', cost: '10 g.p.' },
        { name: 'Sword, long & scabbard', cost: '15 g.p.' },
        { name: 'Sword, short & scabbard', cost: '8 g.p.' },
        { name: 'Sword, two-handed', cost: '30 g.p.' },
        { name: 'Trident', cost: '4 g.p.' },
        { name: 'Voulge', cost: '2 g.p.' }
    ],
    clothing: [
        { name: 'Belt', cost: '3 s.p.' },
        { name: 'Boots, high, hard', cost: '2 g.p.' },
        { name: 'Boots, high, soft', cost: '1 g.p.' },
        { name: 'Boots, low, hard', cost: '1 g.p.' },
        { name: 'Boots, low, soft', cost: '8 s.p.' },
        { name: 'Cap', cost: '1 s.p.' },
        { name: 'Cloak', cost: '5 s.p.' },
        { name: 'Girdle, broad', cost: '2 g.p.' },
        { name: 'Girdle, normal', cost: '10 s.p.' },
        { name: 'Hat', cost: '7 s.p.' },
        { name: 'Robe', cost: '6 s.p.' }
    ],
    herbs: [
        { name: 'Belladona, sprig', cost: '4 s.p.' },
        { name: 'Garlic, bud', cost: '5 c.p.' },
        { name: 'Wolvesbane, sprig', cost: '10 s.p.' }
    ],
    livestock: [
        { name: 'Chicken', cost: '3 c.p.' },
        { name: 'Cow', cost: '10 g.p.' },
        { name: 'Dog, guard', cost: '25 g.p.' },
        { name: 'Dog, hunting', cost: '17 g.p.' },
        { name: 'Donkey', cost: '8 g.p.' },
        { name: 'Goat', cost: '1 g.p.' },
        { name: 'Hawk, large', cost: '40 g.p.' },
        { name: 'Hawk, small', cost: '18 g.p.' },
        { name: 'Horse, draft', cost: '30 g.p.' },
        { name: 'Horse, heavy war', cost: '300 g.p.' },
        { name: 'Horse, light war', cost: '150 g.p.' },
        { name: 'Horse, medium war', cost: '225 g.p.' },
        { name: 'Horse, riding (light)', cost: '25 g.p.' },
        { name: 'Mule', cost: '20 g.p.' },
        { name: 'Ox', cost: '15 g.p.' },
        { name: 'Pigeon', cost: '2 c.p.' },
        { name: 'Pig', cost: '3 g.p.' },
        { name: 'Piglet', cost: '1 g.p.' },
        { name: 'Pony', cost: '15 g.p.' },
        { name: 'Sheep', cost: '2 g.p.' },
        { name: 'Songbird', cost: '4 c.p.' }
    ],
    miscellaneous: [
        { name: 'Backpack, leather', cost: '2 g.p.' },
        { name: 'Box, iron, large', cost: '28 g.p.' },
        { name: 'Box, iron, small', cost: '9 g.p.' },
        { name: 'Candle, tallow', cost: '1 c.p.' },
        { name: 'Candle, wax', cost: '1 s.p.' },
        { name: 'Case, bone, map or scroll', cost: '5 g.p.' },
        { name: 'Case, leather, map or scroll', cost: '15 s.p.' },
        { name: 'Chest, wooden, large', cost: '17 s.p.' },
        { name: 'Chest, wooden, small', cost: '8 s.p.' },
        { name: 'Lantern, bullseye', cost: '12 g.p.' },
        { name: 'Lantern, hooded', cost: '7 g.p.' },
        { name: 'Mirror, large metal', cost: '10 g.p.' },
        { name: 'Mirror, small, silver', cost: '20 g.p.' },
        { name: 'Oil, flask of', cost: '1 g.p.' },
        { name: 'Pole, 10\'', cost: '3 c.p.' },
        { name: 'Pouch, belt, large', cost: '1 g.p.' },
        { name: 'Pouch, belt, small', cost: '15 s.p.' },
        { name: 'Quiver, 1 doz. arrows cap.', cost: '8 s.p.' },
        { name: 'Quiver, 1 score arrows cap.', cost: '12 s.p.' },
        { name: 'Quiver, 1 score bolts cap.', cost: '15 s.p.' },
        { name: 'Quiver, 2 score bolts cap.', cost: '1 g.p.' },
        { name: 'Rope, 50\'', cost: '4 s.p.' },
        { name: 'Sack, large', cost: '16 c.p.' },
        { name: 'Sack, small', cost: '10 c.p.' },
        { name: 'Skin for water or wine', cost: '15 s.p.' },
        { name: 'Spike, iron, large', cost: '1 c.p.' },
        { name: 'Thieves\' picks & tools', cost: '30 g.p.' },
        { name: 'Tinder Box, with flint & steel', cost: '1 g.p.' },
        { name: 'Torch', cost: '1 c.p.' }
    ],
    provisions: [
        { name: 'Ale, pint', cost: '1 s.p.' },
        { name: 'Beer, small, pint', cost: '5 c.p.' },
        { name: 'Food, merchant\'s meal', cost: '1 s.p.' },
        { name: 'Food, rich meal', cost: '1 g.p.' },
        { name: 'Grain, horse meal, 1 day', cost: '1 s.p.' },
        { name: 'Mead, pint', cost: '5 s.p.' },
        { name: 'Rations, iron, 1 week', cost: '5 g.p.' },
        { name: 'Rations, standard, 1 week', cost: '3 g.p.' },
        { name: 'Wine, pint, good', cost: '10 s.p.' },
        { name: 'Wine, pint, watered', cost: '5 s.p.' }
    ],
    religious: [
        { name: 'Beads, Prayer', cost: '1 g.p.' },
        { name: 'Incense, stick', cost: '1 g.p.' },
        { name: 'Symbol, Holy*, iron', cost: '2 g.p.' },
        { name: 'Symbol, Holy*, silver', cost: '50 g.p.' },
        { name: 'Symbol, Holy*, wooden', cost: '7 s.p.' },
        { name: 'Water, Holy*, vial', cost: '25 g.p.' }
    ],
    tack: [
        { name: 'Barding, chain', cost: '250 g.p.' },
        { name: 'Barding, leather', cost: '100 g.p.' },
        { name: 'Barding, plate', cost: '15 s.p.' },
        { name: 'Bit and Bridle', cost: '15 s.p.' },
        { name: 'Harness', cost: '12 s.p.' },
        { name: 'Saddle', cost: '10 g.p.' },
        { name: 'Saddle Bags, large', cost: '4 g.p.' },
        { name: 'Saddle Bags, small', cost: '3 g.p.' },
        { name: 'Saddle Blanket', cost: '3 s.p.' }
    ],
    transport: [
        { name: 'Barge (or Raft), small', cost: '50 g.p.' },
        { name: 'Boat, small', cost: '75 g.p.' },
        { name: 'Boat, long', cost: '150 g.p.' },
        { name: 'Cart', cost: '50 g.p.' },
        { name: 'Galley, large', cost: '25,000 g.p.' },
        { name: 'Galley, small', cost: '10,000 g.p.' },
        { name: 'Ship, merchant, large', cost: '15,000 g.p.' },
        { name: 'Ship, merchant, small', cost: '5,000 g.p.' },
        { name: 'Ship, war', cost: '20,000 g.p.' },
        { name: 'Wagon', cost: '150 g.p.' }
    ]
};

function initEquipment() {
    const container = document.getElementById('equipment-container');
    const sections = Object.keys(equipment);
    const mid = Math.ceil(sections.length / 2);
    
    const col1 = document.createElement('div');
    col1.className = 'equipment-column';
    const col2 = document.createElement('div');
    col2.className = 'equipment-column';
    
    sections.forEach((section, idx) => {
        const items = equipment[section];
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'equipment-section';
        
        const headerRow = document.createElement('div');
        headerRow.className = 'equipment-header';
        const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
        headerRow.innerHTML = `<input type="checkbox" class="section-toggle" data-section="${section}" checked> <strong>${sectionName}</strong>`;
        sectionDiv.appendChild(headerRow);
        
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'equipment-items';
        
        items.forEach(item => {
            const itemRow = document.createElement('div');
            itemRow.className = 'equipment-item';
            itemRow.innerHTML = `<input type="checkbox" class="item-checkbox" data-section="${section}"> <span class="item-name">${item.name}</span> <input type="text" class="item-qty"> <span class="item-cost">${item.cost}</span>`;
            itemsDiv.appendChild(itemRow);
        });
        
        sectionDiv.appendChild(itemsDiv);
        
        if (idx < mid) {
            col1.appendChild(sectionDiv);
        } else {
            col2.appendChild(sectionDiv);
        }
    });
    
    container.appendChild(col1);
    container.appendChild(col2);
    
    document.querySelectorAll('.section-toggle').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const section = e.target.dataset.section;
            const items = document.querySelectorAll(`.item-checkbox[data-section="${section}"]`);
            items.forEach(item => {
                if (!e.target.checked && !item.checked) {
                    item.parentElement.style.display = 'none';
                } else {
                    item.parentElement.style.display = 'flex';
                }
            });
        });
    });
    
    document.querySelectorAll('.item-checkbox, .item-qty').forEach(el => {
        el.addEventListener('change', calculateTotals);
        el.addEventListener('input', calculateTotals);
    });
}

function parseCost(costStr) {
    const match = costStr.match(/([\d,]+)\s*(c\.p\.|s\.p\.|g\.p\.)/i);
    if (!match) return 0;
    
    const value = parseFloat(match[1].replace(/,/g, ''));
    const unit = match[2].toLowerCase();
    
    if (unit === 'g.p.') return value;
    if (unit === 's.p.') return value / 10;
    if (unit === 'c.p.') return value / 100;
    return 0;
}

function calculateTotals() {
    let totalCost = 0;
    let totalWeight = 0;
    
    document.querySelectorAll('.item-checkbox').forEach(checkbox => {
        if (checkbox.checked) {
            const row = checkbox.parentElement;
            const qtyInput = row.querySelector('.item-qty');
            const costSpan = row.querySelector('.item-cost');
            
            const qty = parseInt(qtyInput.value) || 1;
            const unitCost = parseCost(costSpan.textContent);
            
            totalCost += unitCost * qty;
            totalWeight += unitCost * qty;
        }
    });
    
    const additionalWeight = parseFloat(document.getElementById('additional-weight')?.value) || 0;
    totalWeight += additionalWeight;
    
    document.getElementById('total-cost').value = totalCost.toFixed(2) + ' g.p.';
    document.getElementById('total-weight').value = totalWeight.toFixed(2) + ' g.p.';
}

document.addEventListener('DOMContentLoaded', initEquipment);

document.addEventListener('DOMContentLoaded', () => {
    const additionalWeight = document.getElementById('additional-weight');
    if (additionalWeight) {
        additionalWeight.addEventListener('input', calculateTotals);
    }
});

document.getElementById('toggle-equipment-sections').addEventListener('click', () => {
    const toggles = document.querySelectorAll('.section-toggle');
    const allChecked = Array.from(toggles).every(t => t.checked);
    toggles.forEach(toggle => {
        toggle.checked = !allChecked;
        toggle.dispatchEvent(new Event('change'));
    });
});
