import { FileReference } from "./FileReference";

export class NotesReference {
    fileReference: FileReference
    avalivableDate: Date

    constructor(fileReference: FileReference, avalivableDate: Date = null){
        if (avalivableDate == null){
            avalivableDate = new Date();
        }
        this.fileReference = fileReference;
        this.avalivableDate = avalivableDate;
    }
}