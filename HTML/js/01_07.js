let number = 38;

function t1(n) {
  return n < 30;
}

function t2(n) {
  return n < 40;
}

function t3(n) {
  return n > 50;
}

if ( number < 30
   || number < 40
   || number > 50 ) {
  console.log(true);
}
if ( t1(number)
   || t2(number)
   || t3(number) ) {
  console.log(true);
}

const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.some((item) => {
  return item >= 4;
});
console.log(someResult);

const fruits = ['사과', '바나나', '오렌지'];
console.log(fruits[1]);
fruits[1] = '수박';
fruits.with(1, '수박');

let list = document.getElementById("list");
console.log(list);

let obj = document.querySelector("#list > li:nth-child(2)");
console.log(obj);

/*
크롬 개발자도구에서 element 탭의 요소찾기로 찾은후에 마우스 오른쪽버튼 Copy ...
1. Copy element
  <li>공부시작</li>
2. Copy outerHTML
  <li>공부시작</li>
3. Copy selector
  #list > li:nth-child(2)
4. Copy JS path
  document.querySelector("#list > li:nth-child(2)")
5. Copy styles
  color: white;
6. Copy XPath
  //*[@id="list"]/li[2]
7. Copy Full XPath
  /html/body/main/div/ul/li[2]
*/
$(function() {
  console.log("HTML 문서 로딩 완료");
  let list = document.getElementById("list");
  let jqlist = $("#list");
  console.log(list);
  console.log(jqlist);
  jqlist.removeClass("bgColorDarkBlue colorWhite");
  jqlist.addClass("bgColorRed colorBack");
});