import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserStore } from '../services/user.store';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$!: Observable<User>;

  constructor(private router: Router, private route: ActivatedRoute, private userStore: UserStore) { }

  ngOnInit(): void {
    const userId = parseInt(this.route.snapshot.paramMap.get("id")||"")
    if (isNaN(userId)) {
      this.router.navigate(["./user"])
    }
    this.user$ = this.userStore.getUserById(userId)
  }

}
