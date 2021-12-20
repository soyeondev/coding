// 선택정렬: 배열중에 최솟값이 위치한 index의 값과 맨 처음 값을 swap 하면서 정렬하는 방법
// O(n^2)
function selectSort(){
    let arr = [1, 4, 6, 2, 9, 8];
    for(let i = 0; i < arr.length; i++){    
        let minIndex = i;   // i를 minIndex에 할당하고 
        for(let j = i+1; j < arr.length; j++){  // i보다 더 큰 인덱스를 돌면서 제일 작은 값의 인덱스를 저장해둔다.
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        if(i !== minIndex){ // 찾은 인덱스가 i랑 같지않다면 더 작은 값이 있다는 말이므로 바꾼다.
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}
console.log(selectSort())