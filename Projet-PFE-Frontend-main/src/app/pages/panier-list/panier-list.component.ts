import { Observable } from "rxjs";
import { PanierService } from "../../services/panier.service";
import { Panier } from "../../models/panier";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { ToastrService } from "ngx-toastr";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-panier-list",
  templateUrl: "./panier-list.component.html",
  styleUrls: ["./panier-list.component.css"]
})
export class PanierListComponent implements OnInit {
  paniers: Observable<Panier[]>;
  username: string;

  constructor(private panierService: PanierService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private toastr:ToastrService,
    private modalService: NgbModal,) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    const user = this.tokenStorageService.getUser();

    this.username = user.username;

    //this.compteurLoggedUsers = this.compteurLoggedUserService.getCompteurLoggedUsername(this.username);
    //this.paniers = this.panierService.getPaniersList();
    this.paniers = this.panierService.getPaniersList(this.username);
  }

  payerPanier(id: number) {
    this.panierService.payerPanier(id)
      .subscribe(
        data => {
       if(!data.success)
       {
        this.toastr.warning(data.message, 'Failure!');

       }
          this.reloadData();
        },
        error => console.log(error));
  }
  

  updatePanier(id: number){
    this.router.navigate(['update-panier', id]);
  }

  cancelPaiement()
  {
    this.modalService.dismissAll();
  
  } 

 
}
