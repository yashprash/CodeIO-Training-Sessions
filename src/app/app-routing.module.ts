import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './components/user-form/user-form.component';
import { MainContainerComponent } from './components/main-container/main-container.component';


const appRoutes: Routes = [
  { path: 'welcome', component: MainContainerComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
  // ,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
