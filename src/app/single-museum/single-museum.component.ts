import { Component, OnInit, Input } from '@angular/core';
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})
export class SingleMuseumComponent implements OnInit {

  @Input() museum: Museum;

  // 2. Constructeur
  constructor() {

  }

  ngOnInit() {
  }

}
