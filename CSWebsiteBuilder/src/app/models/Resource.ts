export class Resource{
    title: string;
    downloadLink: string;
    avaliableDate: Date;

    constructor(title:string, downloadLink:string, avaliableDate = new Date()){
        this.title = title;
        this.downloadLink = downloadLink;
        this.avaliableDate = avaliableDate;
    }
}