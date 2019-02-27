import { NavigationLink } from "./NavigationLink";
import { ClassValue } from "./ClassValue";
import { Resource } from "./Resource";

export class WebsiteConfig {
    courseName: string
    navigationLinks: NavigationLink[]
    classValues: ClassValue[]

    constructor() {
        this.courseName = "CS202";
        this.navigationLinks = [
            new NavigationLink("TA Information", "/ta-information"),
            new NavigationLink("Schedule", "/schedule")
        ];
        this.classValues = [
            new ClassValue(new Date(2019, 1, 26),"UI Design Basics",[
                new Resource("Pre-Class Assignment", "UI Design Basics.pdf"),
                new Resource("In-Class Assignment", "UI Design Basics.pdf", new Date(2019, 1, 27))
            ]),
            new ClassValue(new Date(2019, 1, 28),"UI Design Basics",[
                new Resource("Pre-Class Assignment", "UI Design Basics.pdf"),
                new Resource("Post-Class Assignment", "UI Design Basics.pdf")
            ]),
        ]
    }
}