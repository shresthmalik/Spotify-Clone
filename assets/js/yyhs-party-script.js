console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Honey Singh/Yo Yo Party/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "ABCD - Yaariyan(2013) - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/1.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Angreji Beat Te - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/2.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Birthday Bash - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/3.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Blue Eyes - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/4.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Breakup Party - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/5.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Chaar Botal Vodka - Ragini MMS 2 - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/6.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Dope Shope - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/7.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "High Heels - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/8.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Lonely - Khiladi 786 - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/9.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Love Dose - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/10.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Lungi Dance - Chennai Express - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/11.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "One Bottle Down - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/12.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Party All Night - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/13.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Party With The Boothnaath - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/14.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Raat Jashan Di - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/15.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Sunny Sunny - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/16.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Superman - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/17.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "This Party Getting Hot - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/18.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    {songName: "Yo Yo Mashup - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Party/19.mp3", coverPath: "../images/covers/yyhs-party-tn.jpeg"},
    
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
        audioElement.src = `../music/Honey Singh/Yo Yo Party/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=18){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Honey Singh/Yo Yo Party/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Honey Singh/Yo Yo Party/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})