import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/home';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public gallery: Gallery[];
  constructor() {
    this.gallery = [{
      image: {
        src: '../../../assets/images/guitar1.jpg',
        alt: 'Guitar 1',
      },
      title: 'BODEN PLINI EDITION NECK-THRU NATURAL',
      price: '€3,395.00',
    },
      {
        image: {
          src: '../../../assets/images/guitar2.jpg',
          alt: 'Guitar 2',
        },
        title: 'BODEN ORIGINAL NX 8 EARTH',
        price: '€2,599.00',
      },
      {
        image: {
          src: '../../../assets/images/guitar3.jpg',
          alt: 'Guitar 3',
        },
        title: 'BODEN MASVIDALIEN COSMO',
        price: '€2,495.00',
      },
      {
        image: {
          src: '../../../assets/images/guitar4.jpg',
          alt: 'Guitar 4',
        },
        title: 'B0DEN STANDARD 7 MAPLE',
        price: '€1,750.00',
      },
      {
        image: {
          src: '../../../assets/images/guitar5.jpg',
          alt: 'Guitar 5',
        },
        title: 'BODEN STANDARD 8 MAPLE FLAME',
        price: '€1,850.00',
      },
      {
        image: {
          src: '../../../assets/images/guitar6.jpg',
          alt: 'Guitar 6',
        },
        title: 'BODEN STANDARD 6 MAPLE QUILT',
        price: '€1,650.00',
      },
      {
        image: {
          src: '../../../assets/images/guitar7.jpg',
          alt: 'Guitar 7',
        },
        title: 'BODEN METAL 6 NECK-THRU PEARL',
        price: '€2,695.00',
      },
      {
        image: {
          src: '../../../assets/images/guitar8.jpg',
          alt: 'Guitar 8',
        },
        title: 'SÄLEN CLASSIC TRANS BUTTERSCOTCH',
        price: '€1,895.00',
      },
      {
        image: {
          src: '../../../assets/images/guitar9.jpg',
          alt: 'Guitar 9',
        },
        title: 'BOLDEN CLASSIC TRANS BUTTERSCOTCH',
        price: '€1,695.00',
      },
    ]
    }


  ngOnInit(): void {}

  }