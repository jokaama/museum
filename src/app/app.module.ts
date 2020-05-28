import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { MuseumListService } from './services/museumList.service';

import { AddComponent } from './add/add.component';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'museums/:museumId', component: MuseumDetailComponent },
  { path: '', component: MuseumListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }

];
@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    MuseumListComponent,
    AddComponent,
    MuseumDetailComponent,
    NotFoundComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
