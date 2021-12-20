var outerFunc = function() {
    var x = 10;
    var innerFunc = function () {
        console.log(x);
        var sx = 100;
        var innerFunc2 = function() {
            console.log(sx);
        }
        innerFunc2();
    };
    innerFunc();
    // return innerFunc;
  }
  outerFunc();
  /**
   *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
   *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
   */
//   var inner = outerFunc();
//   inner(); // 10