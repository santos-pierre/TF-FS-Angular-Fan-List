import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from '../models/Fan';
import { FanService } from '../services/fan.service';
import { DateValidator } from '../validators/DateValidator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  fan: Fan;
  formGroup: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _builder: FormBuilder,
    private _router: Router,
    private _fanService: FanService
  ) {
    const data = this._activatedRoute.snapshot.data['fan'];
    this.fan = data;
    this.formGroup = this._builder.group({
      name: [this.fan.name, Validators.required],
      birthDate: [this.fan.birthDate, [Validators.required, DateValidator()]],
      series: this._builder.array([]),
    });
    if (this.fan.series.length > 0) {
      for (let i = 0; i < this.fan.series.length; i++) {
        this.getSeriesForm().push(new FormControl(this.fan.series[i], Validators.required));
      }
    }
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.formGroup.valid) {
      this._fanService.saveFan(this.formGroup.value, this.fan.id);
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
