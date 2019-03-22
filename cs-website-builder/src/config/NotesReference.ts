import { Config } from './Config';
import { FileReference } from "./FileReference";

// TODO Add ability to handle a directory rather than list each file explicitly
export class NotesReference extends Config {
    title: string;
    fileReference: FileReference
    availableDate: Date

    constructor({title, fileReference, availableDate = null}:
         {title: string, fileReference: string, availableDate: string}) {
        super();

        if (!title){
            this.throwError("Error: Must supply title to notes!")
        }
        
        this.title = title;
        this.fileReference = new FileReference(fileReference);    
        this.availableDate = availableDate ? new Date(availableDate) : new Date();
    }
}