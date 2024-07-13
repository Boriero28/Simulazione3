import { Component } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-api7',
  templateUrl: './api7.component.html',
  styleUrls: ['./api7.component.css']
})
export class Api7Component {
  dataMin: string = '';
  dataMax: string = '';
  totalImporto: number | null = null;

  constructor(private financingService: FinancingService) { }

  getSumImportoByDateRange(): void {
    if (!this.dataMin || !this.dataMax) {
      alert('Tutti i campi sono obbligatori');
      return;
    }

    const requestData = {
      dataMin: this.dataMin,
      dataMax: this.dataMax
    };

    this.financingService.getSumImportoByDateRange(requestData).subscribe(
      data => {
        if (data.status === 'OK') {
          this.totalImporto = data.totalImporto;
        } else {
          alert(data.message);
        }
      },
      error => {
        console.error('Error fetching sum importo', error);
        alert('Error fetching sum importo');
      }
    );
  }
}
