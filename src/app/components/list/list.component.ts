import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/models/gameModel';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  gameModels = new Array<GameModel>();

  constructor(private gameModelService: GlobalService){}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.gameModelService.getList().subscribe(res => {
      this.gameModels = res;
    })
  }

}
