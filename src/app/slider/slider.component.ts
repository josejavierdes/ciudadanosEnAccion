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
      text: 'La Fundacion Ciudadanos en Acción conjuntamente con la Red Interuniversitaria de Investigación Feminista sobre el acoso sexual simultáneamente con  los departamentos de Derechos Humanos, Diseño, además de la participación de la carrera de Genero y Desarrollo de la universidad de Cuenca seguimos trabajando en la prevención del acoso sexual lo cual nos permitira mejorar nuestras políticas, tendientes en la búsqueda del bienestar y la seguridad de todos y todas.'
    },
    {
      image: 'https://scontent.floh4-1.fna.fbcdn.net/v/t1.6435-9/68805466_521870155217386_4344211411036012544_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PfdnJRy2GvwAX-SqP2z&_nc_ht=scontent.floh4-1.fna&oh=00_AfAaz4vt9wDmjNc96VQoGTBdP5I_jybKu2_Wc2cr1icebA&oe=64F62E6D',
      text: 'Seguimos trabajando por una Cuenca hermosa. Colectivo Ciudadanos en Acción sembrando todos los días las cosechas del mañana. "No daré reposo a mí alma, ni descanso a mí cuerpo"'
    },
    {
      image: 'https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/250125707_1075465343191195_6611133795524330446_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-emxhKXTVUwAX_Nn1Ya&_nc_ht=scontent.floh4-1.fna&oh=00_AfA5Vh2w5XfsFPUKGsbkywsFmIoErf8utxU_KpeCD3cBvA&oe=64D39C94',
      text: 'Nuestros técnicos de la  Fundacion Ciudadanos en Acción (CCA)  en conjunto con AFU, LIGA de la facultad de Medicina de la universidad de Cuenca brindaron talleres de defensa personal, además se capacitó sobre la prevención y puntos de encuentro seguro que sirve para salvaguardar nuestra integridad física-emocional'
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
