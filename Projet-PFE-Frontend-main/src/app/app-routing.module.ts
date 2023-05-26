
import { Component, NgModule } from '@angular/core';

import { StatComponent } from './pages/stat/stat.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TypetokenListComponent } from './pages/typetoken-list/typetoken-list.component';
import { TokenListComponent } from './pages/token-list/token-list.component';
import { CompteurListComponent } from './pages/compteur-list/compteur-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { PanierListComponent } from './pages/panier-list/panier-list.component';
import { CommandeListComponent } from './pages/commande-list/commande-list.component';
import { TicketSerialComponent } from './pages/ticketserial/ticketserial.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import {  MarchandListComponent } from './pages/marchand-list/marchand-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { MarchandLayoutComponent } from './pages/marchand-layout/marchand-layout.component';

import { HistoriqueVenteComponent } from './pages/HistoriqueVente/HistoriqueVente.component';
import { PorteMonnaieComponent } from './pages/porte-monnaie/porte-monnaie.component';

import { CommandeLoggedUserListComponent } from './pages/commandeLoggedUser-list/commandeLoggedUser-list.component';
import { VendreicketComponent } from './pages/vendre-ticket/vendre-ticket.component';
import { PackComponent } from './pages/pack/pack.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  
  { path: 'admin', component: AdminLayoutComponent,children:[  
    {path: 'stat', component: StatComponent },
   { path: 'commandes', component: CommandeListComponent },
    { path: 'typetokens', component: TypetokenListComponent },
    { path: 'marchands', component: MarchandListComponent },
    { path: 'users', component: UserListComponent },
  

  ] },


  { path: 'user', component: UserLayoutComponent,children:[  
    { path: 'profile', component: ProfileComponent },
    { path: 'porte-monnaie', component: PorteMonnaieComponent },
    { path: 'compteurs', component: CompteurListComponent },
    { path: 'paniers', component: PanierListComponent },
    { path: 'commandeLoggedUsers', component: CommandeLoggedUserListComponent},
    { path: 'tokens', component: TokenListComponent },
  ] },



  { path: 'marchand', component: MarchandLayoutComponent,children:[ 
    { path: 'profile', component: ProfileComponent },
    { path: 'vendreticket', component: VendreicketComponent },
    { path: 'HistoriqueVente', component: HistoriqueVenteComponent },
    { path: 'pack',  component : PackComponent},
] },

  

  { path: 'tickets/:serial', component: TicketSerialComponent },
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
