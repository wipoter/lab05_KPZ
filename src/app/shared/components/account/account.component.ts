import { Component } from '@angular/core';
import { IStudent } from '../../interfaces/student';
import { StudentComponent } from '../student/student.component';
import { IAccount } from '../../interfaces/accont';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts: IAccount[] = [];

  constructor(private account: AccountService){}

  ngOnInit() : void{
      this.account.getStudent().subscribe((result: IAccount[]) => (this.accounts = result));
    }
}


