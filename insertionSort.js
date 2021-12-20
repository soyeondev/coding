// 삽입정렬: 한 번에 한 항목 씩 정렬된 배열을 작성
// 최선: O(n)
// 최악: O(n^2)
// 평균: O(n^2)
function insertionSort(){
    let arr = [1, 4, 6, 2, 9, 8];
    for(let i = 0; i < arr.length; i++){
        let index = i;
        while(arr[index] && arr[index-1] > arr[index]){
            let temp = arr[index-1];
            arr[index-1] = arr[index];
            arr[index] = temp;
            index--;
        }
    }
    return arr;
}
console.log(insertionSort())