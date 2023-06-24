console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/2/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Aasan Nahi Yahan - Aashiqui-2", filePath: "../music/2/1.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Baarish - Yaarian (2014)", filePath: "../music/2/2.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Baatein Ye Kabhi Na - Khamoshiyan", filePath: "../music/2/3.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Backstreet Boys 10000 Promises", filePath: "../music/2/4.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Behti Hawa - 3 Idiots", filePath: "../music/2/5.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Bhula Dena - Aashiqui-2", filePath: "../music/2/6.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Boond Boond - Roy (2015)", filePath: "../music/2/7.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Chingari Koi Bhadke", filePath: "../music/2/8.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Dard Dilo Ke - The Xpose", filePath: "../music/2/9.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Galiyaan - Ek Villan", filePath: "../music/2/10.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Give Me Some Sunshine - 3 Idiots", filePath: "../music/2/11.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Haal E Dil - Murder 2 (2011)", filePath: "../music/2/12.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Hamari Adhuri Kahani (2015)", filePath: "../music/2/13.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Hum Mar Jayenge - Aashiqui-2", filePath: "../music/2/14.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Janam Janam - Dilwale (2015)", filePath: "../music/2/15.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Judaai - Badlapur (2015)", filePath: "../music/2/16.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Kabhi Jo Baadal - Jackpot (2013)", filePath: "../music/2/17.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Meri Aashiqui - Aashiqui-2", filePath: "../music/2/18.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Meri Maa - Yaarian (2014)", filePath: "../music/2/19.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Piya Aaye Na - Aashiqui-2", filePath: "../music/2/20.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "See You Again - Charlie Puth", filePath: "../music/2/21.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Sunn Raha Hai - Aashiqui-2", filePath: "../music/2/22.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "The Love Theme - Aashiqui-2", filePath: "../music/2/23.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Tu Hai Ki Nahi - Aashiqui-2", filePath: "../music/2/24.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Tu Har Lamha - Hamari Adhuri Kahani (2015)", filePath: "../music/2/25.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Tum Hi Ho - Aashiqui-2", filePath: "../music/2/26.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Yaara Re - Roy (2015)", filePath: "../music/2/27.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Ye Tune Kya Kiya - Once Upon a Time in Mumbai Dobara", filePath: "../music/2/28.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},
    {songName: "Zaroorat - Ek Villan (2014)", filePath: "../music/2/29.mp3", coverPath: "../images/covers/lovers-paradise-tn.jpg"},

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
        audioElement.src = `../music/2/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=28){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/2/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/2/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})