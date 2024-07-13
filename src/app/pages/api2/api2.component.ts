import { Component, OnInit } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {
  richieste: any[] = [];
  query: string = '';
  displayedColumns: string[] = ['richiestaID', 'cognomeNomeRichiedente', 'dataInserimentoRichiesta', 'importo', 'numeroRate'];

  constructor(private financingService: FinancingService) { }

  ngOnInit(): void {
  }

  searchRichieste(): void {
    if (this.query.trim() === '') {
      alert('Query non può essere vuota');
      return;
    }

    this.financingService.searchRichieste(this.query).subscribe(
      data => {
        if (data.status === 'OK') {
          this.richieste = data.data;
        } else {
          alert(data.message);
        }
      },
      error => {
        console.error('Error searching richieste', error);
        alert('Error searching richieste');
      }
    );
  }
}
