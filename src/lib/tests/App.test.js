import App from './../App';

it('throws error whene missing mandatory paramenter', () => {
  expect(() => { new App() }).toThrow(TypeError);
});


// it('return media type', () => {
//   const zot = new App('video');
//   expect(zot.media).toBe('video')
// });
