export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    amount: number;
    selected?: boolean;
    configure: ProductConfig;
}

export interface ProductConfig{
    screen: string;
    photo: string;
    battery: string;
    cpu: string;
}
