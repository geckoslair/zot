import App from './../App';

it('renders without crashing', () => {
  new App();
});


it('return media type', () => {
  const zot = new App('video');
  expect(zot.media).toBe('video')

});
