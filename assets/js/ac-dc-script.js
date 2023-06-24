console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/AC-DC/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Back In Black - Title Track | AC-DC ", filePath: "../music/AC-DC/1.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Highway To Hell | AC-DC ", filePath: "../music/AC-DC/2.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Shoot To Thrills | AC-DC ", filePath: "../music/AC-DC/3.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Beating Around The Bush", filePath: "../music/AC-DC/4.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Get It Hot backing track", filePath: "../music/AC-DC/5.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Girls Got Rhythm", filePath: "../music/AC-DC/6.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Giving The Dog A Bone", filePath: "../music/AC-DC/7.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Have A Drink On Me", filePath: "../music/AC-DC/8.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "High Voltage", filePath: "../music/AC-DC/9.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "If You Want Blood", filePath: "../music/AC-DC/10.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "It's a Long Way to the Top", filePath: "../music/AC-DC/11.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Let Me Put My Love Into You", filePath: "../music/AC-DC/12.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Love Hungry Man", filePath: "../music/AC-DC/13.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Night Prowler", filePath: "../music/AC-DC/14.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Rock N Roll Ain't Noise Pollution", filePath: "../music/AC-DC/15.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Rock'n'roll Singer", filePath: "../music/AC-DC/16.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Shake A Leg", filePath: "../music/AC-DC/17.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "She's Got Balls", filePath: "../music/AC-DC/18.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Shot Down In Flames", filePath: "../music/AC-DC/19.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "The Jack", filePath: "../music/AC-DC/20.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "TNT", filePath: "../music/AC-DC/21.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Touch Too Much", filePath: "../music/AC-DC/22.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "Walk All Over You", filePath: "../music/AC-DC/23.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "What Do You Do For Money Honey", filePath: "../music/AC-DC/24.mp3", coverPath: "../images/covers/acdclogo.jpg"},
    {songName: "You Shook Me All Night Long", filePath: "../music/AC-DC/25.mp3", coverPath: "../images/covers/acdclogo.jpg"},

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
        audioElement.src = `../music/AC-DC/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=24){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/AC-DC/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/AC-DC/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})