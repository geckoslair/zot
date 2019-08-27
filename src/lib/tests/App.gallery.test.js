import App from './../App';


it('throws error when gallery elem is not a div or ul', () => {
  const element = document.createElement('span');
  const options = { source: []}
  expect(() => { new App('gallery', element, options ) }).toThrow('Wrong tagName: element must be a div or ul');
});

it('throws error when gallery source is not an array', () => {
  const element = document.createElement('div');
  const options = { source: ""}
  expect(() => { new App('gallery', element, options ) }).toThrow(TypeError);
});


it('should append slide to gallery elem properly', () => {
  const element = document.createElement('div');
  const options = { source: ["https://www.fillmurray.com/460/300", "https://www.fillmurray.com/460/500"]}
  let zot = new App('gallery', element, options )
  console.log(element.innerHTML)
  expect(zot._player.slides.length).toBe(2)
});

it('each slide should be an IMG tags', () => {
  const element = document.createElement('div');
  const options = { source: ["https://www.fillmurray.com/460/300", "https://www.fillmurray.com/460/500"]}
  new App('gallery', element, options )

  for (var i = 0; i < element.getElementsByClassName("flickity-slider")[0].childNodes.length; i++) {
    expect(element.getElementsByClassName("flickity-slider")[0].childNodes[i].tagName).toBe("IMG")
  }
});



// it('return media type', () => {
//   const zot = new App('video');
//   expect(zot.media).toBe('video')
// });
