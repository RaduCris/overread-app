import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSummaryComponent } from './create-summary/create-summary.component';
import { SummaryDetailsComponent } from './summary-details/summary-details.component';
import { SummaryListComponent } from './summary-list/summary-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSummaryComponent } from './update-summary/update-summary.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateSummaryComponent,
    SummaryDetailsComponent,
    SummaryListComponent,
    UpdateSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
