import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TravellistRoutingModule } from './travellist-routing.module';
import { TravellistIndexComponent } from './travellist-index/travellist-index.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [TravellistIndexComponent],
  imports: [
    CommonModule,
    TravellistRoutingModule,
    CarouselModule
  ]
})
export class TravellistModule { }
