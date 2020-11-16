import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { ExibitionComponent } from './exibitions/exibition/exibition.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RecommendedComponent } from './exibitions/recommended/recommended.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHistoryComponent } from './user-history/user-history.component';


const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'signIn', component: SignInComponent },
  {path: 'exibition' , component: ExibitionComponent },
  {path: 'profile' , component: UserProfileComponent },
  {path: 'history' , component: UserHistoryComponent },
  {path: '**', component: HomeComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExibitionsComponent,
    ExibitionComponent,
    NavigationComponent,
    RecommendedComponent,
    RegisterComponent,
    SignInComponent,
    UserProfileComponent,
    UserHistoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
