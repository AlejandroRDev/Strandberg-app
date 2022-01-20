import { Image } from '../../../shared/models/shared';

export interface Header {
    image: Image;
    text: string[];
}

export interface Hero {
    title: string;
    text: string;
    filter: string[];

}

export interface Gallery {
    image: Image;
    title: string;
    price: string;
}

export interface Mode {
    text: string;
    position: boolean;
}

export interface Footer {
    text: string;
}