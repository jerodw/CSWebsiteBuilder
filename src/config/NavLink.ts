import { Config } from "./Config";

export class NavLink extends Config{
    title: string;
    templateRef: string;
    filename: string;

    constructor({title, templateRef, filename} : {title:string, templateRef: string, filename: string}){
        super();

        if (!title || !templateRef || !filename){
            this.throwError("Error setting up navlink: " + title ? title : "");
        }

        this.title = title;
        this.templateRef = templateRef;
        this.filename = filename;
    }
}