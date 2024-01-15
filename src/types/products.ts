import {Icon} from "next/dist/lib/metadata/types/metadata-types";

export type Product = {
    id: number;
    name: string;
    price: number;
}

interface AdvancedProduct extends Product {
    description: string;
    quantity?: number;
    rating: Badge;
    brand: Brand;
    sale?: Sale; // badges on right side - discounts, sold out
    statuses: Badge[]; // badges on left side
    pictures: Picture[]; // turn into carousel
    options?: Badge[]; // below price to show colour/size options
}

export type Brand = {
    name: string;
}

export type Sale = {
    discount: number;
    expires: Date;
}

export type Badge = {
    graphic: Icon,
    size: string,
    text: string,
    theme: string
}

export type Picture = {
    id: number;
    url: string;
    description: string;
}