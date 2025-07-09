import {Category} from "./category";

export class Tutorial {
    id?:any;
    title?:string;
    description?:string;
    urlImg?:string;
    category?:Category

    constructor(init?:Partial<Tutorial>) {
        Object.assign(this, init);
    }

}
