import { Routes } from '@angular/router';
import { CityComp } from './city-comp/city-comp';
import { ReactiveForm } from './reactive-form/reactive-form';
import { SculptureComp } from './sculpture-comp/sculpture-comp';
import { SightseeingComp } from './sightseeing-comp/sightseeing-comp';
import { PhotoCityComp } from './photo-city-comp/photo-city-comp';
import { MounPhotoComp } from './moun-photo-comp/moun-photo-comp';
import { CathedralPhotoComp } from './cathedral-photo-comp/cathedral-photo-comp';
import { authGuardGuard } from './auth-guard-guard';


const Sightseeing:Routes=[
    {path:'moun',component:MounPhotoComp},
    {path:'cathedral',component:CathedralPhotoComp}
];

export const routes: Routes = [
    {path:'', component:ReactiveForm, canActivate:[authGuardGuard]},
    {path:'city', component:CityComp},
    {path:'city/scupture', component:SculptureComp},
    {path:'city/sightseeing', component:SightseeingComp, children:Sightseeing},
    {path:'city/photo', component:PhotoCityComp},
];
