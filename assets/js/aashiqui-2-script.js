console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Bollywood/Aashiqui 2/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Tum Hi Ho - Aashiqui 2 (Arijit Singh)", filePath: "../music/Bollywood/Aashiqui 2/1.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Sunn Raha Hai - Aashiqui 2 (Ankit Tiwari)", filePath: "../music/Bollywood/Aashiqui 2/2.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Chahun Main Ya Naa - Aashiqui 2 (Arijit Singh)", filePath: "../music/Bollywood/Aashiqui 2/3.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Hum Mar Jayenge - Aashiqui 2 (Arijit Singh)", filePath: "../music/Bollywood/Aashiqui 2/4.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Meri Aashiqui - Aashiqui 2 (Arijit Singh)", filePath: "../music/Bollywood/Aashiqui 2/5.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Piya Aaye Na - Aashiqui 2 (Ankit Tiwari)", filePath: "../music/Bollywood/Aashiqui 2/6.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Bhula Dena Mujhe - Aashiqui 2 (Mustafa Zahid)", filePath: "../music/Bollywood/Aashiqui 2/7.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Aasan Nahin Yahaan - Aashiqui 2 (Arijit Singh)", filePath: "../music/Bollywood/Aashiqui 2/8.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Sunn Raha Hai (Female) - Aashiqui 2 (Shreya Ghoshal)", filePath: "../music/Bollywood/Aashiqui 2/9.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "Milne Hai Mujhse Aayi - Aashiqui 2 (Arijit Singh)", filePath: "../music/Bollywood/Aashiqui 2/10.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    {songName: "The Love Theme - Aashiqui 2", filePath: "../music/Bollywood/Aashiqui 2/11.mp3", coverPath: "../images/covers/aashiqui-2.jpg"},
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../music/Bollywood/Aashiqui 2/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Bollywood/Aashiqui 2/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../music/Bollywood/Aashiqui 2/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})