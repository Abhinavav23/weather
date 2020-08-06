import { Component, OnInit } from "@angular/core";
import { CityModel } from "src/app/models/CityModel";
import { CityService } from "../cities/city.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  searchValue: any
  cities: CityModel[] = [];
  weatherData: any;
  constructor(private citiservc: CityService, private http: HttpClient) {}

  ngOnInit() {
    this.citiservc.searchValue.subscribe(data => {
      this.searchValue = data
    })
    this.http
      .get(
        "https://api.openweathermap.org/data/2.5/group?id=1277333,1275339,1259229,1273294,1269843,1275004,1260086,1275841,1273874,1264527,1269515,1279233,1255364,1264733,1253102,1265873,1271308,1258526,1274746,1253405&units=metric&&appid=109b3460b2b25e376f8f2ad689676de6"
      )
      .subscribe((data) => {
        this.weatherData = data;
        for (var i = 0; i < this.weatherData.cnt; i++) {
          var city = new CityModel(
            this.weatherData.list[i].name,
            this.weatherData.list[i].id,
            this.weatherData.list[i].coord.lat,
            this.weatherData.list[i].coord.lon,
            this.weatherData.list[i].main.temp,
            this.weatherData.list[i].main.temp_max,
            this.weatherData.list[i].main.temp_min,
            this.weatherData.list[i].main.humidity,
            this.weatherData.list[i].sys.sunset,
            this.weatherData.list[i].weather[0].description
          );
          this.cities.push(city);
        }
      });
  }
}
