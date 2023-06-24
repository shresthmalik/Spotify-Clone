console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Honey Singh/International Villager/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Brown Rang - Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/1.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Angreji Beat Te  - Yo Yo Honey Singh Ft. Gippy Grewal", filePath: "../music/Honey Singh/International Villager/2.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Goliyan  - Ft. Diljit Dosanjh Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/3.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Dope Shope  - Yo Yo Honey Singh Ft. Deep Money", filePath: "../music/Honey Singh/International Villager/4.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Gabru - Ft. J Star, Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/5.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Aashke - Ft. Money Aujla", filePath: "../music/Honey Singh/International Villager/6.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Beautiful - Ft. Malkit Singh", filePath: "../music/Honey Singh/International Villager/7.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Yadaan - Ft. Sardool Sikander", filePath: "../music/Honey Singh/International Villager/8.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Garaari - Ft. Meet Malkit, Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/9.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Sambhle - Ft. Manak Ali, Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/10.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Head Banger - Ft. Escape Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/11.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Yaad - Ft. Romey Gill, Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/12.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Get Up Jawani   - Yo Yo Honey Singh Ft. Badshah", filePath: "../music/Honey Singh/International Villager/13.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    {songName: "Mujh Ko Jaane Do   - Ft. Raj Brar, Yo Yo Honey Singh", filePath: "../music/Honey Singh/International Villager/14.mp3", coverPath: "../images/covers/yyhs-iv.jpeg"},
    
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
        audioElement.src = `../music/Honey Singh/International Villager/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Honey Singh/International Villager/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Honey Singh/International Villager/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})