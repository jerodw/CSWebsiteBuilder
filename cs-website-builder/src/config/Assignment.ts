import { Config } from './Config';
import { FileReference } from "./FileReference";

export class Assignment extends Config {
    bodyReference: FileReference
    scriptReference: FileReference
    avalivableDate: Date

    constructor({bodyReference, scriptReference = null, availableDate = null}:
         {bodyReference: string, scriptReference: string, availableDate: string}) {
        super();
        this.bodyReference = new FileReference(bodyReference);
        this.scriptReference = scriptReference ? new FileReference(scriptReference) : null;
        this.avalivableDate = availableDate ? new Date(availableDate) : new Date();
    }
}