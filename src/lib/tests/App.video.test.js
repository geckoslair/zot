import App from './../App';



it('throws error whene missing one or more paramenter', () => {
  expect(() => { new App('video') }).toThrow(TypeError);
});

it('throws error whene missing one paramenter', () => {
  const element = document.createElement('div');
  expect(() => { new App('video', element) }).toThrow(TypeError);
});

it('should not crash if all paramenters are passed', () => {
  const element = document.createElement('div');
  element.id = "target"
  const options = { source: ""}
  new App('video', element, options)
});



// it('return media type', () => {
//   const zot = new App('video');
//   expect(zot.media).toBe('video')
// });
