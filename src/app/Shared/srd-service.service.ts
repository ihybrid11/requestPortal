import { Injectable } from '@angular/core';
import { srdList } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class SrdServiceService {

  private Users = [
    { username: 'user_101', password: 'user101', accessLevel: 'Super', Email: 'user101@gmail.com' },
    { username: 'user_102', password: 'user102', accessLevel: 'normal', Email: 'user102@gmail.com' }
  ];
  
  public loggedInUser = [];
  
  srdsRequest: srdList[] = [
    {
      referenceNum: 'SRD0001',
      requestor: 'randomguy@gmail.com',
      title: 'Password Reset',
      status: 'Saved',
      approvalStatus: 'Pending',
      questions: []
    }
  ];

  approvers = [
    { customerSet: 'SET A', name: 'SET A OWNER', Email: 'user.a@somedomain.com'},
    { customerSet: 'SET B', name: 'SET B OWNER', Email: 'user.b@somedomain.com'},
    { customerSet: 'SET C', name: 'SET C OWNER', Email: 'user.c@somedomain.com'}
];

  maxQuestions = [
    { type: 'total', count: 34 },
    { type: 'Text', count: 22 },
    { type: 'Number', count: 6 },
    { type: 'Date/Time', count: 4 },
    { type: 'Time', count: 2 }
  ];

  constructor() { }

  getApprovers() {
    return this.approvers;
  }

  getQuestionCount() {
    return this.maxQuestions;
  }

  getSRDRequests() {
    return this.srdsRequest;
  }

  addNewSRD(newSRD: srdList) {
    this.srdsRequest.push(newSRD);
  }

  checkSRDStatus(SRD: srdList) {
    return this.srdsRequest[this.srdsRequest.indexOf(SRD)].status;
  }

  modifySRD(SRD: srdList) {
    const result = this.srdsRequest.find(X => X.referenceNum === SRD.referenceNum);
    this.srdsRequest.splice(this.srdsRequest.indexOf(result), 1);
    this.srdsRequest.push(SRD);
  }

  getTotalCountOfSRDs() {
    return this.srdsRequest.length;
  }

  approveSRD(item) {
    const result = this.srdsRequest.find(X => X.referenceNum === item.referenceNum);
    this.srdsRequest[this.srdsRequest.indexOf(result)].approvalStatus = 'Approved';
  }

  logInUser (value) {
    let result = this.Users.find(x => x.username === value.username);
    
    if (result !== null) {
      this.loggedInUser.push(result);
      console.log(this.loggedInUser);
      
      return 'true';
    } else{
      return 'false';
    }
  }

  logOutUser () {
    console.log('array length', this.loggedInUser.length);
    this.loggedInUser.pop();
    console.log('array length after logout', this.loggedInUser.length);
    console.log('array contents', this.loggedInUser.length);
  }
}
