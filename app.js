function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){
    console.log(songList);
    // This is where you task begins
    var template = ''
    for(var key of songList){
      var url = key.albumArt
      var preview = key.preview
      var artist = key.artist
      var album = key.collection
      var price = key.price
      var title = key.title
      template += 
      `
    
      <div id="style" class="flex-cont">
        <div>${title}</div>
        <div><img src="${url}"></div>
          <div>${artist}</div>
        <div>
          <audio controls src=${preview}> Your user agent does not support the HTML5 Audio element. </audio>
        </div>
        <div> ${album}</div>
        <div>$${price} </div>
      </div>
    
            `
// <audio controls
//   src=${preview}>
// Your user agent does not support the HTML5 Audio element.
// </audio>
    }
    document.getElementById("song-list").innerHTML = template
  }
  
}



var itunesCtrl = new ItunesController()


//  this.drawDc = function(){
//     var dcChars= comicService.getCharacters('dc')
//     var template = `<ul>`
//     for(var char of dcChars){
//       var url = char.image || 'http://placehold.it/20x20'
//       template+=`<li>${char.name} <img src="${url}" width="20"></li>`
//     }
//     template+=`</ul>`
//     document.getElementById('dc').innerHTML = template
//   }