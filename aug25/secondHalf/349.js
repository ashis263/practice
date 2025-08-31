var intersection = function (nums1, nums2) {
  let smallerArr,
    largerArr,
    intersectionArr = [];

  if (nums1.length < nums2.length) {
    smallerArr = nums1;
    largerArr = nums2;
  } else {
    smallerArr = nums2;
    largerArr = nums1;
  }

  for (let i = 0; i < smallerArr.length; i++) {
    if (largerArr.includes(smallerArr[i])) {
      if (!intersectionArr.includes(smallerArr[i])) {
        intersectionArr.push(smallerArr[i]);
      }
    }
  }

  return intersectionArr;
};