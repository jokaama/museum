import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museum } from '../models/museum/museum';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  public museum: Museum;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const id = this.route.snapshot.params["museumId"];
    this.dataService.fetchMuseumById(id)
      .subscribe(
        (res) => {
          this.museum = res;
        },
        (error) => {
          console.log("Il y a une erreur !");

        })
  }

}
