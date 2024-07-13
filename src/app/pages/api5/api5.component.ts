import { Component } from '@angular/core';
import { FinancingService } from 'src/app/services/financing.service';

@Component({
  selector: 'app-api5',
  templateUrl: './api5.component.html',
  styleUrls: ['./api5.component.css']
})
export class Api5Component {
  richiestaID: string = '';

  constructor(private financingService: FinancingService) { }

  deleteRichiesta(): void {
    if (!this.richiestaID.trim()) {
      alert('Il campo Richiesta ID è obbligatorio');
      return;
    }

    this.financingService.deleteRichiesta(this.richiestaID).subscribe(
      data => {
        if (data.status === 'OK') {
          alert('Richiesta eliminata con successo');
          this.richiestaID = '';
        } else {
          alert(data.message);
        }
      },
      error => {
        console.error('Error deleting richiesta', error);
        alert('Error deleting richiesta');
      }
    );
  }
}
