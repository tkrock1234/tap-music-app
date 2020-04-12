//loadイベントはページ全体が、スタイルシートや画像などのすべての依存するリソースを含めて読み込まれたときに発生します。
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
       "#60d394",
       "#d36060",
       "#c060d3",
       "#c0e90a",
       "#6d2ca1",
       "#3af0f0"
    ];

    // Let's get going with sound here
    pads.forEach((pad, index) => {  //index 配列のインデックス番号
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;  //currentTime=0でAudioを停止する。
            sounds[index].play();  //選択されたsounds再生

            creatBubbles(index);
        });
    });

    //Create a function that makes bubbles
    const creatBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});


