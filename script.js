
const ImaageSlide = new Siema({
    selector: "#SlideVideos",
    duration: 200,
    perPage: 1,
  })

window.onload = function () {
  // 打字機效果
  new Typed("#BigTitleLooping", {
    strings: ["FRC8569", "中和高中FRC"],
    typeSpeed: 85,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    showCursor: false
  });

  new SmoothScroll('a[href*="#"]', {
    speed: 2000
  });
};

function goNext(){
 ImaageSlide.next()
}

function goBack(){
  ImaageSlide.prev()
}