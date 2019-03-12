import { Config } from './Config';
import fs from 'fs';

export class FileReference extends Config {
    filePath: string;

    constructor(filePath: string){
        super();
        if (fs.existsSync(`templates/${filePath}`)) {
            this.filePath = filePath;
        } else {
            this.throwError(`Error: File ${filePath} does not exist`);
        }
    }
}