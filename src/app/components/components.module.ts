import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
	MatDividerModule,
	MatDatepickerModule,
	MatButtonModule,
	MatSelectModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';


@NgModule({
	declarations: [
		HeaderComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatDividerModule,
		MatDatepickerModule,
		MatSelectModule,
		IonicModule.forRoot(),
	],
	exports: [
		HeaderComponent,
	]
})
export class ComponentsModule { }
