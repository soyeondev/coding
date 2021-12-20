// 병합정렬: 데이터 분포에 영향을 덜 받음, 항상 동일한 시간이 소요되어 어떤 경우에도 좋은 성능을 보장받을 수 있음
// 별도의 메모리 공간이 필요함
// 최선: O(nlogn)
// 최악: O(nlogn)
const mergeSort = (arr) => {
    if(arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    // console.log(left)
    let right = arr.slice(mid);
    // console.log(right)
    
    return merge(mergeSort(left), mergeSort(right));   
}

const merge = (left, right) => {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    console.log("left: ", left)
    console.log("right: ", right)
    while(left.length !== 0 && right.length !== 0){
        left[0] <= right[0] ? resultArr.push(left.shift()) : resultArr.push(right.shift());
    }
        // while( leftIndex < left.length && rightIndex < right.length){
        //     if(left[leftIndex] < right[rightIndex]) {
        //         resultArr.push(left[leftIndex]);
        //         leftIndex++;
        //     } else {
        //         resultArr.push(right[rightIndex]);
        //         rightIndex++;
        //     }
        // }
    // return resultArr.concat(left.slice(leftIndex), right.slice(rightIndex));
    return [...resultArr, ...left, ...right]
}

console.log(mergeSort([4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21]));