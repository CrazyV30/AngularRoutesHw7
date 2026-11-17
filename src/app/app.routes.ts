import { Routes } from '@angular/router';
import { CityComp } from './city-comp/city-comp';
import { ReactiveForm } from './reactive-form/reactive-form';
import { SculptureComp } from './sculpture-comp/sculpture-comp';
import { SightseeingComp } from './sightseeing-comp/sightseeing-comp';
import { PhotoCityComp } from './photo-city-comp/photo-city-comp';

export const routes: Routes = [
    {path:'', component:ReactiveForm},
    {path:'city', component:CityComp},
    {path:'city/scupture', component:SculptureComp},
    {path:'city/sightseeing', component:SightseeingComp},
    {path:'city/photo', component:PhotoCityComp},
];
