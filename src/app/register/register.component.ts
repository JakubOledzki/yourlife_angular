import { Component, OnInit } from '@angular/core';
import { User, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '', '', '');

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }

  createUser(): void{
    this.httpClientService.createUser(this.user).subscribe(data => {
      alert('User created successfully');
    });
  }

}
