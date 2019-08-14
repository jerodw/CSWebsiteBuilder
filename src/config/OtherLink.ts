import { Config } from './Config';

export class OtherLink extends Config {
    title: string;
    url: string;
    availableDate: Date

    constructor({title, url, availableDate = null}:
         {title, url, availableDate: string}) {
        super();
        if (!title || title == null){
            this.throwError("Error: Must supply title to assignment!")
        }
        this.title = title;
        this.url = url;
        this.availableDate = availableDate ? new Date(availableDate) : new Date();
    }
}
