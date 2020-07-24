export class CityModel {
  public name: string;
  public id: Number;
  public lat: Number;
  public lon: Number;
  public main: object;
  public sunset: any;
  public description: string;

  constructor(name, id, lat, lon, main, sunset, description) {
    this.name = name;
    this.id = id;
    this.lat = lat;
    this.lon = lon;
    this.main = main;
    this.sunset = sunset;
    this.description = description;
  }
}
