import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TransfertSolde } from 'src/app/models/TransfertSolde';
import { SoldeService } from 'src/app/services/solde.service';

@Component({
  selector: 'app-porte-monnaie',
  templateUrl: './porte-monnaie.component.html',
  styleUrls: ['./porte-monnaie.component.css']
})
export class PorteMonnaieComponent implements OnInit {
  monSolde:number = 0;
  transfertSolde: TransfertSolde = new TransfertSolde();
  form_Transfert: FormGroup;
  form_Alimenter: FormGroup;
  submittedTransfert:boolean = false ; 
  submittedAlimenter :boolean = false ; 
  montant:number = 0 ; 
  constructor(private soldeService:SoldeService,
              private modalService: NgbModal,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,) {
                this.form_Transfert = this.formBuilder.group(
                  {
                    telephone : ['', [Validators.required,Validators.minLength(8)]],
                    somme: ['', [Validators.required,Validators.min(0)]],
                
                  })

                  this.form_Alimenter = this.formBuilder.group(
                    {
          
                      montant: ['', [Validators.required,Validators.min(0)]],
                  
                    })
               }

  ngOnInit() {
    this.getMonSolde()
  }
  getMonSolde()
  {
    this.soldeService.getMonSolde().subscribe(
      res =>  {this.monSolde = res}
    )
  }

  transferSolde(contentTransfert)
  {
    this.modalService.open(contentTransfert, {windowClass:'customModal' , backdrop: 'static', keyboard: false, centered: true}).result.then(
			(result) => {

			},
			(reason) => {
			},
		);
  }

  alimenterSolde(contentAlimenter)
  {
    this.modalService.open(contentAlimenter, {windowClass:'customModal' , backdrop: 'static', keyboard: false, centered: true}).result.then(
			(result) => {

			},
			(reason) => {
			},
		);
  }

  get telephone() {return this.form_Transfert .get("telephone")}
  get somme() {return this.form_Transfert .get("somme")}


  save() {

    this.submittedTransfert= true ; 
    if (this.form_Transfert.invalid) {
      return;
    }
    this.soldeService.createtransfertSolde( this.transfertSolde)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.transfertsolde = new TransfertSolde();
    this.transfertSolde = new TransfertSolde();
    this.toastr.success('Transfert effectué!', 'Succès!');
    this.modalService.dismissAll();
    this.submittedTransfert= false ; 
  }

  /*alimenterMonSolde()
{
  this.submittedAlimenter= true ; 
  if (this.form_Alimenter.invalid) {
    return;
  }
 
this.soldeService.alimenterCompte(this.montant).subscribe(res => {
this.toastr.success("Vous avez alimenter votre solde d'un montant de"  + this.montant , "succès"  )
} , error => {} , () => {
  this.montant = 0;
  this.modalService.dismissAll();
  this.getMonSolde()

})
  }
}*/
alimenterMonSolde()
{
 
this.soldeService.alimenterCompte(this.montant).subscribe(res => {
this.toastr.success("Vous avez alimenter votre solde d'un montant de"  + this.montant , "succès"  )
} , error => {} , () => {
  this.montant = 0;
  this.modalService.dismissAll();
  this.getMonSolde()

})
  }
}