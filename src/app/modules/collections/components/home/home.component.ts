import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const images = [
  'assets/images/slider1.jpeg',
  'assets/images/slider2.jpeg',
  'assets/images/slider3.jpeg',
  'assets/images/slider4.jpeg',
  'assets/images/slider5.jpeg',
  'assets/images/slider6.jpeg',
  'assets/images/slider7.jpeg',
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: 'assets/images/slider1.jpeg',
      title: 'Sanatan Unveiled:',
      description: 'Collectibles of Eternal Essence',
      buttonText: 'Shop Now',
      buttonLink: '#',
    },
    {
      image: 'assets/images/slider2.jpeg',
      title: 'Divine Artifacts',
      description: 'Explore Timeless Beauty',
      buttonText: 'Discover',
      buttonLink: '#',
    },
    {
      image: 'assets/images/slider5.jpeg',
      title: 'Mystic Charms',
      description: 'Enhance Your Spiritual Journey',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    {
      image: 'assets/images/slider6.jpeg',
      title: 'Mystic Charms',
      description: 'Enhance Your Spiritual Journey',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    {
      image: 'assets/images/slider7.jpeg',
      title: 'Mystic Charms',
      description: 'Enhance Your Spiritual Journey',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
  ];

  items = [
    {
      title: 'Pavan Sut Hanuman ji Antique Gold',
      image: 'assets/images/card3.jpeg',
      hoverImage: 'assets/images/card4.jpeg',
      originalPrice: 1999,
      salePrice: 999,
      rating: 4.5,
    },
    {
      title: 'Shiva-The Protector Blue',
      image: 'assets/images/card5.jpeg',
      hoverImage: 'assets/images/card6.jpeg',
      originalPrice: 2999,
      salePrice: 999,
      rating: 4.7,
    },
    {
      title: 'Shiva-The Protector Antique Gold',
      image: 'assets/images/card7.jpeg',
      hoverImage: 'assets/images/card8.jpeg',
      originalPrice: 2999,
      salePrice: 999,
      rating: 4.3,
    },
    {
      title: 'King of Sarangpur Lord Hanuman ji Antique Gold',
      image: 'assets/images/card9.jpeg',
      hoverImage: 'assets/images/card10.jpeg',
      originalPrice: 2999,
      salePrice: 999,
      rating: 4.7,
    },
    {
      title: 'Ram Lalla Ayodhya Ram Mandir Murti Black',
      image: 'assets/images/card11.jpeg',
      hoverImage: 'assets/images/card12.jpeg',
      originalPrice: 3999,
      salePrice: 299,
      rating: 4.5,
    },
    {
      title: 'King of Sarangpur Lord Hanuman ji Orange',
      image: 'assets/images/card13.jpeg',
      hoverImage: 'assets/images/card14.jpeg',
      originalPrice: 2999,
      salePrice: 999,
      rating: 4.7,
    },
    {
      title: 'Pavan Sut Hanuman ji Black',
      image: 'assets/images/card15.jpeg',
      hoverImage: 'assets/images/card16.jpeg',
      originalPrice: 1999,
      salePrice: 999,
      rating: 5.3,
    },
    {
      title: 'King of Sarangpur Lord Hanuman ji Gold',
      image: 'assets/images/card18.jpeg',
      hoverImage: 'assets/images/card17.jpeg',
      originalPrice: 3999,
      salePrice: 1999,
      rating: 5.7,
    },
    {
      title: 'Shiva-The Protector Khaki',
      image: 'assets/images/card19.jpeg',
      hoverImage: 'assets/images/card20.jpeg',
      originalPrice: 4999,
      salePrice: 2999,
      rating: 5.3,
    },
  ];

  currentIndex: number = 0;
  autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 3 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }
}
