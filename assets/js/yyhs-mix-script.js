console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/Honey Singh/Yo Yo Mix/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Haaye Mera Dil - Alfaaz Ft. Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/1.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Daftar ki Girl - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/2.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Stardom - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/3.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Tanning - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/4.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Bring Me Back - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/5.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Ise Kehte Hai Hip Hop - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/6.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Beautiful - Yo Yo Honey Singh Ft. Mlkit Singh", filePath: "../music/Honey Singh/Yo Yo Mix/7.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Yadaan - Yo Yo Honey Singh Ft. Sardool Sikander", filePath: "../music/Honey Singh/Yo Yo Mix/8.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Me And Myself - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/9.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Mehrma - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/10.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "This Party Getting Hot - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/11.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Get Up Jawani - Yo Yo Honey Singh Ft. Badshah", filePath: "../music/Honey Singh/Yo Yo Mix/12.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Lonely - Khiladi 786 Ft. Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/13.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Alchoholic - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/14.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Dope Shope - Yo Yo Honey Singh Ft. Deep Money", filePath: "../music/Honey Singh/Yo Yo Mix/15.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Angreji Beat - Yo Yo Honey Singh Ft. Gippy Grewal", filePath: "../music/Honey Singh/Yo Yo Mix/16.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Love Dose - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/17.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Brown Rang - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/18.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    {songName: "Yo Yo Mashup - Yo Yo Honey Singh", filePath: "../music/Honey Singh/Yo Yo Mix/19.mp3", coverPath: "../images/covers/yyhs-mix.jpeg"},
    
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
        audioElement.src = `../music/Honey Singh/Yo Yo Mix/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Honey Singh/Yo Yo Mix/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/Honey Singh/Yo Yo Mix/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})