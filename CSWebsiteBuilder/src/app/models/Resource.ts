export class Resource{
    static DEFAULT_DATE = new Date();
    title: string;
    downloadLink: string;
    avaliableDate: Date;

    constructor(title:string, downloadLink:string, avaliableDate = Resource.DEFAULT_DATE){
        this.title = title;
        this.downloadLink = downloadLink;
        // the date that this resource will be viewable
        this.avaliableDate = avaliableDate;
    }
}