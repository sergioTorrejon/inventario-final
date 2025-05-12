import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AppMaterialModule } from 'src/app/app-material-module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CatalogosComponent } from './catalogos.component';
import { DialogInsertComponent } from './dialog-insert/dialog-insert.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { DialogDocumentComponent } from './dialog-document/dialog-document.component';

@NgModule({
    declarations: [CatalogosComponent, DialogInsertComponent, DialogUpdateComponent, DialogDocumentComponent],
    exports: [],
    bootstrap: [CatalogosComponent],
    imports: [
        ReactiveFormsModule,
        PdfViewerModule,
        FormsModule,
        CommonModule,
        FlexLayoutModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        AppMaterialModule,
        ComponentsModule,
        RouterModule.forChild([
            {
                path: '',
                component: CatalogosComponent
            },
        ])
    ]
})
export class CatalogosModule { }
