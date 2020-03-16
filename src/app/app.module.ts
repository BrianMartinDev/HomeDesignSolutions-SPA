import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HometeamsComponent } from './hometeams/hometeams.component';
import { PagestoreComponent } from './pagestore/pagestore.component';
import { PageservicesComponent } from './pageservices/pageservices.component';
import { PagecontactComponent } from './pagecontact/pagecontact.component';
import { FaqComponent } from './faq/faq.component';
import { SigninComponent } from './signin/signin.component';
import { PageemployeeportalComponent } from './pageemployeeportal/pageemployeeportal.component';
import { PagecusloginComponent } from './pagecuslogin/pagecuslogin.component';
import { PageemploginComponent } from './pageemplogin/pageemplogin.component';
import { PagecustregisterComponent } from './pagecustregister/pagecustregister.component';
import { PageaddproductsComponent } from './pageaddproducts/pageaddproducts.component';
import { PagecustsettingsComponent } from './pagecustsettings/pagecustsettings.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: PagestoreComponent },
  { path: 'services', component: PageservicesComponent },
  { path: 'contact', component: PagecontactComponent },
  { path: 'portal', component: PageemployeeportalComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'employee-settings', component: PagecustsettingsComponent },
  { path: 'login', component: PagecusloginComponent },
  { path: 'employee-portal', component: PageemployeeportalComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FeaturedComponent,
    FooterComponent,
    AboutComponent,
    HometeamsComponent,
    PagestoreComponent,
    PageservicesComponent,
    PagecontactComponent,
    FaqComponent,
    SigninComponent,
    PageemployeeportalComponent,
    PagecusloginComponent,
    PageemploginComponent,
    PagecustregisterComponent,
    PageaddproductsComponent,
    PagecustsettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
