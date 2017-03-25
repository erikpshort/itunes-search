function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }



document.addEventListener('play', function(e){
var audios = document.getElementsByTagName('audio');
for(var i = 0, len = audios.length; i < len;i++){
    if(audios[i] != e.target){
        audios[i].pause();
    }
}
}, true);



  function drawSongs(songList){
    console.log(songList);
    // This is where you task begins
    var template = ''
    for(var key of songList){
      template += 
      `
    
      <div id="style" class="flex-cont">
        <div>${key.title}</div>
        <div><img src="${key.albumArt}"></div>
          <div>${key.artist}</div>
        <div>
          <audio controls src=${key.preview}> Your user agent does not support the HTML5 Audio element. </audio>
        </div>
        <div> ${key.collection}</div>
        <div>$${key.price} </div>
      </div>`
    }
    document.getElementById("song-list").innerHTML = template
  }
  
}



var itunesCtrl = new ItunesController()