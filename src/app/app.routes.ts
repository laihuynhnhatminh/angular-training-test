import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('./modules/buttons/')).routes,
      },
    ],
  },
];
