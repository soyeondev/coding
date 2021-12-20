// 문자열 뒤집기
function findUniqueString(str){
    let strArr = str.split('');
    console.log(strArr);
    const uniqueArr = new Set(strArr);
    const uniqueArrForAnswer = [...uniqueArr];
    console.log(uniqueArrForAnswer)
    
    // console.log(uniqueArr)
    // return answer;
}
console.log(findUniqueString("aabbcc"))