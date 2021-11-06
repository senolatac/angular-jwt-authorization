import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  user: User = new User;

  constructor(private router: Router) {
    //works only in the constructor.
    this.user = Object.assign(new User(), this.router.getCurrentNavigation()?.extras.state);
  }

}
