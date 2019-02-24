import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { srdList } from '../Shared/data.model';
import { SharedInstancesService } from '../Shared/shared-instances.service';
import { SrdServiceService } from '../Shared/srd-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-srd',
  templateUrl: './preview.component.html'
})
export class PreviewSRDComponent implements OnInit {

  srdToBeModified;
  
  constructor(private shareInstancesService: SharedInstancesService,
    private srdService: SrdServiceService,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.srdToBeModified !== null) {
      this.srdToBeModified = this.shareInstancesService.storage;
    }
  }

}
