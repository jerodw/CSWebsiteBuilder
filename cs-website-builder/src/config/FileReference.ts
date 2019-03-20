import { Config } from './Config';
import fs from 'fs';

export class FileReference extends Config {
    filePath: string;

    constructor(filePath: string){
        super();
        if (filePath.includes("http") == false){
            if (fs.existsSync(`templates/${filePath}`) == false) {
                this.throwError(`Error: File ${filePath} does not exist`);
            } 
        }
        
        this.filePath = filePath;
    }
}