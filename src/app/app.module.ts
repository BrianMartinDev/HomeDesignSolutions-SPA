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

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
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
