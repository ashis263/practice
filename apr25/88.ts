/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const merged = [...nums1.splice(0, m), ...nums2];
    nums1.splice(0, nums1.length, ...merged);
    nums1.sort((a, b) => a-b)
  }