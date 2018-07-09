import { NgModule } from '@angular/core';

import { Prueba2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Prueba2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Prueba2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Prueba2SharedCommonModule {}
