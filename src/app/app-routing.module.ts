import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { Api2Component } from './pages/api2/api2.component';
import { Api3Component } from './pages/api3/api3.component';
import { Api4Component } from './pages/api4/api4.component';
import { Api5Component } from './pages/api5/api5.component';
import { Api6Component } from './pages/api6/api6.component';
import { Api7Component } from './pages/api7/api7.component';
import { Api8Component } from './pages/api8/api8.component';


const routes: Routes = [
 //{path:"",component:LoginComponent}, //la prima pagina che viene visualizzata attraverso il <route-outlet>
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'api2', component: Api2Component },
 { path: 'api3', component: Api3Component },
 { path: 'api4', component: Api4Component },{ path: 'api5', component: Api5Component },
 { path: 'api6', component: Api6Component },
 { path: 'api7', component: Api7Component },
 { path: 'api8', component: Api8Component },


  {path:"**",component:NotFoundComponent}  //se metto un /namepage che non esiste, vengo indirizzato in una pagina di errore];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
