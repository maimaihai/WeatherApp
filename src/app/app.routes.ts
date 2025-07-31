import { Routes } from '@angular/router';
import { Forecast } from './forecast/forecast';
import { StartPage } from './start-page/start-page';

export const routes: Routes = [
  { path: '', component: StartPage},
  {path: 'forecast', component: Forecast}
  
];
