import { Component, OnInit } from '@angular/core';
import {FormstateService} from '../formstate.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {

  constructor(public formState: FormstateService) { }

  ngOnInit(): void {
  }

}
