//run length encoding problem leetcode. split array into pairs, the create a new array/decompressed list that has the second number of the individual pairs listed as many times as the first number in the pair. Ex. pair [3, 4] should push 4 three times as [4,4,4]
nums = [1, 2, 3, 4]
partArr = []
decompArr = [];

var partition = function (nums) {
    var acc = nums.reduce(function (acc, val, idx, nums) {
        if (idx % 2 === 0)
            acc.push(nums.slice(idx, idx + 2));
        return acc;
    }, [])
    return acc
};
console.log(partition(nums))


var decompressedList = function (nums) {
    var partArr = partition(nums);
    console.log(partArr)
    for (var i = 0; i < partArr.length; i++) {
        let [freq, val] = partArr[i];
        console.log("f", freq, "v", val);
        temp = Array(freq).fill(val);
        decompArr = decompArr.concat(temp);
    }
    return decompArr;
}
console.log(decompressedList(nums))
