export class GradeCutOff{
    grade:string;
    minPercent:number;
    maxPercent:number;
    constructor(grade, minPercent, maxPercent){
        this.grade = grade;
        this.minPercent = minPercent;
        this.maxPercent = maxPercent;
    }
}