const original = "The ocean is more than what you can see on the horizon. Beneath the surface lies our planet’s most complex ecosystems, full of life and potential for exploration and learning. And like in our global robotics community, each ocean inhabitant has a role to play in building a thriving environment."
const translated = "海洋遠不止地平線上可見的景象。在海面之下，蘊藏著地球上最複雜的生態系統，生氣勃勃，蘊藏著探索與學習的潛能。如同全球機器人社群一樣，每個海洋生物都在建構繁榮的海洋環境中扮演著各自的角色。"
var isOriginal = false;


function toggleTranslate(){
    document.getElementById("Dive").textContent = isOriginal ? translated : original;
    isOriginal = !isOriginal;
}


window.onload = function(){
toggleTranslate()
}