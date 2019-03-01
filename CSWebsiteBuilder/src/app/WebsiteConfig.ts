import { NavigationLink } from "./models/NavigationLink";
import { ClassValue } from "./models/ClassValue";
import { Resource } from "./models/Resource";
import { TA } from "./models/TA";
import { TimeSlot } from "./models/TimeSlot";
import { WeekDay } from "@angular/common";

export class WebsiteConfig {
    courseName: string;
    navigationLinks: NavigationLink[];
    resourceFilePath: string;
    classValues: ClassValue[];
    
    courseTAs: TA[];

    constructor() {
        this.courseName = "CS202";
        this.navigationLinks = [
            new NavigationLink("Schedule", "/schedule"),
            new NavigationLink("TA Information", "/ta-information"),
        ];
        this.resourceFilePath = "src/assets/"
        this.classValues = [
            new ClassValue(new Date(2019, 1, 25), "What is Software Engineering?", [
                new Resource("What is Software Engineering.pptx", "/What is Software Engineering/What is Software Engineering_.pptx"),
            ]),
            new ClassValue(new Date(2019, 1, 26),"UI Design Basics",[
                new Resource("Pre-Class Assignment", "/UI Design Basics/Pre-Class Assignments.pdf"),
                new Resource("In-Class Assignment", "UI Design Basics.pdf", new Date(2020, 1, 27))
            ]),
        ]
        this.courseTAs = [
            new TA(
                "Ryan", "Remer", null, "ryandremer@gmail.com",
                [
                    new TimeSlot(WeekDay.Tuesday, 12, 17),
                    new TimeSlot(WeekDay.Thursday, 12, 17),
                ]
            )
        ]
    }
}