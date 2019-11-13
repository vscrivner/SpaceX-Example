import { Component, Input } from '@angular/core';
import { ICapsule } from '../capsule.model';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.scss']
})
export class CapsuleDetailsComponent {

  @Input() selectedCapsule: ICapsule;

  constructor( ) { }

}
