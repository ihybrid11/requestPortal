import { Component, OnInit, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SrdServiceService } from '../Shared/srd-service.service';
import { srdList } from '../Shared/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-srd',
  templateUrl: './new-srd.component.html',
  styleUrls: ['./new-srd.component.css']
})
export class NewSRDComponent implements OnInit {

  totalSRDs = 0;
  referenceNum: string = 'SRD000';
  status: string = 'DRAFT';
  approvers = [];

  fakeArray = new Array(0);
  fakeArrayRadio = new Array(0);
  fakeArrayCheck = new Array(0);
  fakeArrayNum = new Array(0);
  fakeArrayDate = new Array(0);
  fakeArrayTime = new Array(0);
  fakeArrayMenu = new Array(0);
  fakeArrayMenuElements = new Array(0);


  constructor(private srdService: SrdServiceService, private renderer: Renderer2, private router: Router) {
    //this.srdService.maxQuestions = this.maxQuestions;
  }

  questionCounter: number = 1;

  maxQuestions = [];
  mQs = [
    { type: 'total', count: 34 },
    { type: 'Text', count: 22 },
    { type: 'Number', count: 6 },
    { type: 'Date', count: 4 },
    { type: 'Time', count: 2 }
  ];

  @ViewChild("f", { read: ElementRef }) private f: ElementRef;

  ngOnInit() {
    this.totalSRDs = this.srdService.getTotalCountOfSRDs() + 1;
    this.referenceNum = this.referenceNum + this.totalSRDs;
    this.approvers = this.srdService.getApprovers();

  }

  deleteQuestion(type, index) {
    if(type === 'text'){
      this.fakeArray.splice(index,1);
    }
    if(type === 'check'){
      this.fakeArrayCheck.splice(index,1);
    }
    if(type === 'radio'){
      this.fakeArrayRadio.splice(index,1);
    }
    if(type === 'number'){
      this.fakeArrayNum.splice(index,1);
    }
    if(type === 'date'){
      this.fakeArrayDate.splice(index,1);
    }
    if(type === 'time'){
      this.fakeArrayTime.splice(index,1);
    }
    
  }

  addSRD(form: NgForm) {
    let X = form.value;
    console.log('Form Value', X);
    let flag = 0;
    let qs = {
      question: '',
      value: '',
      required: '',
      dependency: '',
      type: '',
      lobname: ''
    };

    let questions = [];
    for (var i in X) {
      //console.log(X[i]);
      if (i.indexOf('question') !== -1) {
        
        qs.question = X[i];
        if (i.indexOf('tquestion') !== -1){
          qs.type = 'text';
        }
        if (i.indexOf('cquestion') !== -1){
          qs.type = 'checkbox';
        }
        if (i.indexOf('rquestion') !== -1){
          qs.type = 'radio button';
        }
        if (i.indexOf('nquestion') !== -1){
          qs.type = 'number';
        }
        if (i.indexOf('dquestion') !== -1){
          qs.type = 'date';
        }
        if (i.indexOf('tiquestion') !== -1){
          qs.type = 'time';
        }
        
      }
      if (i.indexOf('value') !== -1) {

        qs.value = X[i];


      }
      if (i.indexOf('required') !== -1) {

        qs.required = X[i];
      }
      if (i.indexOf('dependency') !== -1) {

        qs.dependency = X[i];
      }
      if (i.indexOf('lobname') !== -1) {

        qs.lobname = X[i];
        flag = 1;
      }
      if (flag === 1) {
        flag = 0;

        questions.push(Object.assign({}, qs));

      }


    }
    console.log(questions);

    let newSRD: srdList = new srdList(
      this.referenceNum,
      X.requestor,
      X.title,
      'Saved',
      'Pending',
      questions
    );

    /*newSRD.referenceNum = this.referenceNum;
    newSRD.requestor = X.requestor;
    newSRD.status = 'Saved';
    newSRD.title = X.title;
    newSRD.approvalStatus = 'Pending';*/

    this.srdService.addNewSRD(newSRD);
    this.router.navigate(['/home']);



  }

  submitSRD(form: NgForm) {
    let X = form.value;
    let newSRD: srdList;
    newSRD.referenceNum = this.referenceNum;
    newSRD.requestor = X.requestor;
    newSRD.status = 'Submitted';
    newSRD.title = X.title;
    newSRD.approvalStatus = 'Pending';

    this.srdService.addNewSRD(newSRD);
    this.router.navigate(['/home']);

  }

  addNewQuestion(quesitonType: string) {
    if (quesitonType === 'text') {
      if (this.mQs[1].count < 2) {
        alert('You cannot add more text quesitons');
        return;
      }

      this.mQs[1].count--;
      let length = this.fakeArray.length;
      this.fakeArray = new Array(length + 1);
    }

    if (quesitonType === 'menu') {
      if (this.mQs[1].count < 2) {
        alert('You cannot add more text quesitons');
        return;
      }

      this.mQs[1].count--;
      let length = this.fakeArrayMenu.length;
      this.fakeArrayMenu = new Array(length + 1);
    }

    if (quesitonType === 'number') {
      if (this.mQs[2].count < 2) {
        alert('You cannot add more number quesitons');
        return;
      }

      this.mQs[2].count--;
      let length = this.fakeArrayNum.length;
      this.fakeArrayNum = new Array(length + 1);
    }

    if (quesitonType === 'radio') {
      if (this.mQs[1].count < 2) {
        alert('You cannot add more text quesitons');
        return;
      }

      this.mQs[1].count--;
      let length = this.fakeArrayRadio.length;
      this.fakeArrayRadio = new Array(length + 1);
    }

    if (quesitonType === 'check') {
      if (this.mQs[1].count < 2) {
        alert('You cannot add more text quesitons');
        return;
      }

      this.mQs[1].count--;
      let length = this.fakeArrayCheck.length;
      this.fakeArrayCheck = new Array(length + 1);
    }

    if (quesitonType === 'date') {
      if (this.mQs[3].count < 2) {
        alert('You cannot add more date quesitons');
        return;
      }

      this.mQs[3].count--;
      let length = this.fakeArrayDate.length;
      this.fakeArrayDate = new Array(length + 1);
    }

    if (quesitonType === 'time') {
      //console.log('time',this.mQs[4].count );
      if (this.mQs[4].count < 2) {
        alert('You cannot add more time quesitons');
        return;
      }
      
        this.mQs[4].count--;
        let length = this.fakeArrayTime.length;
        this.fakeArrayTime = new Array(length + 1);
      


    }


  }


}
