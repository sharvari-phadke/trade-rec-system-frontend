import { Component, OnInit, Type } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loginMessage: string;
  // router: Router;
  constructor(private _userService: UserService, private router: Router , private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('form submitted');
    // console.log(this.user);

    // This routing is working
    // this.router.navigate(['/tabs']);

    this._userService.getUserVerification(this.user).subscribe( result => {
      console.log("result   "+result);
      // result = true;
      if( result ) {
        this.loginMessage= ""
        // code here to redirect to 1st page
        console.log("User login successful!")
        console.log("Routing works");

        // Check if this works or not
        this.router.navigate(['/tabs']);
      }
      else {
        this.loginMessage= "User login failed. Please enter correct username/ password."
        console.log("User login unsuccessful!")
        // window.location.reload();
      }
    })
  }
}
