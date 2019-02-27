import { Resource } from "./Resource";

export class ClassValue {
    date: Date;
    title: string;
    resources: Resource[]

    constructor(date: Date, title: string, resources: Resource[]){
        this.date = date;
        this.title = title;
        this.resources = resources;
    }
}