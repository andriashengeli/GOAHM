function concatenateAndPush(arr1, arr2, value) {
    let newArray = arr1.concat(arr2);
    newArray.push(value);
    return newArray;
}