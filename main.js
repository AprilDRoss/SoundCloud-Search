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

function createNode(element){
  return document.createElement(element);
}

function append(parent, el){
  return parent.appendChild(el);
}

const ul = document.getElementById('tracks');

document.addEventListener('click', function(e){
  if(e.target.className === "submitbutton")

  fetch("https://api.soundcloud.com/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&" + artist.innerHTML)
  .then(function(response){
  response.json().then(function(data){
    console.log(data);

    // let artistInfo = data;

// // Get the track image and name of track
//     let li = createNode('li');
//     let img = createNode('img');
//     let name = createNode('span');
//
//     img.src = data.artwork_url;
//     span.innerHTML = "";
//
// // Append the info to the unordered list with classname tracks
//     append(li, img);
//     append(li, span);
//     append(ul, li);


  })
})
});
