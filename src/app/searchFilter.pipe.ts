import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "SearchFilter" })
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!search) {
      return value;
    }
    let filteredvalue = value.filter((v) => {
      if (!v) {
        return;
      }
      return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return filteredvalue;
  }
}
