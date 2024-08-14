import { EventEmitter } from '@angular/core';

export class UserService {
  users = [
    {
      name: 'Jhon1',
      job: 'Teacher1',
      gender: 'Male1',
      country: 'USA1',
      age: 35,
      avatar: './assets/avatar/jhon.jpg',
    },
    {
      name: 'Jhon2',
      job: 'Teacher2',
      gender: 'Male2',
      country: 'USA2',
      age: 35,
      avatar: './assets/avatar/f.jpg',
    },
    {
      name: 'Jhon3',
      job: 'Teacher3',
      gender: 'Male3',
      country: 'USA3',
      age: 35,
      avatar: './assets/avatar/jhon.jpg',
    },
    {
      name: 'Jhon4',
      job: 'Teacher4',
      gender: 'Male4',
      country: 'USA4',
      age: 35,
      avatar: './assets/avatar/f.jpg',
    },
    {
      name: 'Jhon5',
      job: 'Teacher5',
      gender: 'Male5',
      country: 'USA5',
      age: 35,
      avatar: './assets/avatar/jhon.jpg',
    },
    {
      name: 'Jhon6',
      job: 'Teacher6',
      gender: 'Male6',
      country: 'USA6',
      age: 35,
      avatar: './assets/avatar/f.jpg',
    },
    {
      name: 'Jhon7',
      job: 'Teacher7',
      gender: 'Male7',
      country: 'USA7',
      age: 35,
      avatar: './assets/avatar/jhon.jpg',
    },
    {
      name: 'Jhon8',
      job: 'Teacher8',
      gender: 'Male8',
      country: 'USA8',
      age: 35,
      avatar: './assets/avatar/f.jpg',
    },
  ];

  OnShowDetailsClicked = new EventEmitter<{
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }>();

  ShowUserDetails(user: {
    name: string;
    job: string;
    gender: string;
    country: string;
    age: number;
    avatar: string;
  }) {
    this.OnShowDetailsClicked.emit(user);
  }
}
