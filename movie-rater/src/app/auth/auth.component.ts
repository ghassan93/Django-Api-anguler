import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm= new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  });

  registerMode=false;

  constructor(
    private apiService: ApiService,
    private cookieService:CookieService,
    private router:Router

  ) { }

  ngOnInit(): void {
    const mrToken=this.cookieService.get('mr-token');
    console.log(mrToken);
    if(mrToken){
      this.router.navigate(['/movies'])
    }
    
  }


  saveForm(){

    if(!this.registerMode){
      this.loginUser();
    }else{
      this.apiService.registerUser(this.authForm.value).subscribe(
        (result:any) =>{ 
          this.loginUser()
      },
        (error:any) => console.log(error )
      );
    }
    
  }

  loginUser(){
    this.apiService.loginUser({...this.authForm.getRawValue()}).subscribe(
      
      (result: any) =>{ 
      console.log(result)
      this.cookieService.set('mr-token', result.token)
      this.router.navigate(['/movies'])
    },
      
      error => console.log(error )
    );
  }

}
