import App from './../App';

it('throws error whene missing all mandatories paramenters', () => {
  expect(() => { new App() }).toThrow(TypeError);
});
