function totalWood(chair, table, bed) {
    const chairWood = 3;
    const tableWood = 7;
    const bedWood = 10;

    const totalChairWood = chairWood * chair;
    const totalTableWood = tableWood * table;
    const totalBedWood = bedWood * bed;

    const totalWoodNeed = totalBedWood + totalTableWood + totalChairWood;

    return totalWoodNeed;
}

const result = totalWood(5, 1, 2);
console.log("Total Need Wood: ", result);