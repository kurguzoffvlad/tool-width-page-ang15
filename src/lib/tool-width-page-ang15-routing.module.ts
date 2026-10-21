import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ToolWidthPageAng15Component} from './tool-width-page-ang15.component';

const routes: Routes = [
	{
		path: '',
		component: ToolWidthPageAng15Component,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ToolWidthPageAng15RoutingModule {
}
