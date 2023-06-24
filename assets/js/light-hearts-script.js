console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('../music/1/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Banjaara - Ek Villain (2014)", filePath: "../music/2/1.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Barish - Half Girlfriend", filePath: "../music/2/2.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Besabriyaan - M.S.Dhoni", filePath: "../music/2/3.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Bhaag Milkha Bhaag (2013)", filePath: "../music/2/4.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Chaar Kadam - PK (2014)", filePath: "../music/2/5.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Chahun Main Ya Naa - Aashiqui-2", filePath: "../music/2/6.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Dagabaaz Re - Dabangg-2 (2012)", filePath: "../music/2/7.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Guzarish - Ghajini (2008)", filePath: "../music/2/8.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Hamdard - Ek Villain (2014)", filePath: "../music/2/9.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Hangover - Kick (2014)", filePath: "../music/2/10.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "I Love You - Bodyguard (2011)", filePath: "../music/2/11.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Ishq Wala Love - Student of the Year (2012)", filePath: "../music/2/12.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Jeena Jeena - Badlapur (2015)", filePath: "../music/2/13.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Jeene Lagaa Hoon - Ramaiya Vastavaiya (2013)", filePath: "../music/2/14.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Kaise Mujhe Tum Mil Gayi - Ghajini (2008)", filePath: "../music/2/15.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Kaun Tujhe Yoon Pyaar Karega - M.S.Dhoni", filePath: "../music/2/16.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Khamoshiyan - Unplugged (2016)", filePath: "../music/2/17.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Khamoshiyan Title Track (2016)", filePath: "../music/2/18.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Main Rang Sharbaton Ka - Phata Poster Nikla Hero (2013)", filePath: "../music/2/19.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Milne Hai Mujhse Aayi - Aashiqui-2", filePath: "../music/2/20.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Muskuraane (Unplugged) - CityLights (2014)", filePath: "../music/2/21.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Muskuraane - CityLights (2014)", filePath: "../music/2/22.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Pee Loon - Once Upon a Time in Mumbai (2010)", filePath: "../music/2/23.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Pehli Nazar Mein - Race (2008)", filePath: "../music/2/24.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Phir Kabhi - M.S.Dhoni", filePath: "../music/2/25.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Sawan Aaya Hai - Creature 3D", filePath: "../music/2/26.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Te Amo - Dum Maaro Dum (2011)", filePath: "../music/2/27.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Tera Naam Doon - Entertainment (2014)", filePath: "../music/2/28.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Tera Hone Laga Hoon - Ajab Prem Ki Ghazab Kahani", filePath: "../music/2/29.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Tujh Mein Rab Dikhta Hai - Rab Ne Bana Di Jodi (2008)", filePath: "../music/2/30.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Tumko Paaya Hai To Jaise Khoya Hoon - Om Shaanti Om (2007)", filePath: "../music/2/31.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "What Makes You Beautiful - One Direction", filePath: "../music/2/32.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},
    {songName: "Zara Si Dil Mein De Jagah Tu - Jannat (2008)", filePath: "../music/2/33.mp3", coverPath: "../images/covers/light-hearts-tn.jpg"},

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
        audioElement.src = `../music/1/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=33){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../music/1/${songIndex+1}.mp3`;
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
    audioElement.src = `../music/1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})