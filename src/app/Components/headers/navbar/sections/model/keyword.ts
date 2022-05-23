export interface Keyword{
    id?:string;
    keyword?:string;
    frequency?:string;
    section?:string;
    bookmark?:boolean;
}


export interface Bookmark{
    id?:string;
    section?:string;
    desc?:string;
    bookmark?:boolean;
}