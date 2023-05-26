

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Ticket } from '../../models/ticket';
import { Typetoken } from '../../models/typetoken';
import { Compteur } from '../../models/compteur';
import { TypetokenService } from '../../services/typetoken.service';
import { TicketService } from '../../services/ticket.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { CompteurService } from '../../services/compteur.service';
import { CompteurLoggedUserService } from '../../services/compteurLoggedUser.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-vendre-ticket',
  templateUrl: './vendre-ticket.component.html',
  styleUrls: ['./vendre-ticket.component.css']
})
export class VendreicketComponent implements OnInit {

  ticket: Ticket = new Ticket();
  typetokens: Observable<Typetoken[]>;
  compteurs: Observable<Compteur[]>;

  submitted = false;
  username: string;
  serial: number;
  prix: number;
  numCompteur: string;
  @ViewChild('contentSell', { static: true }) private contentSell: TemplateRef<any>;
  successSell:boolean = false ;
  constructor(private ticketService: TicketService, private typetokenService: TypetokenService,
    private compteurService: CompteurService, private router: Router, private tokenStorageService: TokenStorageService,
     private compteurLoggedUserService: CompteurLoggedUserService,
     private modalService: NgbModal,
     private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.typetokens = this.typetokenService.getTypetokensByUserList();
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
  }

  newTicket(): void {
    this.submitted = false;
    this.ticket = new Ticket();
  }

  save() {
    /*this.serial = this.getRndLong(10000000000000, 100000000000000)
    this.ticketService.ticketrwithLoggedcentreTicket(this.username, this.serial, this.ticket)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.ticket = new Ticket();
    this.prix = this.ticket.typetoken.prix;
    this.numCompteur = this.ticket.numCompteur;
    this.router.navigate(['tickets', this.serial, this.numCompteur]);*/

  }

  onSubmit() {
    this.submitted = true;
    this.modalService.open(this.contentSell , {windowClass:'customModal' , backdrop: 'static', keyboard: false, centered: true})
    //this.confirmVendreTicket();
  }

  getRndLong(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  cancelVendre()
  {
    this.modalService.dismissAll();
   
   
  } 

  confirmVendreTicket()
  {
    this.serial = this.getRndLong(10000000000000, 100000000000000)
    this.ticketService.ticketrwithLoggedcentreTicket( this.serial, this.ticket)
      .subscribe(
        data => {
        },
        error => console.log(error) , () => {
          this.modalService.dismissAll()
          this.toastr.warning('ticket vendre avec succées!', 'Succès!');
          this.successSell = true
          this.ticket = new Ticket() ; 
          this.submitted = false ;
        });
      
       // this.router.navigate(['tickets', this.serial, this.numCompteur]);
  }
}