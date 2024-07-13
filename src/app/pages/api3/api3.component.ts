import { Component } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-api3',
  templateUrl: './api3.component.html',
  styleUrls: ['./api3.component.css']
})
export class Api3Component {
  richiesta = {
    richiestaID: '',
    cognomeNomeRichiedente: '',
    dataInserimentoRichiesta: '',
    importo: null,
    numeroRate: null
  };

  constructor(private financingService: FinancingService) { }

  createRichiesta(): void {
    if (!this.richiesta.richiestaID || !this.richiesta.cognomeNomeRichiedente || !this.richiesta.dataInserimentoRichiesta || !this.richiesta.importo || !this.richiesta.numeroRate) {
      alert('Tutti i campi sono obbligatori');
      return;
    }

    this.financingService.createRichiesta(this.richiesta).subscribe(
      data => {
        if (data.status === 'OK') {
          alert('Richiesta creata con successo');
          this.resetForm();
        } else {
          alert(data.message);
        }
      },
      error => {
        console.error('Error creating richiesta', error);
        alert('Error creating richiesta');
      }
    );
  }

  resetForm(): void {
    this.richiesta = {
      richiestaID: '',
      cognomeNomeRichiedente: '',
      dataInserimentoRichiesta: '',
      importo: null,
      numeroRate: null
    };
  }
}
