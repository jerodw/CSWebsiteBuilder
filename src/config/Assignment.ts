import { Config } from './Config';
import { FileReference } from "./FileReference";

export class Assignment extends Config {
    title: string;
    bodyReference: FileReference
    scriptReference: FileReference
    availableDate: Date

    constructor({title, bodyReference, scriptReference = null, availableDate = null}:
         {title, bodyReference: string, scriptReference: string, availableDate: string}) {
        super();
        if (!title || title == null){
            this.throwError("Error: Must supply title to assignment!")
        }
        this.title = title;
        this.bodyReference = new FileReference(bodyReference);
        this.scriptReference = scriptReference ? new FileReference(scriptReference) : null;
        this.availableDate = availableDate ? new Date(availableDate) : new Date();
    }
}