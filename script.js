// 최소 스크립트: 푸터의 연도를 자동으로 표시합니다.
(function () {
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();


function my_html() {
  
  var parent = document.getElementById("DoneList");
  if (!parent) return;
  parent.innerHTML = ''; // 다른 버튼이 눌리면 기존 리스트 초기화
  var newLi = document.createElement("li");
  newLi.innerHTML = "이 페이지가 html, CSS, JavaScript로 만들어졌습니다.";
  parent.appendChild(newLi);
}
function my_css() {
  var parent = document.getElementById("DoneList");
  if (!parent) return;
  parent.innerHTML = '';
  var newLi = document.createElement("li");
  newLi.innerHTML = "이 페이지가 html, CSS, JavaScript로 만들어졌습니다.";
  parent.appendChild(newLi);
}
function my_js() {
  var parent = document.getElementById("DoneList");
  if (!parent) return;
  parent.innerHTML = '';
  var newLi = document.createElement("li");
  newLi.innerHTML = "이 페이지가 html, CSS, JavaScript로 만들어졌습니다.";
  parent.appendChild(newLi);
}
function my_c() {
  var parent = document.getElementById("DoneList");
  if (!parent) return;
  parent.innerHTML = '';
  var newLi = document.createElement("li");
  newLi.innerHTML = "간단한 타자 연습, 버블/선택 정렬 석차 계산기";
  parent.appendChild(newLi);
}
function my_py() {
  var parent = document.getElementById("DoneList");
  if (!parent) return;
  parent.innerHTML = '';
  var newLi = document.createElement("li");
  newLi.innerHTML = "Django를 활용한 간단한 백엔드 제작(여행 어플리케이션)";
  parent.appendChild(newLi);
}

document.getElementById("html").onclick = my_html;
document.getElementById("css").onclick = my_css;
document.getElementById("js").onclick = my_js;
document.getElementById("c").onclick = my_c;
document.getElementById("py").onclick = my_py;