import { Config } from "./Config";
import { NotesReference } from "./NotesReference";
import { Assignment } from "./Assignment";

export class ClassPeriod extends Config {
    private _name: string;
    private _classNotes: NotesReference[];
    private _assignments: Assignment[];

    constructor({ name, classNotes, assignments }:
        { name: string, classNotes: string[], assignments: string[] }) {
        super();

        if (!name){
            this.throwWarning("Warning: No name for class period")
        }

        this._name = name
        this._classNotes = classNotes.map((classNote: any) => new NotesReference(classNote))
        this._assignments = assignments.map((assignment: any) => new Assignment(assignment))
    }

    public get name(){
        return this._name
    }

    public get classNotes(){
        return this._classNotes
    }

    public get assignments(){
        return this._assignments
    }
}