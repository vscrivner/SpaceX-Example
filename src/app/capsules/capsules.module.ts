import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CapsulesListComponent } from './capsules-list/capsules-list.component';
import { CapsuleDetailsComponent } from './capsule-details/capsule-details.component';

@NgModule({
  declarations: [CapsulesListComponent, CapsuleDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ]
})
export class CapsulesModule { }
