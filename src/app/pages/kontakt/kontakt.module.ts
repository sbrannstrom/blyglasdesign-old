import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KontaktPageRoutingModule } from './kontakt-routing.module';

import { KontaktPage } from './kontakt.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		KontaktPageRoutingModule
	],
	declarations: [KontaktPage]
})
export class KontaktPageModule { }
