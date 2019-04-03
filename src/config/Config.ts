export class Config {
    public static NO_ERRORS:boolean = false;

    protected throwError(message:string):void {
        if (Config.NO_ERRORS) {
            this.throwWarning(message);
        } else {
            throw new Error(message);
        }
    }

    protected throwWarning(message:string):void {
        console.warn(message);
    }
}