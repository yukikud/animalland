document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("bgm");

    const logo = document.getElementById("banner");

    // ロゴクリックで再生・停止
    banner.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("isPlaying", "true");
        } else {
            audio.pause();
            localStorage.setItem("isPlaying", "false");
        }
    });

    
});
