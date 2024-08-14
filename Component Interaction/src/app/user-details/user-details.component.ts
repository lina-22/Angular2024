import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UserService) {}
  user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  } = {
    name: '',
    job: '',
    gender: '',
    country: '',
    age: 0,
    avatar: '',
  };
  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe(
      (data: {
        name: string;
        job: string;
        gender: string;
        country: string;
        age: number;
        avatar: string;
      }) => {
        this.user = data;
      }
    );
  }
}
