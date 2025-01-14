export class Tutorial {
    id?:any;
    title?:string;
    description?:string;
    published?:boolean;

    constructor(init?:Partial<Tutorial>) {
        Object.assign(this, init);
    }

}
