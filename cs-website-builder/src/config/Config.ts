export class Config {
    protected throwError(message:string):void {
        throw new Error(message);
    }

    protected throwWarning(message:string):void {
        console.warn(message);
    }
}