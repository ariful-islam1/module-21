function animalSee(miles) {
    const first10 = 10;
    const second10 = 50;
    const third30 = 100;

    if (miles <= 10) {
        const count = miles * first10;
        return count
    } else if (miles <= 20) {
        const count10 = first10 * 10;
        const count20 = miles - first10;
        const totalCount20 = count20 * second10 + count10;
        return totalCount20;
    } else {
        const count10 = first10 * 10;
        const count20 = second10 * 10;
        const count30 = miles - 20;
        const totalCount30 = count30 * third30;
        const totalCount = totalCount30 + count20 + count10;
        return totalCount;
    }

}


const result = animalSee(21);
console.log(result)