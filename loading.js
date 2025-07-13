window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("LoadingScreen").classList.add("hidden");
    document.body.classList.add("loaded");
    }, 800);
})