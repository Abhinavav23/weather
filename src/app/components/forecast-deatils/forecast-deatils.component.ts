import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { CityService } from "../cities/city.service";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-forecast-deatils",
  templateUrl: "./forecast-deatils.component.html",
  styleUrls: ["./forecast-deatils.component.css"],
})
export class ForecastDeatilsComponent implements OnInit, OnDestroy {
  citiInfo: any;
  cityName: string = "";
  citiInfoSubscription: Subscription;
  constructor(
    private citiservc: CityService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cityName = this.route.snapshot.params["name"];
    this.citiInfo = JSON.parse(localStorage.getItem("CitiData"));
    this.citiInfoSubscription = this.citiservc.citiInfo.subscribe((data) => {
      this.citiInfo = data;
      this.setDate();
      this.setTemp();
      //console.log(this.citiInfo);
      localStorage.setItem("CitiData", JSON.stringify(this.citiInfo));
    });
  }

  setDate() {
    let days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    let months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    for (let i = 0; i < 7; i++) {
      let date = this.citiInfo.daily[i].dt * 1000;
      let currentdate = new Date(date);
      this.citiInfo.daily[i].day = days[currentdate.getDay()];
      this.citiInfo.daily[i].date = currentdate.getDate();
      this.citiInfo.daily[i].month = months[currentdate.getMonth()];
    }
  }

  setTemp() {
    for (let i = 0; i < 7; i++) {
      let mytemp = (this.citiInfo.daily[i].temp.day - 273.15).toFixed(2);
      let mytempMax = (this.citiInfo.daily[i].temp.max - 273.15).toFixed(2);
      let mytempMin = (this.citiInfo.daily[i].temp.min - 273.15).toFixed(2);
      this.citiInfo.daily[i].temp.day = mytemp;
      this.citiInfo.daily[i].temp.min = mytempMin;
      this.citiInfo.daily[i].temp.max = mytempMax;
    }
  }

  ngOnDestroy() {
    this.citiInfoSubscription.unsubscribe();
  }
}
