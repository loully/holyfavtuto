export class Tutorial {
    id?:any;
    title?:string;
    description?:string;
    urlImg?:string;

    constructor(init?:Partial<Tutorial>) {
        Object.assign(this, init);
    }

}
