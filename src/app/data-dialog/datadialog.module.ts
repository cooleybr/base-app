import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import { DataDialogComponent } from './datadialog.component';
import { DataTableComponent } from './data-table.component';
import { DataImportComponent } from './data-import.component';

@NgModule({
    imports: [
        CommonModule,
        DynamicDialogModule,
        ToastModule,
        TableModule,
        ButtonModule,
	TabViewModule
    ],
    declarations: [
        DataDialogComponent, DataTableComponent, DataImportComponent
    ],
    entryComponents: [
        DataDialogComponent, DataTableComponent, DataImportComponent
    ]
})
export class DataDialogModule {}
