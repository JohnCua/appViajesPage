import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  FullLayoutTravellistComponent,
  SimpleLayoutComponent
} from './layout';
import { PagesModule } from './views/pages/pages.module';
import { TravellistModule } from './views/travellist/travellist.module';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },

    // para mostras simple-layout
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=>PagesModule,
      },
    ]
  },


  // ruta para joblist general
  {
    path: '',
    component: FullLayoutTravellistComponent,
    data: {
      title: 'index'
    },
    children: [
      {
        path: 'index',
        loadChildren: ()=>TravellistModule,
      }
    ]
  },

{
  path: '**',
  redirectTo: '404',
  pathMatch: 'full',
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
