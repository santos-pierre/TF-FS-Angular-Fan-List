import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Fan } from '../models/Fan';
import { FanService } from '../services/fan.service';

@Injectable({ providedIn: 'root' })
export class FanResolver implements Resolve<Fan | Promise<boolean>> {
  constructor(private _fanService: FanService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const fan = this._fanService.getFanById(route.paramMap.get('id'));
      return fan;
    } catch (error) {
      return this.router.navigate(['/']);
    }
  }
}
