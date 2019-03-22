import { Config } from "./Config";
import { NotesReference } from "./NotesReference";
import { Assignment } from "./Assignment";

export class ClassPeriod extends Config {
    private _title: string;
    private _classNotes: NotesReference[];
    private _assignments: Assignment[];

    constructor({ title, classNotes, assignments }:
        { title: string, classNotes: string[], assignments: string[] }) {
        super();

        if (!title){
            this.throwWarning("Warning: No title for class period")
        }

        this._title = title
        this._classNotes = classNotes.map((classNote: any) => new NotesReference(classNote))
        this._assignments = assignments.map((assignment: any) => new Assignment(assignment))
    }

    public get title(){
        return this._title
    }

    public get classNotes(){
        return this._classNotes
    }

    public get assignments(){
        return this._assignments
    }
}