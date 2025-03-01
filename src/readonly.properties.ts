export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nib?: string;
    readonly npwp?: string;
}

export type Buyer = {
    id: number;
    name: string;
    address?: string;
    readonly nib?: string;
    readonly npwp?: string;
}