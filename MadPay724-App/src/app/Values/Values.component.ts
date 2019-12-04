import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-Values",
  templateUrl: "./Values.component.html",
  styleUrls: ["./Values.component.css"]
})
export class ValuesComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }
  getValues() {
    this.http.get("https://localhost:44318/weatherforecast").subscribe(
      res => {
        this.values = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
