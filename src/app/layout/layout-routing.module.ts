import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AuthGuard} from "../shared/guard/auth.guard";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' , canActivate: [AuthGuard] },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' , canActivate: [AuthGuard] },
            { path: 'forms', loadChildren: './form/form.module#FormModule' , canActivate: [AuthGuard] },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' , canActivate: [AuthGuard] },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' , canActivate: [AuthGuard] },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' , canActivate: [AuthGuard] },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' , canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
