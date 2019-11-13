import { Component, OnInit } from '@angular/core';

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

  constructor(private capsulesService: CapsulesService) { }

  ngOnInit() {
    this.getCapsulesList();
  }

  private getCapsulesList() {
    this.capsulesService.getCapsules().subscribe(data => {
      this.capsulesList = data;
      this.loading = false;
    });
  }

}
