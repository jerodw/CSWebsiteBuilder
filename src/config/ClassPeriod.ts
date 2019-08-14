import { Config } from "./Config";
import { NotesReference } from "./NotesReference";
import { Assignment } from "./Assignment";
import { OtherLink } from "./OtherLink";

export class ClassPeriod extends Config {
    private _title: string;
    private _date: Date;
    private _classNotes: NotesReference[];
    private _assignments: Assignment[];
    private _otherLinks: OtherLinks[];

    constructor({ title, date, classNotes = [], assignments = [], otherLinks = [] }:
        { title: string, date: string, classNotes: string[], assignments: string[], otherLinks: string[]}) {
        super();

        if (!title) {
            this.throwError("Erro: No title for class period")
        }
        if (!date) {
            this.throwError("Error: No date for class period")
        }


        this._title = title
        this._date = new Date(date);
        this._classNotes = classNotes.map((classNote: any) => new NotesReference(classNote))
        this._assignments = assignments.map((assignment: any) => new Assignment(assignment))
        this._otherLinks = otherLinks.map((otherLink: any) => new OtherLink(otherLink))
    }

    public get title() {
        return this._title
    }

    public get date(){
        return this._date;
    }

    public get classNotes() {
        return this._classNotes
    }

    public get assignments() {
        return this._assignments
    }

    public get otherLinks() {
      return this._otherLinks
    }
}
