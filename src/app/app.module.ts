import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Screens/home-page/home-page.component';
import { AboutComponent } from './Screens/about/about.component';
import { BlogDetailComponent } from './Screens/blog-detail/blog-detail.component';
import { BlogComponent } from './Screens/blog/blog.component';
import { ContactComponent } from './Screens/contact/contact.component';
import { FaqComponent } from './Screens/faq/faq.component';
import { PortfolioComponent } from './Screens/portfolio/portfolio.component';
import { ServicesBussinessConsultationComponent } from './Screens/services-bussiness-consultation/services-bussiness-consultation.component';
import { ServicesDatabaseComponent } from './Screens/services-database/services-database.component';
import { ServicesDesignComponent } from './Screens/services-design/services-design.component';
import { ServicesDevelopmentComponent } from './Screens/services-development/services-development.component';
import { ServicesDigitalMarketingComponent } from './Screens/services-digital-marketing/services-digital-marketing.component';
import { ServicesItInfraManagementComponent } from './Screens/services-it-infra-management/services-it-infra-management.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './Components/loader/loader.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomServiceComponent } from './Screens/custom-service/custom-service.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { ScriptService } from './services/script.service';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    BlogDetailComponent,
    BlogComponent,
    ContactComponent,
    FaqComponent,
    PortfolioComponent,
    ServicesBussinessConsultationComponent,
    ServicesDatabaseComponent,
    ServicesDesignComponent,
    ServicesDevelopmentComponent,
    ServicesDigitalMarketingComponent,
    ServicesItInfraManagementComponent,
    HeaderComponent,
    FooterComponent,
    TechnologiesComponent,
    LoaderComponent,
    CustomServiceComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
