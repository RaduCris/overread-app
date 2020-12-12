import { Summary } from '../summary';
import { Component, OnInit, Input } from '@angular/core';
import { SummaryService } from '../summary.service';
import { SummaryListComponent } from '../summary-list/summary-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.css']
})
export class SummaryDetailsComponent implements OnInit {

  id: number;
  summary: Summary;

  constructor(private route: ActivatedRoute,private router: Router,
    private summaryService: SummaryService) { }

  ngOnInit() {
    this.summary = new Summary();

    this.id = this.route.snapshot.params['id'];
    
    this.summaryService.getSummary(this.id)
      .subscribe(data => {
        console.log(data)
        this.summary = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['summaries']);
  }
}
