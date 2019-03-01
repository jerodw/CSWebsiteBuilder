export class Resource{
    static DEFAULT_DATE = new Date();
    title: string;
    link: string;
    avaliableDate: Date;

    constructor(title:string, link:string, avaliableDate = Resource.DEFAULT_DATE){
        this.title = title;
        this.link = link;
        // the date that this resource will be viewable
        this.avaliableDate = avaliableDate;
    }
}