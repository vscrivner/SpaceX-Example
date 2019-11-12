import { Component, OnInit} from '@angular/core';

import { CapsulesService } from '../capsules.service';
import { ICapsule } from '../capsule.model';

@Component({
  selector: 'app-capsules-list',
  templateUrl: './capsules-list.component.html',
  styleUrls: ['./capsules-list.component.scss']
})
export class CapsulesListComponent implements OnInit {

  public capsulesList: Array<ICapsule>;
  public loading = true;
  public isVisible = false;
  public modalTitle: string;
  public selectedCapsule: ICapsule;

  constructor(private capsulesService: CapsulesService) { }

  ngOnInit() {
    this.getCapsulesList();
  }

  public showModal(capsuleSerial) {
    this.isVisible = true;
    this.selectedCapsule = this.capsulesList.find(capsule => capsule.capsule_serial === capsuleSerial);
    this.modalTitle = this.selectedCapsule.capsule_serial;
  }

  public handleCancel() {
    this.isVisible = false;
  }

  private getCapsulesList() {
    this.capsulesService.getCapsules().subscribe(data => {
      this.capsulesList = data;
      console.log(this.capsulesList);
      this.loading = false;
    });
  }

}
