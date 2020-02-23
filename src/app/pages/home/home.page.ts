import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	// @ViewChild('slider', { static: false }) slider: IonSlides;
	@ViewChild(IonSlides, { static: false }) slides: IonSlides;

	slideOpts = {
		disabled: true,
		allowTouchMove: false
	};

	constructor() {
	}

	ngOnInit() {
		// this.slides.lockSwipes(true);
	}

}
