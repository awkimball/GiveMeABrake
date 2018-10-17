import { Injectable } from '@angular/core';
import { Department } from './domain/models/department';
import { DEPTS } from './dept-data';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor() { }

  getDepts(): Department[] {
    return DEPTS;
  }

}
