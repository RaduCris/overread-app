import { SummaryService } from '../summary.service';
import { Summary } from '../summary';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-summary',
  templateUrl: './create-summary.component.html',
  styleUrls: ['./create-summary.component.css']
})
export class CreateSummaryComponent implements OnInit {

  summary: Summary = new Summary();
  submitted = false;

  constructor(private summaryService: SummaryService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.summary = new Summary();
  }

  save() {
    this.summaryService
    .createSummary(this.summary).subscribe(data => {
      console.log(data)
      this.summary = new Summary();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/summaries']);
  }
}