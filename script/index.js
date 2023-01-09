///// Video-1 //////
let playVideo1 = document.querySelector('#play-btn-1');
let closebtn1 = document.querySelector('#close-btn-1');

playVideo1.addEventListener('click', () => {
    document.querySelector('#videoPlayer-1').style.display = 'block';
    document.querySelector('#myVideo1').play();
})

closebtn1.addEventListener('click', () => {
    document.querySelector('#videoPlayer-1').style.display = 'none';
    document.querySelector('#myVideo1').currentTime = 0;
    document.querySelector('#myVideo1').pause();
})


///// Video-2 //////
let playVideo2 = document.querySelector('#play-btn-2');
let closebtn2 = document.querySelector('#close-btn-2');

playVideo2.addEventListener('click', () => {
    document.querySelector('#videoPlayer-2').style.display = 'block';
    document.querySelector('#myVideo2').play();
})

closebtn2.addEventListener('click', () => {
    document.querySelector('#videoPlayer-2').style.display = 'none';
    document.querySelector('#myVideo2').currentTime = 0;
    document.querySelector('#myVideo2').pause();
})


///// Video-3 //////
let playVideo3 = document.querySelector('#play-btn-3');
let closebtn3 = document.querySelector('#close-btn-3');

playVideo3.addEventListener('click', () => {
    document.querySelector('#videoPlayer-3').style.display = 'block';
    document.querySelector('#myVideo3').play();
})

closebtn3.addEventListener('click', () => {
    document.querySelector('#videoPlayer-3').style.display = 'none';
    document.querySelector('#myVideo3').currentTime = 0;
    document.querySelector('#myVideo3').pause();
})


///// Video-4 //////
let playVideo4 = document.querySelector('#play-btn-4');
let closebtn4 = document.querySelector('#close-btn-4');

playVideo4.addEventListener('click', () => {
    document.querySelector('#videoPlayer-4').style.display = 'block';
    document.querySelector('#myVideo4').play();
})

closebtn4.addEventListener('click', () => {
    document.querySelector('#videoPlayer-4').style.display = 'none';
    document.querySelector('#myVideo4').currentTime = 0;
    document.querySelector('#myVideo4').pause();
})


let url = "https://6385feaa875ca3273d4cccf8.mockapi.io/ItsNix";

async function fetchData(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        data = data[0].tutorials;
        displayVideo(data);
    } catch (error) {
        console.log(error);
    }
}

function displayVideo(data){
    let video_section = document.querySelector('#tutorial');
    let div = document.createElement('div');
    
    data.forEach(element => {
        video_section.innerHTML += `${element.link}`;
    });
}

fetchData();