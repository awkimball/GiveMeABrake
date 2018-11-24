import { Component, OnInit } from '@angular/core';
import { TrustedStyleString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-visitshop',
  templateUrl: './visitshop.component.html',
  styleUrls: ['./visitshop.component.css']
})
export class VisitshopComponent implements OnInit {
  
  review=[];
  comment: string; 
  gasprice=80; 
  address="test_address";
  email="test_email";
  description="test_description";

  shopname="test_shopname";
  shopdeal=["first_deal","second_deal","third_deal"];


  constructor() { }

  ngOnInit() {
  }
  addreview() {
    this.review.push(this.comment);
    this.comment='';
  }

}
