console.log("Wellcome to My Music Website")

// initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName"); 
let songList = Array.from(document.getElementsByClassName("songList"));
// let  = 0;
let time = 0;




let songs= [
    {songName: "Mortal NCS", filePath: "./songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Celio", filePath: "./songs/2.mp3", coverPath: "./cover/2.jpg"},
    {songName: "NCS mercy", filePath: "./songs/3.mp3", coverPath: "./cover/3.jpg"},
    {songName: "NCS song", filePath: "./songs/4.mp3", coverPath: "./cover/4.jpg"},
    {songName: "NCS heatfree", filePath: "./songs/5.mp3", coverPath: "./cover/5.jpg"},
    {songName: "Heros Tonight", filePath: "./songs/6.mp3", coverPath: "./cover/6.jpg"},
    {songName: "3", filePath: "./songs/7.mp3", coverPath: "./cover/7.jpg"},
    {songName: "4", filePath: "./songs/8.mp3", coverPath: "./cover/8.jpg"},
    {songName: "Sahara", filePath: "./songs/9.mp3", coverPath: "./cover/9.jpg"},
    {songName: "SunRise (slowed)", filePath: "./songs/10.mp3", coverPath: "./cover/10.jpg"},
    {songName: "Way down we go", filePath: "./songs/11.mp3", coverPath: "./cover/10.jpg"},
]

songList.forEach((element, i)=>{
// console.log(element , i);
element.getElementsByTagName("img")[0].src =songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
})








// handle when the song click play/pause
masterPlay.addEventListener("click", () =>{
    if(audioElement.paused || audioElement.currentTime<=0){


        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }


})




// EVEN  TO LISTEN

audioElement.addEventListener("timeupdate", ()=>{
    
    // console.log("timeupdate");      // this updates the progress bar meaning that line of music is updated
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100)

    // console.log(progress);
    myProgressBar.value = progress;


// now i want to change the progress bar if anyone clicks on the progress bar to go through the somg 

myProgressBar.addEventListener('input', ()=>{
   audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})

})


const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(element);
        makeAllPlay();
        songIndex = parseInt(e.target.id); 
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
        audioElement.src = 'songs/' +(songIndex + 1)+ '.mp3';
        masterSongName.innerText = songs[songIndex].songName  
        audioElement.currentTime=0; 
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});








document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex >= 10){
    songIndex = 0;}
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex  + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime=0; 
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex <= 0){
    songIndex = 0;}
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex  + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime=0; 
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})
