import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RatingComponent } from './about/rating/rating.component';
import { FeedbackComponent } from './about/feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent,children : [{
        path:"rating",loadComponent : () => import('./about/rating/rating.component').then((a) => a.RatingComponent)
    },
{path:"feedback",loadComponent : () => import('./about/feedback/feedback.component').then((a)=> a.FeedbackComponent)}]},
{path:"contactus",loadComponent : ()=> import('./contact/contact.component').then((a) => a.ContactComponent)},
{path:"reactform", loadComponent : () => import('./reactive-form1/reactive-form1.component').then((a) => a.ReactiveForm1Component)},
{path:"reactform2", loadComponent:()=> import('./reactive-form2/reactive-form2.component').then((a)=> a.ReactiveForm2Component)}
];
