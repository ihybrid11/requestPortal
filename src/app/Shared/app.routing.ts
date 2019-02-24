import { Routes, RouterModule } from '@angular/router';

import { NewSRDComponent } from '../new-srd/new-srd.component';
import { ModifySRDComponent } from '../modify-srd/modify-srd.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { PreviewSRDComponent } from '../preview/preview.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'new', component: NewSRDComponent},
    { path: 'modify', component: ModifySRDComponent},
    { path: 'home', component: HomeComponent},
    { path: 'user', component: UserComponent},
    { path: 'preview', component: PreviewSRDComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);