let audioPlayer = document.querySelector(".player");
let form = document.querySelector(".artist-search");
let searchResults = document.querySelector(".searchResults");
let artist = document.getElementsByClassName('artist-name');
let submitbutton = document.getElementsByClassName("submitbutton");



// Get artist info when submit button is clicked:

// form.onsubmit = function onSubmit(){
//
//   console.log(form.search.value);
//   event.preventDefault();
// };

document.addEventListener('click', function(e){
  if(e.target.className === "submitbutton")
  // var artist = artist.innerHTML;
  fetch("https://api.soundcloud.com/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&" + artist.innerHTML)
  .then(function(response){
  response.json().then(function(data){
    console.log(data);
  })
})
});
