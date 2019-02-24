import { Injectable } from '@angular/core';
import { srdList } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class SharedInstancesService {
    public storage: any;

    constructor () {}
}