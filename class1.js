function bigNumber(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element
        }
    }
    return max
}

const result = bigNumber([20, 41, 10, 445, 30, 14, 85, 75]);
console.log("Max Number is : ", result)


function smallNumber(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let elements = nums[i];
        if (elements < min) {
            min = elements
        }
    }
    return min;
}

const result1 = smallNumber([20, 41, 10, 445, 30, 14, 85, 75]);
console.log("Small Number is :", result1);

const arr = [20, 41, 10, 445, 30, 14, 85, 75];
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element % 2 == 0) {
        console.log(element, "number is even")
    } else {
        console.log(element, "number is odd")
    }
}











