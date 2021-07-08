import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { UserStore } from '../services/user.store';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  userObs$!: Observable<User[]>;

  constructor(private router: Router, private userStore: UserStore) { }

  ngOnInit(): void {
    this.userObs$ = this.userStore.users$;
  }

  onUserSelected(user: User){
    this.router.navigateByUrl(`./detail/${user.id}`)
  }
}
