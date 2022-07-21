function duplicate(arrays) {
    let unique = [];

    for (const element of arrays) {
        if (unique.indexOf(element) === -1) {
            unique.push(element);
        }
    }
    return unique;
}
const names = ['arif', 'jasim', 'jasmin', 'salim', 'arif', 'bablu', 'bappi', 'jasmin', 'salina', 'jasim', 'arafat'];

const result = duplicate(names)
console.log("List : ", result);