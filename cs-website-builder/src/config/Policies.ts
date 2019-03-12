import { FileReference } from "./FileReference";
import { Grade } from "./Grade";
import { Config } from "./Config";

export class Policies extends Config {
    policyBody: FileReference;
    gradeScale: Grade[];

    constructor({policyBody, gradeScale}: {policyBody: string, gradeScale: Array<any>}){
            super();
            this.policyBody = new FileReference(policyBody);
            this.gradeScale = gradeScale.map((grade: any) => new Grade(grade));
        }
}