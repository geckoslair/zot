import App from './../App';

it('throws error whene missing mandatory paramenter', () => {
  expect(() => { new App() }).toThrow(TypeError);
});
