console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Bollywood/Khamoshiyan/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Khamoshiyan (Title Track) - Arijit Singh", filePath: "../music/Bollywood/Khamoshiyan/1.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Tu Har Lamha - Khamoshiyan (2015) Ft. Arijit Singh", filePath: "../music/Bollywood/Khamoshiyan/2.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Baatein Ye Kabhi Na - Khamoshiyan (2015) Ft. Arijit Singh", filePath: "../music/Bollywood/Khamoshiyan/3.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Kya Khoya - Khamoshiyan (2015)", filePath: "../music/Bollywood/Khamoshiyan/4.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Bheeg Loon - Khamoshiyan (2015)", filePath: "../music/Bollywood/Khamoshiyan/5.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Subhan Allah - Khamoshiyan (2015)", filePath: "../music/Bollywood/Khamoshiyan/6.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Bheegh Loon - Khamoshiyan (2015) Ft. Ankit Tiwari", filePath: "../music/Bollywood/Khamoshiyan/7.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Baatein Ye Kabhi Na (Female) - Khamoshiyan (2015)", filePath: "../music/Bollywood/Khamoshiyan/8.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Khamoshiyan (Unplugged) - Khamoshiyan (2015) Ft. Arijit Singh", filePath: "../music/Bollywood/Khamoshiyan/9.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Tu Har Lamha (Remix) - Khamoshiyan (2015) Ft. Arijit Singh", filePath: "../music/Bollywood/Khamoshiyan/10.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    {songName: "Bheeg Loon (Female Remix) - Khamoshiyan (2015)", filePath: "../music/Bollywood/Khamoshiyan/11.mp3", coverPath: "../images/covers/khamoshiyan.jpg"},
    
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
        audioElement.src = `../music/Bollywood/Khamoshiyan/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Bollywood/Khamoshiyan/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Bollywood/Khamoshiyan/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})