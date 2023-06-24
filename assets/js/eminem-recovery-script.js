console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Eminem/Recovery/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Cold Wind Blows - EMINEM", filePath: "../music/Eminem/Recovery/1.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Talkin' 2 Myself - EMINEM", filePath: "../music/Eminem/Recovery/2.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "On Fire - EMINEM", filePath: "../music/Eminem/Recovery/3.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Won't Back Down - EMINEM", filePath: "../music/Eminem/Recovery/4.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "W.T.P - EMINEM", filePath: "../music/Eminem/Recovery/5.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Going Through Changes - EMINEM", filePath: "../music/Eminem/Recovery/6.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Not Afraid - EMINEM", filePath: "../music/Eminem/Recovery/7.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Seduction - EMINEM", filePath: "../music/Eminem/Recovery/8.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "No Love - EMINEM", filePath: "../music/Eminem/Recovery/9.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Space Bound - EMINEM", filePath: "../music/Eminem/Recovery/10.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Cinderella Man - EMINEM", filePath: "../music/Eminem/Recovery/11.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "25 to Life - EMINEM", filePath: "../music/Eminem/Recovery/12.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "So Bad - EMINEM", filePath: "../music/Eminem/Recovery/13.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Almost Famous - EMINEM", filePath: "../music/Eminem/Recovery/14.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Love the Way You Lie - EMINEM Ft. Rihanna", filePath: "../music/Eminem/Recovery/15.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "You're Never Over - EMINEM", filePath: "../music/Eminem/Recovery/16.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},
    {songName: "Untitled (hidden track) - EMINEM", filePath: "../music/Eminem/Recovery/17.mp3", coverPath: "../images/covers/eminem-recovery.jpg"},

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
        audioElement.src = `../music/Eminem/Recovery/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=16){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Eminem/Recovery/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Eminem/Recovery/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})