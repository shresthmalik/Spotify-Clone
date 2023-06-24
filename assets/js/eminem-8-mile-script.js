console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Eminem/8 Mile/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Lose Yourself (Soundtrack Version) - EMINEM", filePath: "../music/Eminem/8 Mile/1.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Love Me - EMINEM", filePath: "../music/Eminem/8 Mile/2.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "8 Mile (instrumental) - EMINEM", filePath: "../music/Eminem/8 Mile/3.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Adrenaline Rush - EMINEM", filePath: "../music/Eminem/8 Mile/4.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Places to Go - EMINEM", filePath: "../music/Eminem/8 Mile/5.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Rap Game - EMINEM", filePath: "../music/Eminem/8 Mile/6.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "8 Miles and Runnin' - EMINEM", filePath: "../music/Eminem/8 Mile/7.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Spit Shine - EMINEM", filePath: "../music/Eminem/8 Mile/8.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Time of My Life - EMINEM", filePath: "../music/Eminem/8 Mile/9.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "U Wanna Be Me - EMINEM", filePath: "../music/Eminem/8 Mile/10.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Wanksta - EMINEM", filePath: "../music/Eminem/8 Mile/11.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "R.A.K.I.M.(instrumental) - EMINEM", filePath: "../music/Eminem/8 Mile/12.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "That's My Nigga fo' Real - EMINEM", filePath: "../music/Eminem/8 Mile/13.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Battle - EMINEM", filePath: "../music/Eminem/8 Mile/14.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Rabbit Run - EMINEM", filePath: "../music/Eminem/8 Mile/15.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Criminal (Delux Album Version Explicit) - EMINEM", filePath: "../music/Eminem/8 Mile/16.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Kim (Delux Album Version Explicit) - EMINEM", filePath: "../music/Eminem/8 Mile/17.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},
    {songName: "Wastin' (Delux Album Version) - EMINEM", filePath: "../music/Eminem/8 Mile/18.mp3", coverPath: "../images/covers/eminem-8-mile.jpg"},

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
        audioElement.src = `../music/Eminem/8 Mile/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=17){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Eminem/8 Mile/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Eminem/8 Mile/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})