export class CityModel {
  public name: string;
  public id: Number;
  public lat: Number;
  public lon: Number;
  public sunset: any;
  public temp: Number;
  public temp_max: Number;
  public temp_min: Number;
  public humidity: Number;
  public description: string;

  constructor(name, id, lat, lon, temp, temp_max, temp_min, humidity, sunset, description) {
    this.name = name;
    this.id = id;
    this.lat = lat;
    this.lon = lon;
    this.temp = temp;
    this.temp_max = temp_max;
    this.temp_min = temp_min;
    this.humidity = humidity;
    this.sunset = sunset;
    this.description = description;
  }
}
