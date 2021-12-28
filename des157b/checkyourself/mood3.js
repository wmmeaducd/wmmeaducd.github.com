let globalData;
let numDataPoints;
async function getData(){
    const myMoods = await fetch('data/mood2.json');
    const data = await myMoods.json();
    console.log(data);

    const dataPoints = Object.keys(data);
    globalData = Object.entries(data);
    numDataPoints = dataPoints.length;
    //console.log(globalData, numDataPoints);
}

function showMoodInfo(point, data){
    const fontAwesomeFaces = [
        '<i class="far fa-angry"></i>',
        '<i class="far fa-frown"></i>',
        '<i class="far fa-meh"></i>',
        '<i class="far fa-smile"></i>',
        '<i class="far fa-grin-beam"></i>',
        '<i class="far fa-grin-tears"></i>'
    ];
    document.querySelector('#reason').innerHTML = data[point][1].reason;
    document.querySelector('#moods').innerHTML = fontAwesomeFaces[ data[point][1].mood ];
    document.querySelector('#time').innerHTML = data[point][1].time;
}

document.addEventListener('mousemove', reportPos);

let prevLoc = 0;

function reportPos(event) {
    const windowSize = window.innerWidth;
    const timeSection = windowSize / numDataPoints;
    const xPos = event.clientX;
    const changeTime = Math.floor(xPos / timeSection);

    if (changeTime !== prevLoc) {
        //console.log(changeTime);
        showMoodInfo(changeTime, globalData);
        prevLoc = changeTime;
    }
}



/* function outputHTML1(data){
    const feeling = ['really bad', 'grumpy', 'meh', 'ok', 'good!', 'wicked awesome!'];
    let html = '<p>';
    html += `at ${data.point2.time} I was feeling ${feeling[ data.point2.mood ]} because of ${data.point2.reason}`; 
    html += '</p>';
    return html;
}

function createSelectList(data){
    let html = '<option>---</option>';
    //converts the main object keys into an array...
    const dataPoints = Object.keys(data);
    dataPoints.forEach( function(eachPoint){
        html += `<option value="${eachPoint}">${data[eachPoint].time}</option>`;
    } );
    return html;
}

document.querySelector('#picker').addEventListener('change', function(event){
    const newValue = this.value;
    updateInterface(newValue, globalData);
});

function updateInterface(value, jsonData){
    const feeling = ['really bad', 'grumpy', 'meh', 'ok', 'good!', 'wicked awesome!'];
    let html = '<p>';
    html += `at ${jsonData[value].time} I was feeling ${feeling[ jsonData[value].mood ]} because of: ${jsonData[value].reason}`;
    html += '</p>';
    document.querySelector('#result').innerHTML = html;
} */

getData();