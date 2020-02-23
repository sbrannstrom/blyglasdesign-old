import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		MatDividerModule,
		FlexLayoutModule,
		AboutPageRoutingModule
	],
	declarations: [AboutPage]
})
export class AboutPageModule { }
