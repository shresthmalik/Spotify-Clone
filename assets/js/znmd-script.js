console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Bollywood/Zindagi Na Milegi Dobara/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Dil Dhadakne Do - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/1.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Ik Junoon - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/2.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Khaabon Ke Parinday - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/3.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Senorita - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/4.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Der Lagi Lekin - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/5.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Sooraj Ki Baahon Mein - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/6.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Toh Zinda Ho Tum - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/7.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Ik Junoon (Remix) - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/8.mp3", coverPath: "../images/covers/znmd.jpg"},
    {songName: "Senorita (Remix) - Zindagi Na Milegi Dobara (2011)", filePath: "../music/Bollywood/Zindagi Na Milegi Dobara/9.mp3", coverPath: "../images/covers/znmd.jpg"},
    
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
        audioElement.src = `../music/Bollywood/Zindagi Na Milegi Dobara/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Bollywood/Zindagi Na Milegi Dobara/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Bollywood/Zindagi Na Milegi Dobara/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})