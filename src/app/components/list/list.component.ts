import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameModel } from 'src/app/models/gameModel';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  gameModels = new Array<GameModel>();
  isLoading = true;

  constructor(private gameModelService: GlobalService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.gameModelService.getList().subscribe(res => {
      this.gameModels = res;
      this.isLoading = false;
    }, error => {
      this.openSnackBar("Une erreur est survenue", "X");
    }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
