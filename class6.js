const numbers = [10, 50, 4, 3, 25, 41, 62, 12, 75, 30, 48];

for (const element of numbers) {
    if (element % 2 == 0 && element % 3 == 0) {
        console.log(element, "fa-foo");
    } else if (element % 3 == 0) {
        console.log(element, "foo");
        continue;
    } else if (element % 2 == 0) {
        console.log(element, "fa");
    } else {
        console.log(element, "Not Divisible");
    }
}