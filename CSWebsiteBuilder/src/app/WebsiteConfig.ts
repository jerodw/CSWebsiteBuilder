import { NavigationLink } from "./models/NavigationLink";
import { ClassValue } from "./models/ClassValue";
import { Resource } from "./models/Resource";
import { TA } from "./models/TA";
import { TimeSlot } from "./models/TimeSlot";
import { WeekDay } from "@angular/common";
import { TAOffice } from "./models/TAOffice";

export class WebsiteConfig {
    courseName: string;
    navigationLinks: NavigationLink[];
    resourceFilePath: string;
    classValues: ClassValue[];
    taOffice: TAOffice;
    courseTAs: TA[];

    constructor() {
        // name of the course you are teaching
        this.courseName = "CS202";

        // the links at the top of the website
        this.navigationLinks = [
            new NavigationLink("Schedule", "/schedule"),
            new NavigationLink("TA Information", "/ta-information"),
        ];

        // the relaive file path to resources
        this.resourceFilePath = "src/assets/"

        // the static resources that the students will need for each class
        this.classValues = [
            new ClassValue(new Date(2019, 1, 25), "What is Software Engineering?", [
                new Resource("What is Software Engineering.pptx", "/What is Software Engineering/What is Software Engineering_.pptx"),
            ]),
            new ClassValue(new Date(2019, 1, 26),"UI Design Basics",[
                new Resource("Pre-Class Assignment", "/UI Design Basics/Pre-Class Assignments.pdf"),
                new Resource("In-Class Assignment", "UI Design Basics.pdf", new Date(2020, 1, 27))
            ]),
        ]

        // the information for the TA office
        this.taOffice = new TAOffice("1212 TMCB", 8, 17)

        // the information of the TAs for the class
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