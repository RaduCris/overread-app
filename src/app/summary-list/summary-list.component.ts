import { SummaryDetailsComponent } from '../summary-details/summary-details.component';
import { Observable } from "rxjs";
import { SummaryService } from "../summary.service";
import { Summary } from "../summary";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-summary-list",
  templateUrl: "./summary-list.component.html",
  styleUrls: ["./summary-list.component.css"]
})
export class SummaryListComponent implements OnInit {
  summaries: Observable<Summary[]>;

  constructor(private summaryService: SummaryService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.summaries = this.summaryService.getSummariesList();
  }

  deleteSummary(id: number) {
    this.summaryService.deleteSummary(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  summaryDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateSummary(id: number){
    this.router.navigate(['update', id]);
  }
}
