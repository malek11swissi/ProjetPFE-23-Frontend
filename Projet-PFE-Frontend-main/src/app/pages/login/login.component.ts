import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoginFailed = false;
  errorMessage = '';
  role: string = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService , private router:Router) { }

  ngOnInit() {
    window.sessionStorage.clear();
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.role = this.tokenStorage.getUser().role;
    
        if(this.role == 'ROLE_ADMIN')
        {
          this.router.navigate(['admin/stat'])
        }
        if(this.role== 'ROLE_CLIENT')
        {
          this.router.navigate(['user/profile'])
        }

        if(this.role == 'ROLE_MARCHAND')
        {
          this.router.navigate(['marchand/profile'])
        }
        //this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}