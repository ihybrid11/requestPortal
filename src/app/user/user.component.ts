import { Component, OnInit } from '@angular/core';
import { SrdServiceService } from '../Shared/srd-service.service';
import { srdList } from '../Shared/data.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  
  private cartLength;
  private logInStatus;

  constructor (private srdService: SrdServiceService, private router: Router) {

  }
  
  ngOnInit () {
    
  }

  userLogIn(form: NgForm) {
    let value = form.value;
    this.logInStatus = this.srdService.logInUser(value);
    
    if (this.logInStatus === 'true'){
      this.router.navigate(['/home']);
    } else {
      //this.router.navigate(['/categories']);
      alert('Invalid user');
    }
  }
}
