console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Eminem/Kamikaze/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "The Ringer - EMINEM", filePath: "../music/Eminem/Kamikaze/1.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Greatest - EMINEM", filePath: "../music/Eminem/Kamikaze/2.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Lucky You (featuring Joyner Lucas) - EMINEM", filePath: "../music/Eminem/Kamikaze/3.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Paul (skit performed by Paul Rosenberg) - EMINEM", filePath: "../music/Eminem/Kamikaze/4.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Normal - EMINEM", filePath: "../music/Eminem/Kamikaze/5.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Em Calls Paul (skit) - EMINEM", filePath: "../music/Eminem/Kamikaze/6.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Stepping Stone - EMINEM", filePath: "../music/Eminem/Kamikaze/7.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Not Alike (featuring Royce da 5'9) - EMINEM", filePath: "../music/Eminem/Kamikaze/8.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Kamikaze - EMINEM", filePath: "../music/Eminem/Kamikaze/9.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Fall - EMINEM", filePath: "../music/Eminem/Kamikaze/10.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Nice Guy (with Jessie Reyez) - EMINEM", filePath: "../music/Eminem/Kamikaze/11.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Good Guy (featuring Jessie Reyez) - EMINEM", filePath: "../music/Eminem/Kamikaze/12.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    {songName: "Venom - EMINEM (Music from the Motion Picture)", filePath: "../music/Eminem/Kamikaze/13.mp3", coverPath: "../images/covers/eminem-kamikaze.jpeg"},
    
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
        audioElement.src = `../music/Eminem/Kamikaze/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Eminem/Kamikaze/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Eminem/Kamikaze/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})