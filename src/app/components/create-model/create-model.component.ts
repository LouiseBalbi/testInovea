import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private globalService: GlobalService, private router: Router){}


  onSubmit() {
    this.globalService.createModel(this.modelForm.value.name, this.modelForm.value.author, this.modelForm.value.polygons, this.modelForm.value.description).subscribe(res => {
      this.router.navigate(['/list']);

    })
  }

}
