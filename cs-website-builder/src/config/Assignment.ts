import { FileReference } from "./FileReference";

export class Assignment {
    bodyReference: FileReference
    scriptReference: FileReference
    avalivableDate: Date

    constructor(bodyReference: FileReference, scriptReference: FileReference = null, avalivableDate: Date = null) {
        if (avalivableDate == null) {
            avalivableDate = new Date();
        }
        this.bodyReference = bodyReference;
        this.scriptReference = scriptReference;
        this.avalivableDate = avalivableDate;
    }
}