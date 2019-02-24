import { Component, OnInit } from '@angular/core';
import { SrdServiceService } from '../Shared/srd-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  questionSet = [];
  constructor(private srdService: SrdServiceService, private router: Router) { }

  ngOnInit() {
    if(this.srdService.loggedInUser.length === 0){
      console.log(this.srdService);
    }
    
    this.questionSet = this.srdService.getQuestionCount();
  }

  logout() {
    this.srdService.logOutUser();
    this.router.navigate(['/home']);
  }

}