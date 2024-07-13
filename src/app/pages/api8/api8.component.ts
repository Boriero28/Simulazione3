import { Component } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-api8',
  templateUrl: './api8.component.html',
  styleUrls: ['./api8.component.css']
})
export class Api8Component {
  dataMin: string = '';
  dataMax: string = '';
  avgRate: number | null = null;

  constructor(private financingService: FinancingService) { }

  getAverageRateByDateRange(): void {
    if (!this.dataMin || !this.dataMax) {
      alert('Tutti i campi sono obbligatori');
      return;
    }

    const requestData = {
      dataMin: this.dataMin,
      dataMax: this.dataMax
    };

    this.financingService.getAverageRateByDateRange(requestData).subscribe(
      data => {
        if (data.status === 'OK') {
          this.avgRate = data.avgRate;
        } else {
          alert(data.message);
        }
      },
      error => {
        console.error('Error fetching average rate', error);
        alert('Error fetching average rate');
      }
    );
  }
}
