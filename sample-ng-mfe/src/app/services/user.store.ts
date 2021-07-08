import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { User } from "../model/user";

@Injectable({
    providedIn: "root"
})
export class UserStore {

    private users = new BehaviorSubject<User[]>([]);
    public users$: Observable<User[]> = this.users.asObservable();

    constructor(){
        this.loadAllUsers()
    }

    loadAllUsers(): void {
        const users: User[] = [
            {
                id: 1,
                age: 33,
                dept: "Sales",
                name: "Jane Doe",
                role: "Sales Lead"
            },
            {
                id: 2,
                age: 40,
                dept: "HR",
                name: "Jack Black",
                role: "HR Manager"
            },
            {
                id: 3,
                age: 21,
                dept: "Engineering",
                name: "John Doe",
                role: "Developer"
            },
            {
                id: 4,
                age: 60,
                dept: "Marketing",
                name: "Jacob Smith",
                role: "Marketing Head"
            }
        ]
        this.users.next(users)
    }

    getUserById(id: number): Observable<User> {
        return this.users$.pipe(
            map((users: User[]) => users.filter(user => user.id == id)),
            map(users=> users[0])
        )
    }
}