import { Component, OnInit } from '@angular/core';
import { Department } from '../domain/models/department';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {

  departments: Department[];

  constructor() { }

  ngOnInit() {

  }

}
