export class srdList {
    referenceNum: string;
    requestor: string;
    title: string;
    status: string;
    approvalStatus: string;
    questions: any[];

    constructor (refNum: string, req: string, title: string, status: string, approvalStatus: string, questions: any[]) {
      this.referenceNum = refNum;
      this.requestor = req;
      this.title = title;
      this.status = status;
      this.approvalStatus = approvalStatus;
      this.questions = questions;
    }
}

export class User {
  username: string;
  password: string;
  accessLevel: string;

  constructor (username: string, password: string, accessLevel: string) {
    this.accessLevel = accessLevel;
    this.password = password;
    this.username = username;
  }
}