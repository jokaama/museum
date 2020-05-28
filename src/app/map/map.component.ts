import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']

})

export class MapComponent implements AfterViewInit {

  private map;
  @Input() coordinates: number[];
  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: '../../../assets//marker-icon.png',
      shadowUrl: '../../../assets/marker-shadow.png'
    })
  };

  constructor() { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.coordinates[0], this.coordinates[1]],
      zoom: 5
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    const marker = L.marker([this.coordinates[0], this.coordinates[1]], this.icon).addTo(this.map);
    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}