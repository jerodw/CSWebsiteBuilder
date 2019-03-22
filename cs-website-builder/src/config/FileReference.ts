import { Config } from './Config';
import fs from 'fs';

export class FileReference extends Config {
    static basePath: string;
    filePath: string;

    constructor(filePath: string){
        super();
         // If the path is a URL, don't check if it's a valid filepath in the file system
        if (filePath.includes("http") == false) {
            if (fs.existsSync(`${FileReference.basePath}/${filePath}`) == false) {
                this.throwError(`Error: File ${filePath} does not exist`);
            }  
        }
        
        this.filePath = filePath;
    }
}