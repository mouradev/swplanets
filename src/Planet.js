class Planet {
  constructor(name, climate, ground) {
    this.name = name;
    this.climate = climate;
    this.ground = ground;
    this.filmAppearances;
  }

  setFilmAppearances(number) {
    this.filmAppearances = number;
  }
}

module.exports = Planet;
