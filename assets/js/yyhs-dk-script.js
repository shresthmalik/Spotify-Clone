console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Honey Singh/Desi Kalakar/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Desi Kalakar - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/1.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    {songName: "Love Dose - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/2.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    {songName: "I'm Your DJ Tonight - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/3.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    {songName: "Chal Mere Ghar - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/4.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    {songName: "Daftar Ki Girl - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/5.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    {songName: "One Thousand Miles - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/6.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    {songName: "Stardom - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/7.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    {songName: "Tanning - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Desi Kalakar/8.mp3", coverPath: "../images/covers/yyhs-dk.jpg"},
    
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
        audioElement.src = `../music/Honey Singh/Desi Kalakar/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Honey Singh/Desi Kalakar/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Honey Singh/Desi Kalakar/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})