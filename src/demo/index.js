import Zot from './App';


var elem = document.getElementById("zot-video");
var zotVideo = new Zot('video', elem, {source: "http://techslides.com/demos/sample-videos/small.mp4"});

var elemGallery = document.getElementById("zot-gallery");
var zotGallery = new Zot('gallery', elemGallery);
