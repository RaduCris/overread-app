import { Component, OnInit } from '@angular/core';
import { Summary } from '../summary';
import { ActivatedRoute, Router } from '@angular/router';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-update-summary',
  templateUrl: './update-summary.component.html',
  styleUrls: ['./update-summary.component.css']
})
export class UpdateSummaryComponent implements OnInit {

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

  updateSummary() {
    this.summaryService.updateSummary(this.id, this.summary)
      .subscribe(data => {
        console.log(data);
        this.summary = new Summary();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSummary();    
  }

  gotoList() {
    this.router.navigate(['/summaries']);
  }
}
