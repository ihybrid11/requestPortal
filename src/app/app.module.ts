import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewSRDComponent } from './new-srd/new-srd.component';
import { ModifySRDComponent } from './modify-srd/modify-srd.component';
import { HomeComponent } from './home/home.component';
import { routing } from './Shared/app.routing';
import { SrdServiceService } from './Shared/srd-service.service'
import { SharedInstancesService } from './Shared/shared-instances.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { PreviewSRDComponent } from './preview/preview.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewSRDComponent,
    ModifySRDComponent,
    HomeComponent,
    UserComponent,
    PreviewSRDComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [ SrdServiceService,
    SharedInstancesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
