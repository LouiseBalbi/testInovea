import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameModel } from 'src/app/models/gameModel';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-details-model',
  templateUrl: './details-model.component.html',
  styleUrls: ['./details-model.component.scss']
})
export class DetailsModelComponent implements OnInit {

  currentModel = new GameModel();

  constructor(private globalService: GlobalService, private route: ActivatedRoute) { }

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

}
