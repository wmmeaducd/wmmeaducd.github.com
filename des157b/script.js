
// This is a fix for height on iOS
const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', appHeight);
appHeight();

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
    const topListItems = document.querySelectorAll('#projects ul > li');
    const topListSpans = document.querySelector('#projects > ul > li > span');
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

    topListItems.forEach(function(eachItem){
        eachItem.addEventListener('mouseenter', function(event){
            event.preventDefault(); //needed to keep other events from registering
			event.target.className = 'hover';
        });

        eachItem.addEventListener('mouseleave', function(event){
            event.preventDefault(); //needed to keep other events from registering
			event.target.removeAttribute('class');
        });

        eachItem.addEventListener('touchstart', function(event){
            event.preventDefault();//needed to keep other events from registering
            const thisItem = this; //needed to grab the correct element. Event.target was not working

            //removes the class if you are tapping to close the menu
            if(thisItem.hasAttribute('class')){
				thisItem.removeAttribute('class');
			} else {
                //Makes sure all the menus are closed
                topListItems.forEach(function(eachItem){
                    eachItem.removeAttribute('class');
                });
                // opens the menu that is closed, if it wasn't open.
                thisItem.className = 'hover';
            }
        });
    });
})();

