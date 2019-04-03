import { Config } from './Config';

export class Grade extends Config {
    letter: string;
    percentLow: number;
    percentHigh: number;

    constructor({letter, percentLow, percentHigh}:
         {letter: string, percentLow: number, percentHigh: number}) {
        super();
        if (!letter || letter === '') {
            this.throwError(`Error: Missing letter for grade range: ${percentLow}-${percentHigh}`);
        }
        if (percentLow > percentHigh) {
            this.throwWarning('Warning: Percentages are in wrong order, switching them');
            this.percentHigh = percentLow;
            this.percentLow = percentHigh;
        } else if (percentHigh === percentLow) {
            this.throwError('Error: The high and low bounds are the same');
        } else if (percentHigh < 0 || percentLow < 0 || !percentHigh || !percentLow) {
            this.throwError(`Error: One or both percentages for ${letter} are below zero or otherwise invalid`);
        } else {
            this.percentLow = percentLow;
            this.percentHigh = percentHigh;
        }
        this.letter = letter;
    }
}