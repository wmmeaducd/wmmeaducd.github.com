(function(){
    'use strict';
    let state = 0;
    const body = document.querySelector('body');
    const btn = document.querySelector('#switch');
    const h2 = document.querySelector('header h2');
    const videosrc = document.querySelector('#video source');
    const video = document.querySelector('#video');
    const videoFiles = ['video/vid01b.mp4', 'video/vid02c.mp4'];
    const btnText = ['take shelter', 'go traveling'];
    const titleTxt = ['a sweet memory', 'shelter from the storm'];
    const overlay = document.createElement('div');
    overlay.id = "overlay";
    body.appendChild(overlay);

    btn.addEventListener('click', function(){
        state =  state == 0 ? 1 : 0;
        
        changeVideo(videoFiles[state]);
        overlay.className = 'over';
        
        setTimeout(function(){
            h2.textContent = titleTxt[state];
        }, 1000);
        
        setTimeout(function(){
            btn.textContent = btnText[state];
            
            overlay.removeAttribute('class');
        }, 2000);
    });

    function changeVideo(url){
        setTimeout(() => {
            videosrc.setAttribute('src', url);
            video.load();
            video.play();
        }, 1000);
    }
})();