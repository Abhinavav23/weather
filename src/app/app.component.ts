import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CityService } from './components/cities/city.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form", { static: true }) form: NgForm;
  searchValue: string = "";
  showDropdown: boolean = false;
  title = "Weather-APP";
  cities: String[] = [
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Delhi",
    "Kolkata",
    "Patna",
    "Bhopal",
    "Cochin",
    "Chennai",
    "Jaipur",
    "Ahmedabad",
    "Surat",
    "Lucknow",
    "Visakhapatnam",
    "Kozhikode",
    "Ghaziabad",
    "Ranchi",
    "Chandigarh",
    "Varanasi",
  ];

  constructor(private citiservc: CityService){}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  removeDropdown() {
    this.showDropdown = false;
  }
  getvalue(c) {
    this.searchValue = c;
    this.form.form.value.cityname = c;
    this.showDropdown = !this.showDropdown;
    this.getsearchValue()
  }
  onSearch() {
    console.log(this.form.value.cityname);
    this.citiservc.cityname.next(this.form.value.cityname)
    this.form.reset();
  }

  getsearchValue(){
    this.citiservc.searchValue.next(this.form.form.value.cityname)
    return this.form.form.value.cityname
  }
}
