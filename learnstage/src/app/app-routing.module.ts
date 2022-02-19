import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes = [{ path: "", redirectTo: "home", pathMatch: "full" },
{ path: "imp", component: ImpressumComponent },
{ path: "datenschutz", component: DatenschutzComponent },
{ path: "home", component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
