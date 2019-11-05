import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsulesListComponent } from './capsules-list/capsules-list.component';
import { CapsuleDetailsComponent } from './capsule-details/capsule-details.component';



@NgModule({
  declarations: [CapsulesListComponent, CapsuleDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class CapsulesModule { }
