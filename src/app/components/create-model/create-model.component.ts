import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.scss']
})
export class CreateModelComponent  {

  modelForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    polygons: new FormControl(0, Validators.required),
    description: new FormControl('')
  })

  constructor(private globalService: GlobalService, private router: Router, private _snackBar: MatSnackBar){}


  onSubmit() {
    this.globalService.createModel(this.modelForm.value.name, this.modelForm.value.author, this.modelForm.value.polygons, this.modelForm.value.description).subscribe(res => {
      this.openSnackBar("Modèle créé avec succès", "X");
      this.router.navigate(['/list']);
    }, error => {
      this.openSnackBar("Une erreur est survenue", "X");
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
