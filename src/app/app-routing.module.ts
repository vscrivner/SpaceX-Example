import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapsulesListComponent } from './capsules/capsules-list/capsules-list.component';
import { CapsuleDetailsComponent } from './capsules/capsule-details/capsule-details.component';


const routes: Routes = [
  {
    path: 'capsules',
    component: CapsulesListComponent
  },
  {
    path: 'capsules/:id',
    component: CapsuleDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'capsules'
  },
  {
    path: '**',
    redirectTo: 'capsules'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
