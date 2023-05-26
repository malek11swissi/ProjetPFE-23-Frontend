import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { TicketService } from '../../services/ticket.service';


@Component({
  selector: 'app-ticketserial',
  templateUrl: './ticketserial.component.html',
  styleUrls: ['./ticketserial.component.css']
})
export class TicketSerialComponent implements OnInit {
  currentUser: any;
  serial: number;
  prix: number;
  numCompteur: string;


  constructor(private token: TokenStorageService, private route: ActivatedRoute,
    private router: Router, private ticketService: TicketService) { }

  ngOnInit() {

    this.serial = this.route.snapshot.params['serial'];
    //this.prix = this.route.snapshot.params['prix'];
    this.numCompteur = this.route.snapshot.params['numCompteur'];

    this.currentUser = this.token.getUser();
    //this.typetoken = this.getTypetoken(this.serial);
    //print ${ this.typetoken };
  }
  getTypetoken(serial: number) {
    return this.ticketService.getTicketfromSerial(serial);
  }
}