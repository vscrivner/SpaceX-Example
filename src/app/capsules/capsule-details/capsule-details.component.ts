import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapsulesService } from '../capsules.service';
import { ICapsule } from '../capsule.model';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.scss']
})
export class CapsuleDetailsComponent implements OnInit {

  public capsuleId: string;
  public capsule: ICapsule;

  @Input() selectedCapsule: ICapsule;

  constructor( public route: ActivatedRoute, private capsuleSerive: CapsulesService ) { }

  ngOnInit() {
    this.capsule = this.selectedCapsule;
    // this.capsuleId = this.route.snapshot.paramMap.get('id');
    // this.capsuleId = this.capsuleId.toUpperCase();
    // console.log(this.capsuleId);
    // this.getCapsule(this.capsuleId);
  }

  private getCapsule(capsuleSerial) {
    this.capsuleSerive.getCapsule(capsuleSerial).subscribe(data => {
      this.capsule = data;
    });
  }
}
