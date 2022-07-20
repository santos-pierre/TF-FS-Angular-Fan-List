import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FanService } from '../services/fan.service';
import { DateValidator } from '../validators/DateValidator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _builder: FormBuilder, private _router: Router, private _fanService: FanService) {
    this.formGroup = this._builder.group({
      name: [null, Validators.required],
      birthDate: [null, [Validators.required, DateValidator()]],
      series: this._builder.array([]),
    });
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.formGroup.valid) {
      this._fanService.saveFan(this.formGroup.value);
      this._router.navigate(['fans']);
    }
  }

  toHome(): void {
    this._router.navigate(['fans']);
  }

  getSeriesForm(): FormArray {
    return this.formGroup.get('series') as FormArray;
  }

  addSerie(): void {
    this.getSeriesForm().push(new FormControl(null, Validators.required));
  }

  removeSerie(id: number): void {
    this.getSeriesForm().removeAt(id);
  }
}
