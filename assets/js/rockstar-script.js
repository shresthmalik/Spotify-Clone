console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Bollywood/Rockstar/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Phir Se Ud Chala - Rockstar (Mohit Chauhan)", filePath: "../music/Bollywood/Rockstar/1.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Jo Bhi Main Kehna Chahun - Rockstar (Mohit Chauhan)", filePath: "../music/Bollywood/Rockstar/2.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Katiya Karun - Rockstar (Harshdeep Kaur)", filePath: "../music/Bollywood/Rockstar/3.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Kun Faya Kun - Rockstar (Javed Ali)", filePath: "../music/Bollywood/Rockstar/4.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Sheher Mein - Rockstar (Mohit Chauhan)", filePath: "../music/Bollywood/Rockstar/5.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Hawaa Hawaa - Rockstar (Mohit Chauhan)", filePath: "../music/Bollywood/Rockstar/6.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Aur Ho - Rockstar (Mohit Chauhan)", filePath: "../music/Bollywood/Rockstar/7.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Tango For Taj - Rockstar (Instrumental)", filePath: "../music/Bollywood/Rockstar/8.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Tum Ko - Rockstar (Kavita Subramaniam)", filePath: "../music/Bollywood/Rockstar/9.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "The Dichotomy of Fame - Rockstar (Balesh, Kabuli)", filePath: "../music/Bollywood/Rockstar/10.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Nadaan Parinde - Rockstar (Rahman, Mohit Chauhan)", filePath: "../music/Bollywood/Rockstar/11.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Tum Ho - Rockstar (Mohit Chauhan, Suzanne D'Mello)", filePath: "../music/Bollywood/Rockstar/12.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Saada Haq - Rockstar (Mohit Chauhan)", filePath: "../music/Bollywood/Rockstar/13.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},
    {songName: "Meeting Place - Rockstar (Ranbir Kapoor)", filePath: "../music/Bollywood/Rockstar/14.mp3", coverPath: "../images/covers/rockstar-tn.jpg"},

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
        audioElement.src = `../music/Bollywood/Rockstar/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=13){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Bollywood/Rockstar/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Bollywood/Rockstar/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})