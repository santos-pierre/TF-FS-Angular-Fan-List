import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from '../models/Fan';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  fan: Partial<Fan> = {};

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    const data = this._activatedRoute.snapshot.data['fan'];
    this.fan = data;
  }

  toUpdate() {
    this._router.navigate(['fans/' + this._activatedRoute.snapshot.params['id'] + '/edit']);
  }
}
