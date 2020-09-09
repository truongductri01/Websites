function generateHeroes(){
  var image1 = document.createElement('img');
  var image2 = document.createElement('img');

  var div = document.getElementById('hero-flex-box');
  image1.src="black_widow.jpg";
  image2.src='captain_marvel.jpg';
  image1.style.width='25%';  // if only do image1.width -> image will not show
  image2.style.width='25%';

  div.appendChild(image1);
  div.appendChild(image2);
}
