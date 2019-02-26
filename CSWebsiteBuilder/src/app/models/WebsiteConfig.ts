import { NavigationLink } from "./NavigationLink";

export class WebsiteConfig{
    courseName:string
    navigationLinks:NavigationLink[]

    constructor(){
        this.courseName = "CS202";
        this.navigationLinks = [
            new NavigationLink("TA Information", "/ta-information"),
            new NavigationLink("Schedule", "/schedule")
        ]
    }
}