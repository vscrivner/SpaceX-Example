<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
import { ICapsule } from '../capsule.model';
>>>>>>> Stashed changes

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.scss']
})
<<<<<<< Updated upstream
export class CapsuleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
=======
export class CapsuleDetailsComponent {

  @Input() selectedCapsule: ICapsule;

  constructor( ) { }
>>>>>>> Stashed changes

}
