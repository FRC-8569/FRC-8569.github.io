// 控制詩句捲動只觸發一次
/*自動滾動*/
let poemStarted = false;
document.addEventListener("scroll", () => {
  const poemSection = document.getElementById("frcPoem");
  const poemText = poemSection.querySelector(".poem-text");
  const rect = poemSection.getBoundingClientRect();

  if (!poemStarted && rect.top < window.innerHeight && rect.bottom >= 0) {
    poemText.style.animationPlayState = "running";
    poemStarted = true;
  }
});


/*手動滾動*/
const scrollContainer = document.querySelector('.scroll-text');
const textBlocks = scrollContainer.querySelectorAll('.fade-in-out p');

scrollContainer.addEventListener('scroll', () => {
  const containerHeight = scrollContainer.clientHeight;
  const scrollTop = scrollContainer.scrollTop;

  textBlocks.forEach(p => {
    // 取得該段文字相對 scrollContainer 的位置
    const offsetTop = p.offsetTop;
    const offsetHeight = p.offsetHeight;

    // 計算該段文字中心點距離可視區塊中心的距離
    const centerOfContainer = scrollTop + containerHeight / 2;
    const centerOfElement = offsetTop + offsetHeight / 2;
    const distance = Math.abs(centerOfContainer - centerOfElement);

    // 距離越近，opacity 越高；超過一個閾值就完全透明
    const maxDistance = containerHeight / 2;
    let opacity = 1 - distance / maxDistance;

    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    p.style.opacity = opacity;
  });
});
