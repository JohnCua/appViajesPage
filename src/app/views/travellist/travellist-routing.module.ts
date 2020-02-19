import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TravellistModule } from './travellist.module';
import { TravellistIndexComponent } from './travellist-index/travellist-index.component';

const routes: Routes=[
  {
      path: '',
      component: TravellistIndexComponent,
      data: {
        title: 'inicio'
      }
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class TravellistRoutingModule { }
