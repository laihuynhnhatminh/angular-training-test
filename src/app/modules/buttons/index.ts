import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'buttons',
    pathMatch: 'full',
  },
  {
    path: 'buttons',
    title: 'Buttons',
    loadComponent: async () =>
      (await import('./buttons.component')).ButtonsComponent,
  },
];
