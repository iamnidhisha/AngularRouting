import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

import { CategoryMasterComponent } from './components/category-master/category-master.component';
import { ProductMasterComponent } from './components/product-master/product-master.component';
import { PriceMasterComponent } from './components/price-master/price-master.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    CategoryMasterComponent,
    ProductMasterComponent,
    PriceMasterComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
