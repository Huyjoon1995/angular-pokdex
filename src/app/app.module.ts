import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KantoComponent } from './kanto/kanto.component';
import { Routes, RouterModule } from '@angular/router';
import { JohtoComponent } from './johto/johto.component';
import { HoenComponent } from './hoen/hoen.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { SingleWordUpperCasePipe } from './singleuppercase.pipe';
import { SinnohComponent } from './sinnoh/sinnoh.component';
import { UnovaComponent } from './unova/unova.component';
import { KalosComponent } from './kalos/kalos.component';
import { AlolaComponent } from './alola/alola.component';
import { FilterPipe } from './filter.pipe';
import { FacebookModule } from 'ngx-facebook';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoadingComponentSpinnerComponent } from './loading-component-spinner/loading-component-spinner.component';
import { BasicHightLightDirective } from './basic-hightlight.directive';
import { FeedbackComponent } from './feedback/feedback.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'kanto', component: KantoComponent, children: [
    { path: ':id', component: PokemonDetailComponent }
  ] },
  { path: 'johto', component: JohtoComponent, children: [
    { path: ':id', component: PokemonDetailComponent }
  ] },
  { path: 'hoen', component: HoenComponent, children: [
    { path: ':id', component: PokemonDetailComponent }
  ] }, 
  { path: 'sinnoh', component: SinnohComponent, children: [
    { path: ':id', component: PokemonDetailComponent }
  ]}, 
  { path: 'unova', component: UnovaComponent, children: [
    { path: ':id', component: PokemonDetailComponent }
  ]}, {
    path: 'kalos', component: KalosComponent, children: [
      {path: ':id', component: PokemonDetailComponent }
    ]}, 
  { path: 'alola', component: AlolaComponent, children: [
    { path: ':id', component: PokemonDetailComponent }
  ]},
  { path: 'feedback', component: FeedbackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    KantoComponent,
    JohtoComponent,
    HoenComponent,
    PokemonDetailComponent,
    SingleWordUpperCasePipe,
    SinnohComponent,
    UnovaComponent,
    KalosComponent,
    AlolaComponent,
    FilterPipe,
    HomeComponent,
    AboutComponent,
    LoadingComponentSpinnerComponent,
    BasicHightLightDirective,
    FeedbackComponent    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FacebookModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
