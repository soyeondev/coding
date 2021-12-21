function convertNumber (n) {
    let tenNum = 125;
    console.log(`십진수: ${tenNum} -> 이진수: ${tenNum.toString(2)}`)
    console.log(`십진수: ${tenNum} -> 팔진수: ${tenNum.toString(8)}`)
    console.log(`십진수: ${tenNum} -> 십육진수: ${tenNum.toString(16)}`)
    
    let twoNum = "1111101";
    console.log(`이진수: ${twoNum} -> 십진수: ${parseInt(twoNum, 2)}`)
    console.log(`이진수: ${twoNum} -> 팔진수: ${parseInt(twoNum, 2).toString(8)}`)
    console.log(`이진수: ${twoNum} -> 십육진수: ${parseInt(twoNum, 2).toString(16)}`)
    
    let eightNum = "175";
    console.log(`팔진수: ${eightNum} -> 십진수: ${parseInt(eightNum, 8)}`)
    console.log(`팔진수: ${eightNum} -> 이진수: ${parseInt(eightNum, 8).toString(2)}`)
    console.log(`팔진수: ${eightNum} -> 십육진수: ${parseInt(eightNum, 8).toString(16)}`)
    
}
convertNumber();