import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.scss']
})
export class UpdateModelComponent implements OnInit {

  id: string;
  modelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    polygons: new FormControl(0, Validators.required),
    description: new FormControl('')
  })

  constructor(private globalService: GlobalService, private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute){}

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.getModel(params['id'])
    })
  }

  getModel(id: string) {
    this.globalService.getModelById(id).subscribe(res => {
      this.id = res.id;
      this.modelForm.setValue({
        name: res.name,
        author: res.author,
        polygons: res.polygons,
        description: res.description
      })
     });
  }

  onSubmit() {
    this.globalService.updateModel(this.id, this.modelForm.value.name, this.modelForm.value.author, this.modelForm.value.polygons, this.modelForm.value.description).subscribe(res => {
      this.openSnackBar("Modèle modifié avec succès", "X");
      this.router.navigate(['/model/', this.id]);
    }, error => {
      this.openSnackBar("Une erreur est survenue", "X");
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
