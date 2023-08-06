import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  counter = 0;
  slides = [
    {
      image: 'https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/216145527_1003444840393246_645281431707052769_n.jpg?stp=dst-jpg_s600x600&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0_Tm2hkZalkAX_XWiCw&_nc_ht=scontent.floh4-1.fna&oh=00_AfCceY8uoFLmdE83AV4gmmG45hKDcNrj-8LaQnRdid33bA&oe=64D34887',
      text: 'La Fundacion Ciudadanos en Acción ...'
    },
    {
      image: 'https://scontent.floh4-1.fna.fbcdn.net/v/t1.6435-9/68805466_521870155217386_4344211411036012544_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PfdnJRy2GvwAX-SqP2z&_nc_ht=scontent.floh4-1.fna&oh=00_AfAaz4vt9wDmjNc96VQoGTBdP5I_jybKu2_Wc2cr1icebA&oe=64F62E6D',
      text: 'Seguimos trabajando por una Cuenca hermosa...'
    },
    {
      image: 'https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/250125707_1075465343191195_6611133795524330446_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-emxhKXTVUwAX_Nn1Ya&_nc_ht=scontent.floh4-1.fna&oh=00_AfA5Vh2w5XfsFPUKGsbkywsFmIoErf8utxU_KpeCD3cBvA&oe=64D39C94',
      text: 'Nuestros técnicos de la Fundacion Ciudadanos en Acción...'
    }
    // Agrega más objetos de diapositivas si es necesario
  ];

  prevSlide(): void {
    this.counter = (this.counter - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.counter = (this.counter + 1) % this.slides.length;
  }
}
