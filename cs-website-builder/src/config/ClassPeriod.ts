import { Config } from "./Config";
import { NotesReference } from "./NotesReference";
import { Assignment } from "./Assignment";

export class ClassPeriod extends Config {
    private _title: string;
    private _date: Date;
    private _classNotes: NotesReference[];
    private _assignments: Assignment[];

    constructor({ title, date, classNotes = [], assignments = [] }:
        { title: string, date: string, classNotes: string[], assignments: string[] }) {
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
}