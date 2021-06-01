import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ]
})
export class DashboardModule { }
