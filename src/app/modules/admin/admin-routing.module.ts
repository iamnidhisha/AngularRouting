import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoryMasterComponent } from './components/category-master/category-master.component';
import { ProductMasterComponent } from './components/product-master/product-master.component';
import { PriceMasterComponent } from './components/price-master/price-master.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'services', component: ServicesComponent },
      // { path: 'contact', component: ContactComponent },
      { path: 'categoryMaster', component: CategoryMasterComponent },
      { path: 'productMaster', component: ProductMasterComponent },
      { path: 'priceMaster', component: PriceMasterComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
