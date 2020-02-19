import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TravellistRoutingModule } from './travellist-routing.module';
import { TravellistIndexComponent } from './travellist-index/travellist-index.component';

@NgModule({
  declarations: [TravellistIndexComponent],
  imports: [
    CommonModule,
    TravellistRoutingModule
  ]
})
export class TravellistModule { }
