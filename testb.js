let videoWidth = 640;
let videoHeight = 480;
let outputCanvas = document.getElementById("outputCanvas");
let ctx = outputCanvas.getContext("2d");

let video = null;

navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMeida;



function run() {
    startCamera();
    requestAnimationFrame(detectFace);
    Module._test();
}

async function startCamera() {
    video = document.getElementById("video");
    let stream = await navigator.mediaDevices.getUserMedia({
        video: {
            width: {
                exact: videoWidth
            },
            height: {
                exact: videoHeight
            }
        },
        audio: false
    })
    video.srcObject = stream;
    video.play();
}


function detectFace() {
    // Capture a frame
    ctx.drawImage(video, 0, 0);

    requestAnimationFrame(detectFace);
}

function initOver() {
    console.log("Init Over");
}

var Module = {
    onRuntimeInitialized: initOver,
    preRun: [
    ],
    postRun: [run]
}