import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from './models/Fan';
import { FanService } from './services/fan.service';

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.scss'],
})
export class FanComponent implements OnInit {
  fanListe: Fan[] = [];

  constructor(private _fanService: FanService, private _router: Router) {}

  ngOnInit(): void {
    this.fanListe = this._fanService.getFanList();
  }

  toDetails(id: string) {
    this._router.navigate(['fans/' + id]);
  }

  toCreate() {
    this._router.navigate(['fans/create']);
  }

  toDelete(id: string) {
    this._fanService.deleteFan(id);
    this.fanListe = this._fanService.getFanList();
  }
}
