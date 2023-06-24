console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Eminem/Eminem Hits/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Space Bound - EMINEM", filePath: "../music/Eminem/Eminem Hits/1.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Love The Way You Lie - EMINEM Ft. Rihanna", filePath: "../music/Eminem/Eminem Hits/2.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Mockingbird - EMINEM", filePath: "../music/Eminem/Eminem Hits/3.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "The Real Slim Shady - EMINEM", filePath: "../music/Eminem/Eminem Hits/4.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Rock Bottom - EMINEM", filePath: "../music/Eminem/Eminem Hits/5.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "The Monster - EMINEM Ft. Rihanna", filePath: "../music/Eminem/Eminem Hits/6.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Sing for the Moment - EMINEM", filePath: "../music/Eminem/Eminem Hits/7.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Rap God - EMINEM", filePath: "../music/Eminem/Eminem Hits/8.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "The Way I Am - EMINEM", filePath: "../music/Eminem/Eminem Hits/9.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Guts Over Fear - EMINEM", filePath: "../music/Eminem/Eminem Hits/10.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Not Afraid - EMINEM", filePath: "../music/Eminem/Eminem Hits/11.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Till I Collapse - EMINEM", filePath: "../music/Eminem/Eminem Hits/12.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Lose Yourself - EMINEM", filePath: "../music/Eminem/Eminem Hits/13.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Phenomenal - EMINEM", filePath: "../music/Eminem/Eminem Hits/14.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    {songName: "Godzilla - EMINEM", filePath: "../music/Eminem/Eminem Hits/15.mp3", coverPath: "../images/covers/eminem-hits-tn.jpg"},
    
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
        audioElement.src = `../music/Eminem/Eminem Hits/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/Eminem/Eminem Hits/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Eminem/Eminem Hits/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})