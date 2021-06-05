


import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "recentworkscat.component.html",
})
export class recentWorkcatComponent {
  rows: any;
  columns: any;
  constructor(public api: ApiService, private router: Router) {}
  ngOnInit() {
    this.getRecentworkCat();
    this.columns = [
      {
        title: "Job Title",
        field: "jobTitle",
      },
      {
        title: "Location",
        field: "locationCountry",
      },
      {
        title: "Open Position",
        field: "opens",
      },
      {
        title: "Experience",
        field: "experience",
      },
      {
        title: "Status",
        field: "status",
      },
      {
        title: "Action",
        field: "action",
      },
    ];
  }
  getRecentworkCat() {
    this.api.getRecentworkCat().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.rows = res.message;
      } else {
        console.log("errror", res);
      }
    });
  }

  addrecentworkcat() {
    console.log("hello");

    this.router.navigate(["add-recentworkcat"]);
  }
}