import { Config } from './Config';

export class OfficeHour extends Config {
    private _dayOfWeek: DayOfWeek;
    private _startTime: string;
    private _stopTime: string;


    constructor({ dayOfWeek, startTime, stopTime }: { dayOfWeek: string, startTime: string, stopTime: string }) {
        super();

        if (!dayOfWeek || !startTime || !stopTime) {
            this.throwError("Office hours are incorrectly formatted and need a dayOfWeek, startTime, and stopTime")
        }

        switch (dayOfWeek) {
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
                this.throwError(`Error: Invalid day ${dayOfWeek}`);
        }

        if (!RegExp('^([0-9][0-9]?):[0-9][0-9](.*)$').test(startTime)) {
            this.throwError('Warning: "' + startTime + '" is not in correct format it must be hh:MM (am/pm)')
        }
        this.startTime = startTime;

        if (!RegExp('^([0-9][0-9]?):[0-9][0-9](.*)$').test(stopTime)) {
            this.throwError('Warning: ' + stopTime + ' is not in correct format it must be hh:MM (am/pm)')
        }
        this.stopTime = stopTime;
    }

    public isInOffice(dayOfWeek: DayOfWeek, time: string) {
        if (dayOfWeek != this._dayOfWeek) {
            return false;
        }

        const startHour = this.hourFromString(this.startTime)
        const stopHour = this.hourFromString(this.stopTime)
        const timeHour = this.hourFromString(time)

        return (startHour <= timeHour && timeHour < stopHour)
    }

    private hourFromString(time: string): number{
        let hour = Number.parseInt(time.substr(0, time.indexOf(':')))
        let minute = Number.parseInt(time.substr(time.indexOf(':') + 1, 2))

        if (hour != 12 && time.toLowerCase().includes('pm')){
            hour += 12;
        }

        if (minute >= 30){
            hour += 1;
        }

        return hour;
    }

    static toTimeString = (officeHour) => {
        return officeHour
    }

    public get dayOfWeek(): DayOfWeek {
        return this._dayOfWeek;
    }

    public set dayOfWeek(value: DayOfWeek) {
        this._dayOfWeek = value;
    }

    public get startTime(): string {
        return this._startTime;
    }

    public set startTime(value: string) {
        this._startTime = value;
    }

    public get stopTime(): string {
        return this._stopTime;
    }

    public set stopTime(value: string) {
        this._stopTime = value;
    }
}

export enum DayOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}