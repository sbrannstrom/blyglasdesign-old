import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenoveringPageRoutingModule } from './renovering-routing.module';

import { RenoveringPage } from './renovering.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		RenoveringPageRoutingModule
	],
	declarations: [RenoveringPage]
})
export class RenoveringPageModule { }
