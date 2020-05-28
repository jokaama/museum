import { Component, OnInit } from '@angular/core';
import { Museum } from '../models/museum/museum';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  public museums: Museum[];
  // 2. Constructeur
  constructor(private dataService: DataService) {

  };
  // 3. Méthodes

  ngOnInit() {
    this.dataService.fetchMuseums()
      .subscribe(
        (res) => {
          this.museums = res;
        },
        (error) => {
          console.log("Il y a une erreur !");

        })
  }
};
