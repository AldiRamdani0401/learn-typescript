// ** Version 1 ** //
// export enum CustomerType {
//     REGULER,
//     GOLD,
//     PLATINUM
// }

// export type Customer = {
//     id: number;
//     name: string;
//     type: CustomerType;
// }

// ** Version 2 ** //
export enum CustomerType {
    REGULER = 'REGULER',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM'
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}