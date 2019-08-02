import Zot from './App';


var elem = document.getElementById("zot-video");
new Zot('video', elem, {source: "http://techslides.com/demos/sample-videos/small.mp4"});

var elemGallery = document.getElementById("zot-gallery");
new Zot('gallery', elemGallery, {lazyLoad: 1});

var elemAudio = document.getElementById("zot-audio");
new Zot('audio', elemAudio, {source: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3", audioOnly: true});

export default Zot
