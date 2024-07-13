import { Component } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-api6',
  templateUrl: './api6.component.html',
  styleUrls: ['./api6.component.css']
})
export class Api6Component {
  dataMin: string = '';
  dataMax: string = '';
  limit: number | null = null;
  richieste: any[] = [];

  constructor(private financingService: FinancingService) { }

  getRichiesteByDateRange(): void {
    if (!this.dataMin || !this.dataMax || this.limit === null) {
      alert('Tutti i campi sono obbligatori');
      return;
    }

    const requestData = {
      dataMin: this.dataMin,
      dataMax: this.dataMax,
      limit: this.limit
    };

    this.financingService.getRichiesteByDateRange(requestData).subscribe(
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
