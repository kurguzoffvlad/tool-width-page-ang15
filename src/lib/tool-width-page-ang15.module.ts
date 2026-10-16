import {NgModule} from '@angular/core';

import {ToolWidthPageAng15Component} from './tool-width-page-ang15.component';
import {ToolWidthPageAng15RoutingModule} from "./tool-width-page-ang15-routing.module";


@NgModule({
    declarations: [
        ToolWidthPageAng15Component
    ],
    imports: [ToolWidthPageAng15RoutingModule],
    exports: [
        ToolWidthPageAng15Component
    ]
})
export class ToolWidthPageAng15Module {
}
