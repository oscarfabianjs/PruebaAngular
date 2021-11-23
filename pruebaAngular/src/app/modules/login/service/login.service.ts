import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login(user: string, password: string){

    if (user == 'fabian' && password == '1234' ) {
      this.loggedIn.next(true);
      this.router.navigate(['']);
    }

  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
