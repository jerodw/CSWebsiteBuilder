import { Config } from './Config';

export class OfficeHour extends Config {
    private _dayOfWeek: DayOfWeek;
    private _startHour: number;
    private _stopHour: number;
    

    constructor({dayOfWeek, startHour, stopHour}: {dayOfWeek: string, startHour: number, stopHour: number}) {
        super();
        switch(dayOfWeek) {
            case DayOfWeek.Monday:
                this.dayOfWeek = DayOfWeek.Monday;
                break;
            case DayOfWeek.Tuesday:
                this.dayOfWeek = DayOfWeek.Tuesday;
                break;
            case DayOfWeek.Wednesday:
                this.dayOfWeek = DayOfWeek.Wednesday;
                break;
            case DayOfWeek.Thursday:
                this.dayOfWeek = DayOfWeek.Thursday;
                break;
            case DayOfWeek.Friday:
                this.dayOfWeek = DayOfWeek.Friday;
                break;
            case DayOfWeek.Saturday:
                this.dayOfWeek = DayOfWeek.Saturday;
                break;
            case DayOfWeek.Sunday:
                this.dayOfWeek = DayOfWeek.Sunday;
                break;
            default:
                this.throwError(`Error: Invalid day ${dayOfWeek} with hours startHour ${startHour} and stopHour ${stopHour}`);
        }

        if (startHour > stopHour) {
            this.throwWarning(`Warning: startHour (${startHour}) is greater than stopHour (${stopHour}) on day ${dayOfWeek}, switching them`);
            this.startHour = stopHour;
            this.stopHour = startHour;
        } else if (startHour === stopHour) {
            this.throwError(`Error: startHour and stopHour are the same for day ${dayOfWeek} and hour ${startHour}`);
        } else {
            this.startHour = startHour;
            this.stopHour = stopHour;
        }
    }

    public get dayOfWeek(): DayOfWeek {
        return this._dayOfWeek;
    }
    
    public set dayOfWeek(value: DayOfWeek) {
        this._dayOfWeek = value;
    }

    public get startHour(): number {
        return this._startHour;
    }

    public set startHour(value: number) {
        this._startHour = value;
    }

    public get stopHour(): number {
        return this._stopHour;
    }

    public set stopHour(value: number) {
        this._stopHour = value;
    }
}

enum DayOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}