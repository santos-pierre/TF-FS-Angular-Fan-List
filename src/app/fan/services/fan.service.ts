import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { nanoid } from 'nanoid';
import { FANS } from 'src/data/fan';
import { Fan } from '../models/Fan';

export type FanDTO = {
  name: string;
  birthDate: Date;
  series: string[];
};

@Injectable({
  providedIn: 'root',
})
export class FanService {
  private fanList: Fan[];

  constructor(private _router: Router) {
    this.fanList = FANS;
  }

  getFanList(): Fan[] {
    return this.fanList;
  }

  getFanById(id: string | null): Fan {
    if (id) {
      const fan = this.fanList.find((fan) => fan.id === id);

      if (fan) {
        return fan;
      } else {
        throw new Error(`Fan with ${id} not found`);
      }
    } else {
      throw new Error('Not valid ID');
    }
  }

  saveFan(fanDTO: FanDTO, id?: string): void {
    if (id) {
      // update
      let fanIndex = this.fanList.findIndex((fan) => fan.id === id);
      if (fanIndex === -1) {
        console.error(`Fan with ${id} not found`);
        return;
      } else {
        this.fanList[fanIndex] = { ...this.fanList[fanIndex], ...fanDTO };
      }
    } else {
      this.fanList.push({ id: nanoid(), ...fanDTO });
    }
  }

  deleteFan(id: string): void {
    this.fanList = this.fanList.filter((fan) => fan.id !== id);
  }
}
