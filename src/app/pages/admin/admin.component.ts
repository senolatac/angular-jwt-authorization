import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userList: Array<User> = [];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.findAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

  detail(user: User) {
    this.router.navigate(['/detail', user.id], {state: user});
  }

}
