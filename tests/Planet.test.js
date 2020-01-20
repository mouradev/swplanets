const Planet = require("../src/Planet");

defaultPlanet = new Planet("Alderaan", "temperado", "montanhoso");

test("Instância de planeta", () => {
  const planet = new Planet();
  expect(planet).toBeInstanceOf(Planet);
});

test("Nome do planeta", () => {
  const planet = new Planet("Tatooine");
  expect(planet.name).toBe("Tatooine");
});

test("Clima do planeta", () => {
  const planet = new Planet("Tatooine", "frio");
  expect(planet.climate).toBe("frio");
});

test("Terreno do planeta", () => {
  const planet = new Planet("Tatooine", "frio", "rochoso");
  expect(planet.ground).toBe("rochoso");
});

test("Quantidade de aparições em filmes", () => {
  const planet = defaultPlanet;
  planet.setFilmAppearances(2);
  expect(planet.filmAppearances).toBe(2);
});
