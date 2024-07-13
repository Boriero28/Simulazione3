import { Component, OnInit } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  richieste: any[] = [];

  constructor(private financingService: FinancingService) { }

  ngOnInit(): void {
    this.getRichieste();
  }

  getRichieste(): void {
    this.financingService.getRichieste(10).subscribe(
      data => {
        if (data.status === 'OK') {
          this.richieste = data.data;
        } else {
          alert(data.message);
        }
      },
      error => {
        console.error('Error fetching richieste', error);
        alert('Error fetching richieste');
      }
    );
  }
}
