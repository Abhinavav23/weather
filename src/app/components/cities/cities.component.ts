import { Component, OnInit, Input } from "@angular/core";
import { CityModel } from "src/app/models/CityModel";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CityService } from "./city.service";

@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.css"],
})
export class CitiesComponent implements OnInit {
  @Input() city: CityModel;
  @Input() index: number;

  weatherInfo: any;
  time: any = {};
  constructor(
    private router: Router,
    private http: HttpClient,
    private citiservc: CityService
  ) {}

  ngOnInit() {
    this.setCitiData();
  }

  onloadingCity(index) {
    this.http
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          this.city.lat +
          "&lon=" +
          this.city.lon +
          "&exclude=current,minutely,hourly&appid=109b3460b2b25e376f8f2ad689676de6"
      )
      .subscribe((data) => {
        this.weatherInfo = data;
        this.citiservc.citiInfo.next(this.weatherInfo);
      });

    this.router.navigate(["/cities", this.city.name]);
  }

  setCitiData() {
    let sunset = new Date(this.city.sunset * 1000);
    this.time.sunset_time = sunset.toLocaleTimeString();
    let currentdate = new Date();
    this.time.isDay = currentdate.getTime() < sunset.getTime();
  }
}
