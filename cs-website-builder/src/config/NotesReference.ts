import { Config } from './Config';
import { FileReference } from "./FileReference";

// TODO Add ability to handle a directory rather than list each file explicitly
export class NotesReference extends Config {
    fileReference: FileReference
    availableDate: Date

    constructor({fileReference, availableDate = null}:
         {fileReference: string, availableDate: string}) {
        super();
        if (availableDate == null){
            this.availableDate = new Date();
        } else {
            this.availableDate = new Date(availableDate);
        }
        
        this.fileReference = new FileReference(fileReference);    
    }
}