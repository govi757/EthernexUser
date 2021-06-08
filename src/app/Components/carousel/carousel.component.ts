import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slideIndex = 0;
  constructor() { }

  ngOnInit() {
    // this.showSlides(1)
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.showSlides( n);
  }
  showSlides(n) {
    var i;
    var slides: any = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        (slides[i]).style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
  }
}
