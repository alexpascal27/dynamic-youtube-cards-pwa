import {Product} from "@/types/products";

const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 12.99
    },
    {
        id: 2,
        name: 'Product 2',
        price: 23.99
    },
    {
        id: 3,
        name: 'Product 3',
        price: 34.99
    },
];

// Where we would input request too
export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Product[]): void; new(): any; }; }; }) {
    res.status(200).json(products);
}