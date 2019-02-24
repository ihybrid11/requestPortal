import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { srdList } from '../Shared/data.model';
import { SharedInstancesService } from '../Shared/shared-instances.service';
import { SrdServiceService } from '../Shared/srd-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-srd',
  templateUrl: './modify-srd.component.html',
  styleUrls: ['./modify-srd.component.css']
})
export class ModifySRDComponent implements OnInit {

  srdToBeModified;
  requestor = '';
  title = '';

  constructor(private route: ActivatedRoute,
    private shareInstancesService: SharedInstancesService,
    private srdService: SrdServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.srdToBeModified = this.shareInstancesService.storage;
    this.shareInstancesService.storage = '';
    console.log(this.srdToBeModified);
    if (this.srdToBeModified !== null) {

      this.requestor = this.srdToBeModified.requestor;
      this.title = this.srdToBeModified.title;
      console.log(this.requestor);
    }
  }

  preview () {
    this.shareInstancesService.storage = this.srdToBeModified;
    //this.router.navigate(['/preview']);
  }

  modify(form: NgForm) {
    /*let value = form.value;
    if(value.title != '') {
      this.srdToBeModified.title = value.title;
    }
    

    this.srdService.modifySRD(this.srdToBeModified);
    this.router.navigate(['/home']);*/

    let X = form.value;
    let flag = 0;
    let qs = {
      question: '',
      value: '',
      required: '',
      dependency: ''
    };

    let questions = [];
    for (var i in X) {
      //console.log(X[i]);
      if (i.indexOf('question') !== -1) {

        qs.question = X[i];
      }
      if (i.indexOf('value') !== -1) {

        qs.value = X[i];


      }
      if (i.indexOf('required') !== -1) {

        qs.required = X[i];
      }
      if (i.indexOf('dependency') !== -1) {

        qs.dependency = X[i];
        flag = 1;
      }
      if (flag === 1) {
        flag = 0;

        questions.push(Object.assign({}, qs));

      }


    }
    console.log(questions);

    let newSRD: srdList = new srdList(
      X.srdRef,
      X.requestor,
      X.title,
      'Saved',
      'Pending',
      questions
    );

    this.srdService.modifySRD(newSRD);
    this.router.navigate(['/home']);

  }

  submitSRD(form: NgForm) {
    let value = form.value;
    if (value.title != '') {
      this.srdToBeModified.title = value.title;
    }

    this.srdToBeModified.status = 'Submitted';
    this.srdService.modifySRD(this.srdToBeModified);
    this.router.navigate(['/home']);
  }

  deleteQuestion (question) {
  //questions
    const index = this.srdToBeModified.questions.indexOf(question);
    //alert(index);
    this.srdToBeModified.questions.splice(index,1);
    
  }

}
