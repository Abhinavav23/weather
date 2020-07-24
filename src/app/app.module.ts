import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CitiesComponent } from "./components/cities/cities.component";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { ForecastDeatilsComponent } from './components/forecast-deatils/forecast-deatils.component';
import { MainComponent } from './components/main/main.component';


const appRoute: Routes = [
  { path: "", component:MainComponent },
  { path: "cities/:name", component: ForecastDeatilsComponent },
];

@NgModule({
  declarations: [AppComponent, CitiesComponent, ForecastDeatilsComponent, MainComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoute)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
