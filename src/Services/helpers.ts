export interface ICard{
    _id:string;
    barcode:string;
    gym:string;
    subscription:number|Date
}

export interface IGym{
    _id:string;
    address:string;
    email:string;
    name:string;
}

export interface NewCardAdd{
    _id:string;
    barcode:string;
    user_id:string;
}