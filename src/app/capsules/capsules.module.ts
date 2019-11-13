import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsulesListComponent } from './capsules-list/capsules-list.component';
import { CapsuleDetailsComponent } from './capsule-details/capsule-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [CapsulesListComponent, CapsuleDetailsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ]
})
export class CapsulesModule { }
