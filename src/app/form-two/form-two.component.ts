import { Component, OnInit } from '@angular/core';
import {FormstateService} from '../formstate.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit {

  constructor(public formState: FormstateService) { }

  ngOnInit(): void {
  }

}
