console.log("welcome to spotify");
let masterplay=document.getElementById('masterplay');
let mypro =document.getElementById('mypro');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let audioelem= new Audio('songs1.mp3');
let songitemplay=document.getElementById('songitemplay');
let index=0;
let sgindex;
let ssgindex=parseInt(sgindex);
let currentSongIndex=0;
let id =document.getElementById('sgindex');
let mastersongname = document.getElementById('mastersongname');
let songs = [{songname:"Tauba Tauba",filePath: 'songs1.mp3'},
    {songname:"whistle",filePath:'songs2.mp3'},
    {songname:"Peace", filePath:'songs3.mp3'},
    {songname: "O sajni ",filePath:'songs4.mp3'}
];
songitem.forEach((element,i)=>{
element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});
//handle play pause click
    masterplay.addEventListener('click', () => {
        if (audioelem.paused || audioelem.currentTime <= 0) {
            audioelem.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            updateSongButton(currentSongIndex, 'fa-play', 'fa-pause');
        } else {
            audioelem.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            updateSongButton(currentSongIndex, 'fa-pause', 'fa-play');
        }
    });
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element, index) => {
        element.addEventListener('click', (e) => {

            if(audioelem.paused || audioelem.currentTime<=0){
          currentSongIndex = index;
          audioelem.src = songs[currentSongIndex].filePath;
          audioelem.play();
          masterplay.classList.remove('fa-play');
          masterplay.classList.add('fa-pause');
          mastersongname.innerText = songs[currentSongIndex].songname;
          updateSongButton(currentSongIndex, 'fa-pause', 'fa-play');
          currentSongIndex=index;
          updateSongButton(currentSongIndex, 'fa-play', 'fa-pause');
          ud(ssgindex,'fa-play','fa-pause');
            }
            else{
                currentSongIndex = index;
                audioelem.pause();
                masterplay.classList.remove('fa-pause');
                masterplay.classList.add('fa-play');
                updateSongButton(currentSongIndex, 'fa-pause', 'fa-play');
                ud(ssgindex,'fa-pause','fa-play');
                
            }
         
        });
      });
     
    function updateSongButton(index, removeClass, addClass) {
        const songButtons = document.getElementsByClassName('songitemplay');
                if (currentSongIndex===index) {
            songButtons[index].classList.remove(removeClass);
            songButtons[index].classList.add(addClass);
        }
       
}
function ud(ssgindex,removeClass,addClass){
    for(ssgindex=1;ssgindex<=4;ssgindex++){
        songButtons[ssgindex].classList.remove(removeClass);
            songButtons[ssgindex].classList.add(addClass);
    }
}
//listen to events
audioelem.addEventListener('timeupdate',()=>{
   
    progress = parseInt((audioelem.currentTime/audioelem.duration)*100);
   
   mypro.value=progress;
});
mypro.addEventListener('change',()=>{
    audioelem.currentTime=mypro.value*audioelem.duration/100;
})

const makeallplay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-solid', 'fa-pause');
        element.classList.add('fa-solid', 'fa-play');
       
    });
}
 
document.getElementById('next').addEventListener('click',()=>{
    if(index>=4){
        index=0;
    }
    else{
        index++;
        mastersongname.innerText=songs[index].songname;
        audioelem.src=`songs${index+1}.mp3`;
    audioelem.currentTime=0;
    audioelem.play();
    }

})
document.getElementById('previous').addEventListener('click',()=>{

        if(index>=0){
            index--;
            audioelem.src=`songs${index}.mp3`;
            mastersongname.innerHTML=songs[index-1].songname;
            audioelem.currentTime=0;
            audioelem.play();
        }
        else{
            index=4;
        }
    
 })





