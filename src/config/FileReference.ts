import { Config } from './Config';
import * as fs from 'fs';
import * as path from 'path';

export class FileReference extends Config {
    static basePath: string;
    filePath: string;

    constructor(filePath: string){
        super();
         // If the path is a URL, don't check if it's a valid filepath in the file system
        if (filePath.includes("http") == false) {
            if (fs.existsSync(`${FileReference.basePath}/${filePath}`) == false) {
                this.throwError(`Error: File ${FileReference.basePath}/${filePath} does not exist`);
            }  
        }
        
        this.filePath = filePath.replace(/\/|\\/gs, path.sep);
    }
}