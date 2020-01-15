function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4]);

/*
| Sorting         | Best          | Avg           | Worst         | Space Complexity  |     
| --------------- |:-------------:| -------------:|:-------------:|:-----------------:|   
| insertion sort  | Ω(n)          |	Θ(n^2)        |	O(n^2)        |	O(1)              |
*/