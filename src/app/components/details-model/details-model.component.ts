import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModel } from 'src/app/models/gameModel';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-details-model',
  templateUrl: './details-model.component.html',
  styleUrls: ['./details-model.component.scss']
})
export class DetailsModelComponent implements OnInit {

  currentModel = new GameModel();

  constructor(private globalService: GlobalService, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getModel(params['id'])
    })
1  }


  getModel(id: string) {
    this.globalService.getModelById(id).subscribe(res => {
      this.currentModel = res;
     })
  }

  deleteModel(id: string) {
    this.globalService.deleteModel(id).subscribe(res => {
      this.openSnackBar("Modèle supprimé", "X");
      this.router.navigate(['/list']);
    }, error => {
      this.openSnackBar("Une erreur est survenue", "X");
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
