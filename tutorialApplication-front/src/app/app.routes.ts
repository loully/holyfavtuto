import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'tutorials',
        pathMatch:'full'
    },
    {
        path:'tutorials',
        children: [{
            path:'',
            loadComponent: () => import('./components/tutorial-list/tutorial-list.component').then(c => c.TutorialListComponent)
        }, {
            path:'tutorials/:id',
            loadComponent: () => import('./components/tutorial-details/tutorial-details.component').then(c => c.TutorialDetailsComponent)
        }]
    },
    {
        path:'add',
        loadComponent: () => import('./components/add-tutorial/add-tutorial.component').then(c => c.AddTutorialComponent)
    }
];
