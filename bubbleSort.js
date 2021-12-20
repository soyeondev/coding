// 버블정렬: 앞과 뒤의 수를 비교해가며 뒤의 수가 앞의 수보다 더 크면 자리를 바꿈
// O(n^2)
function bubbleSort(){
    let arr = [1, 4, 6, 2, 9, 8];
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort())