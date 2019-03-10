import { FileReference } from "./FileReference";
import { Grade } from "./Grade";

export class Policies {
    policyBody: FileReference;
    gradeScale: Grade[];

    constructor(policyBody: FileReference, gradeScale: Grade[]){
            this.policyBody = policyBody;
            this.gradeScale = gradeScale
        }
}