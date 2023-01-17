console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName: "Ask Laftan Anlamaz Tune", filePath: "1.mp3", coverPath: "cover.jpg"},
    {songName: "Unstoppable", filePath:"2.mp3", coverPath: "cover.jpg"},
    {songName: "Dandelions", filePath:"3.mp3", coverPath: "cover.jpg"},
    {songName: "Unholy", filePath:"4.mp3", coverPath: "cover.jpg"},
    {songName: "All of Me", filePath:"5.mp3", coverPath: "cover.jpg"},
    {songName: "I Got You", filePath:"6.mp3", coverPath: "cover.jpg"},
    {songName: "Into You", filePath:"7.mp3", coverPath: "cover.jpg"},
    {songName: "We Don't Talk Anymore", filePath:"8.mp3", coverPath: "cover.jpg"},
    {songName: "Starving", filePath:"9.mp3", coverPath: "cover.jpg"},
    {songName: "Toothbrush", filePath:"10.mp3", coverPath: "cover.jpg"},

    ]
    
    songItems.forEach((element ,i)=>{
       element.getElementsByTagName("img")[0].src = songs[i].coverPath;
       element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });
  
    
document.getElementById('masterPlay').addEventListener('click',()=> {
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
//Listen to Events    
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change' , ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log('e.target');
        makeAllPlays();
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
        audioElement.src= `${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
        audioElement.src= `${songIndex}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

