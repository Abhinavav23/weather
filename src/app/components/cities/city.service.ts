import { CityModel } from "src/app/models/CityModel";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class CityService {
  CitiesChanged = new Subject<CityModel[]>();
  citiInfo = new Subject<any>();
  cityname  = new Subject<any>();
  searchValue  = new Subject<any>();
}
