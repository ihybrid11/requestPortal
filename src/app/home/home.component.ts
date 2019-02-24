import { Component, OnInit } from '@angular/core';
import { SrdServiceService } from '../Shared/srd-service.service'
import { srdList } from '../Shared/data.model';
import { Router } from '@angular/router';
import { SharedInstancesService } from '../Shared/shared-instances.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submittedSRD: srdList[] = [];

  constructor(private srdService: SrdServiceService,
    private router: Router,
    private sharedInstancesService: SharedInstancesService
  ) { }

  maxQuestions = [
    { type: 'total', count: 34 },
    { type: 'Text', count: 22 },
    { type: 'Number', count: 6 },
    { type: 'Date/Time', count: 4 },
    { type: 'Time', count: 2 }
  ];

  ngOnInit() {
    this.submittedSRD = this.srdService.getSRDRequests();
    console.log("user length = " + this.srdService.loggedInUser.length);
    
    
  }

  modifySRD (item: srdList) {
    this.sharedInstancesService.storage = item;
    this.router.navigate(['/modify']);
  }

  sortBy (property: string) {

  }

  approveSRD(item) {
    this.srdService.approveSRD(item);
    //this.router.navigate(['/home']);
  }

  showSRDForm(item) {
    alert(item.title);
  }

}
