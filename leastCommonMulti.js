// 최대공약수: 서로 다른 자연수의 공통된 약수를 보통 공약수라고 부르며 공약수 중에서 가장 큰수를 최대공약수라 함
// 최대공배수: a * b / 최대공약수
// 유클리드 호재법으로 풀 수 있음
function leastCommonMulti(n, m){
    let answer = [];
    const gcf = (a, b) => {
        if(b === 0) return a;
        return gcf(b, a % b)
    }
    const lcm = (a, b) => (a * b) / gcf(a, b);
    return [gcf(n, m), lcm(n, m)];
}
console.log(leastCommonMulti(5, 10))