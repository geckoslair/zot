import Zot from './App';


var elem = document.getElementById("zot-video");
var zotVideo = new Zot('video', elem, {source: "http://techslides.com/demos/sample-videos/small.mp4"});

var elemGallery = document.getElementById("zot-gallery");
var zotGallery = new Zot('gallery', elemGallery, {lazyLoad: 1});

var elemAudio = document.getElementById("zot-audio");
var zotAudio = new Zot('audio', elemAudio, {source: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3", audioOnly: true, height: 0});
