// 문자열 뒤집기
function reverseString(str){
    let answer = '';
    for(let i = str.length-1; i >= 0; i--){
        answer += str[i];
    }
    return answer;
}
console.log(reverseString("abcd"))