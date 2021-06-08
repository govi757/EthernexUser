import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Screens/about/about.component';
import { BlogComponent } from './Screens/blog/blog.component';
import { ContactComponent } from './Screens/contact/contact.component';
import { FaqComponent } from './Screens/faq/faq.component';
import { HomePageComponent } from './Screens/home-page/home-page.component';
import { PortfolioComponent } from './Screens/portfolio/portfolio.component';
import { ServicesDatabaseComponent } from './Screens/services-database/services-database.component';
import { ServicesDesignComponent } from './Screens/services-design/services-design.component';
import { ServicesDevelopmentComponent } from './Screens/services-development/services-development.component';
import { ServicesDigitalMarketingComponent } from './Screens/services-digital-marketing/services-digital-marketing.component';
import { ServicesItInfraManagementComponent } from './Screens/services-it-infra-management/services-it-infra-management.component';


const routes: Routes = [
  { path: 'ethernex/home', component: HomePageComponent },
  { path: 'ethernex/overview', component: AboutComponent },
  { path: 'ethernex/designService', component: ServicesDesignComponent },
  { path: 'ethernex/developmentService', component: ServicesDevelopmentComponent },
  { path: 'ethernex/itInfraService', component: ServicesItInfraManagementComponent },
  { path: 'ethernex/databaseService', component: ServicesDatabaseComponent },
  { path: 'ethernex/portfolio', component: PortfolioComponent },
  { path: 'ethernex/blog', component: BlogComponent },
  { path: 'ethernex/faq', component: FaqComponent },
  { path: 'ethernex/contactus', component: ContactComponent },
  { path: 'ethernex/digitalMarketing', component: ServicesDigitalMarketingComponent },
  
  { path: '',
    redirectTo: '/ethernex/home',
    pathMatch: 'full'
  },

  { path: '**',
    redirectTo: '/ethernex/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
