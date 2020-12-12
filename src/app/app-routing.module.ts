import { SummaryDetailsComponent } from './summary-details/summary-details.component';
import { CreateSummaryComponent } from './create-summary/create-summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryListComponent } from './summary-list/summary-list.component';
import { UpdateSummaryComponent } from './update-summary/update-summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
  { path: 'summaries', component: SummaryListComponent },
  { path: 'add', component: CreateSummaryComponent },
  { path: 'update/:id', component: UpdateSummaryComponent },
  { path: 'details/:id', component: SummaryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
