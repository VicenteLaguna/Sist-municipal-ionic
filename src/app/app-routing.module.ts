import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'taller-adigital',
    loadChildren: () => import('./pages/taller-adigital/taller-adigital.module').then( m => m.TallerAdigitalPageModule)
  },
  {
    path: 'taller-cocina',
    loadChildren: () => import('./pages/taller-cocina/taller-cocina.module').then( m => m.TallerCocinaPageModule)
  },
  {
    path: 'taller-yoga',
    loadChildren: () => import('./pages/taller-yoga/taller-yoga.module').then( m => m.TallerYogaPageModule)
  },
  {
    path: 'taller-ceramica',
    loadChildren: () => import('./pages/taller-ceramica/taller-ceramica.module').then( m => m.TallerCeramicaPageModule)
  },
  {
    path: 'taller-pintura',
    loadChildren: () => import('./pages/taller-pintura/taller-pintura.module').then( m => m.TallerPinturaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
