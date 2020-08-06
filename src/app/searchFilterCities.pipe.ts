import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "SearchFilterCity" })
export class SearchFilterCitiesPipe implements PipeTransform {
  transform(value: any, search: string) {
    if (!search) {
      return value;
    }

    let FilteredCity = value.filter((v) => {
      return v.name.toLowerCase().includes(search.toLowerCase());
    });
    return FilteredCity;
  }
}
