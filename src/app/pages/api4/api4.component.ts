import { Component } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-api4',
  templateUrl: './api4.component.html',
  styleUrls: ['./api4.component.css']
})
export class Api4Component {
  richiesta = {
    richiestaID: '',
    cognomeNomeRichiedente: '',
    dataInserimentoRichiesta: '',
    importo: null,
    numeroRate: null
  };

  constructor(private financingService: FinancingService) { }

  updateRichiesta(): void {
    if (!this.richiesta.richiestaID) {
      alert('Il campo Richiesta ID è obbligatorio');
      return;
    }

    this.financingService.updateRichiesta(this.richiesta).subscribe(
      data => {
        if (data.status === 'OK') {
          alert('Richiesta aggiornata con successo');
          this.resetForm();
        } else {
          alert(data.message);
        }
      },
      error => {
        console.error('Error updating richiesta', error);
        alert('Error updating richiesta');
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
