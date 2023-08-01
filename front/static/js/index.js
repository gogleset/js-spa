import Dashboard from "./views/Dashboard.js";
import NotFound from "./views/NotFound.js";
import Setting from "./views/Setting.js";
import Posts from "./views/Posts.js";

// 페이지 전환 함수
const navigateTo = (url) => {
  history.pushState(null, null, url); //url 새로고침 없이 이동
  router();
};
console.log(Dashboard);
/// 1.각 route의 경로와 현재 페이지 확인
const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Setting },
  ];

  // 현재 route와 현재 페이지 경로가 일치하는지 테스트
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
    // find 메서드를 사용해 isMatch가 true인 객체를 찾는다.
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  console.log(match);
  // view 함수를 출력해본다.
  const view = new match.route.view();
  // #app 엘리먼트에 활성화된 view의 html 삽입

  document.querySelector("#app").innerHTML = await view.getHtml();
};

//1. DOM이 렌더링 되면 함수 실행
document.addEventListener("DOMContentLoaded", () => {
  // 클릭 이벤트가 발생했을 때,
  // 해당 target이 'data-link' attribute에 페이지 이동 함수 주입
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      // a 태그여서 e.preventDefault
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  // 라우터 함수 실행
  router();
});

// 뒤로가기 하거나 새로고침 했을 때 router도 그 페이지에 맞게 동작하도록
// popstate 이벤트 발생시 router함수 실행
window.addEventListener("popstate", router);
