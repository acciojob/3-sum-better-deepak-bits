function threeSum(arr, target) {
// write your code here
	// -1 1 2 4
	const n = arr.length;
	let closestSum = 0;
	let diff = Integer.MAX_VALUE;
	arr.sort();
	for(let i = 0; i < n-2; i++) {
		if(i > 0 && arr[i] === arr[i-1]) continue;
		// const first = arr[i];
		let j = i+1;
		let k = n-1;

		while(j < k) {
			while(j < k && arr[j] === arr[j+1]) j++;
			while(j < k && arr[k] === arr[k-1]) k--;
			const sum = arr[i] + arr[j] + arr[k];
			const absDiff = Math.abs(sum - target);
			
			if(absDiff < diff) {
				closestSum = sum;
				diff = absDiff;
			}

			if(sum === target) {
				return sum;
			} else if(sum > target) {
				k--;
			} else {
				j++;
			}
		}
	}
	return closestSum;
  
}

module.exports = threeSum;
