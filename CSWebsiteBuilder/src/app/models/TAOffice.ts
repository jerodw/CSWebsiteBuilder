export class TAOffice {
    location: string;
    startHour: number;
    stopHour: number;

    // the start and stop hours are for the table on the ta-information page (values 0-23)
    constructor(location:string, startHour:number, stopHour:number){
        this.location = location;
        this.startHour = startHour;
        this.stopHour = stopHour
    }
}