function findMedianSortedArrays(nums1, nums2){
    let nums3 = [],middle;
    for(let x=0; x<nums1.length; x++){
        nums3.push(nums1[x]);
    }
    for(let y=0; y<nums2.length; y++){
        nums3.push(nums2[y]);
    }
    nums3.sort(function (a, b){return a-b});
    console.log(nums3);
    if(nums3.length === 2){
        middle = (nums3[0] + nums3[1]) / 2
    }else if(nums3.length % 2 === 0){
        middle = (nums3[Math.floor(nums3.length/2)-1] + nums3[Math.floor(nums3.length/2)]) /2;
    } else {
        middle = nums3[(nums3.length-1)/2];
    }
    middle = middle.toFixed(5);
    return middle;
}

console.log(findMedianSortedArrays([1,2], [3,4]));
