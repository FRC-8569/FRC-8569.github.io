const ImaageSlide = new Siema({
  selector: "#SlideVideos",
  duration: 100,
  perPage: 1,
});

function checkAndRedirect() {
  if (window.innerWidth <= 768) {
    location.href = "/mobile";
  } else if (location.href == location.hostname+"/mobile") {
    location.href = "/";
  }
}

window.onload = function () {
  checkAndRedirect(); // 一開始先判斷

  // 打字機效果
  new Typed("#BigTitleLooping", {
    strings: ["FRC8569", "中和高中FRC"],
    typeSpeed: 85,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    showCursor: false
  });

  // 平滑滾動效果
  new SmoothScroll('a[href*="#"]', {
    speed: 2000
  });
};

// ⭐ 動態偵測視窗變化
window.onresize = function () {
  checkAndRedirect(); // 每次改變寬度就檢查
};

function goNext() {
  ImaageSlide.next();
}

function goBack() {
  ImaageSlide.prev();
}
