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
        saveParalExplain: document.getElementById('save-paral-explain').value,
        savePetriExplain: document.getElementById('save-petri-explain').value,
        saveRodExplain: document.getElementById('save-rod-explain').value,
        saveBreathExplain: document.getElementById('save-breath-explain').value,
        saveSpellExplain: document.getElementById('save-spell-explain').value,
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
        armorSelects: Array.from(document.querySelectorAll('.combat-armor')).map(sel => sel.value),
        equipmentCheckboxes: Array.from(document.querySelectorAll('.item-checkbox')).map(cb => cb.checked)
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
        document.getElementById('save-paral-explain').value = data.saveParalExplain || '';
        document.getElementById('save-petri-explain').value = data.savePetriExplain || '';
        document.getElementById('save-rod-explain').value = data.saveRodExplain || '';
        document.getElementById('save-breath-explain').value = data.saveBreathExplain || '';
        document.getElementById('save-spell-explain').value = data.saveSpellExplain || '';
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
        applyRacialAdjustments();
        checkClassRequirements();
        updateSavingThrows();
    };
    reader.readAsText(file);
}
