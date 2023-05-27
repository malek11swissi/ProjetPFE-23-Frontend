import { Observable } from "rxjs";
import { PanierService } from "../../services/panier.service";
import { Panier } from "../../models/panier";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
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
  
  @ViewChild('contentSell', { static: true }) private contentSell: TemplateRef<any>;
  successSell:boolean = false ;
  panier : Panier = new Panier() ; 
 

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

  Payer(){
    this.modalService.open(this.contentSell , {windowClass:'customModal' , backdrop: 'static', keyboard: false, centered: true})
  }

  ConfirmePayerPanier(id: number) {

  
    this.panierService.payerPanier(id)
    
      .subscribe(
        data => {
       if(data.success)
       {
        this.modalService.dismissAll()
        this.toastr.success('token payer avec succées!', 'Succès!');
        this.successSell = true
       

       }
          this.reloadData();
        },
        error => console.log(error));
  }
  
  

  cancelPaiement()
  {
    this.modalService.dismissAll();
  
  } 

 
}
