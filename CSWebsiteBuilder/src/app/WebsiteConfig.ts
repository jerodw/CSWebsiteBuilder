import { NavigationLink } from "./models/NavigationLink";
import { ClassValue } from "./models/ClassValue";
import { Resource } from "./models/Resource";
import { TA } from "./models/TA";
import { TimeSlot } from "./models/TimeSlot";
import { WeekDay } from "@angular/common";
import { TAOffice } from "./models/TAOffice";
import { Professor } from "./models/Professor";
import { Announcement } from "./models/Announcement";
import { Policy } from "./models/Policy";
import { GradeCutOff } from "./models/GradingCutOff";

export class WebsiteConfig {
    courseName: string;
    courseProfessors: Professor[];
    navigationLinks: NavigationLink[];
    resourceFilePath: string;
    classValues: ClassValue[];
    taOffice: TAOffice;
    courseTAs: TA[];
    announcements: Announcement[];
    policies: Policy[];
    gradingScale: GradeCutOff[];

    constructor() {
        // name of the course you are teaching
        this.courseName = "CS202";

        // professors teaching the course
        this.courseProfessors = [
            new Professor(
                "Jerod", "Wilkerson",
                "https://cs.byu.edu/sites/default/files/styles/faculty_listing/public/pictures/picture-27467-1534965535.jpg?itok=kZC3pHdB",
                "email@email.com",
                "###-###-####",
                "By email",
                "Talmage ####",
                [
                    new TimeSlot(WeekDay.Monday, 15, 17),
                    new TimeSlot(WeekDay.Wednesday, 15, 17),
                    new TimeSlot(WeekDay.Friday, 15, 17),
                ]
            ),
            new Professor(
                "Mark", "Clement",
                "https://cs.byu.edu/sites/default/files/styles/faculty_listing/public/pictures/picture-17190-1456265954.png?itok=rweznO6J",
                "email@email.com",
                "###-###-####",
                "By email",
                "Talmage ####",
                [
                    new TimeSlot(WeekDay.Monday, 15, 17),
                    new TimeSlot(WeekDay.Friday, 15, 17),
                ]
            ),
        ]

        // the links at the top of the website
        this.navigationLinks = [
            new NavigationLink("Schedule", "/schedule"),
            new NavigationLink("TA Information", "/ta-information"),
            new NavigationLink("Policies", "/policies"),
        ];

        // the relaive file path to resources
        this.resourceFilePath = "src/assets/"

        // the static resources that the students will need for each class
        this.classValues = [
            new ClassValue(new Date(2019, 1, 25), "What is Software Engineering?", [
                new Resource("What is Software Engineering.pptx", "/What is Software Engineering/What is Software Engineering_.pptx"),
            ]),
            new ClassValue(new Date(2019, 1, 26), "UI Design Basics", [
                new Resource("Pre-Class Assignment", "/UI Design Basics/Pre-Class Assignments.pdf"),
                new Resource("In-Class Assignment", "UI Design Basics.pdf", new Date(2020, 1, 27))
            ]),
        ]

        // the information for the TA office
        this.taOffice = new TAOffice("1212 TMCB", 8, 17)

        // the information of the TAs for the class
        this.courseTAs = [
            new TA(
                "Ryan", "Remer",
                "http://1.bp.blogspot.com/-YrBGAA9oQDA/VT-GyJOBBqI/AAAAAAAAGeU/c1sJIi378SI/s1600/P4221212.JPG",
                "ryandremer@gmail.com",
                [
                    new TimeSlot(WeekDay.Tuesday, 12, 17),
                    new TimeSlot(WeekDay.Thursday, 12, 17),
                ]
            )
        ]

        // add announcements to put on the home page
        this.announcements = [
            new Announcement(
                "Welcome to class!",
                "<p>We hope you have a great semester. </p>"
            )
        ]

        //list the grade cut offs
        this.gradingScale = [
            new GradeCutOff("A", 93, 100),
            new GradeCutOff("A-", 90, 93),
            new GradeCutOff("B+", 87, 89),
            new GradeCutOff("B", 83, 86),
            new GradeCutOff("B-", 80, 82),
            new GradeCutOff("C+", 77, 79),
            new GradeCutOff("C", 73, 76),
            new GradeCutOff("C-", 70, 72),
            new GradeCutOff("D+", 67, 69),
            new GradeCutOff("D", 63, 66),
            new GradeCutOff("D-", 60, 62),
            new GradeCutOff("E", 0, 60),
        ]

        // add the polices that you have for your class
        this.policies = [
            new Policy(
                "Technology in Class",
                "We have learned by sad experience that technology is a major distraction to students in class, and prevents them from listening, participating, and learning as they should. Therefore, you may not use laptops, tablets, phones, or other technology during lecture. Notes may be taken using good old-fashioned paper and pen(cil). However, when you are working with your group or doing other non-lecture activities, you may use	your technology as needed."
            ),
            new Policy(
                "Honor Code Standards",
                "In keeping with the principles of the BYU Honor Code, students are expected to be honest in all of their academic work. Academic honesty means, most fundamentally, that any work you present as your own must in fact be your own work and not that of another. Violations of this principle may result in a failing grade in the course and additional disciplinary action by the university." +
                "<br>" +
                "Students are also expected to adhere to the Dress and Grooming Standards. Adherence demonstrates respect for yourself and others and ensures an effective learning and working environment. It is the university's expectation, and my own expectation in class, that each student will abide by all Honor Code standards. Please call the Honor Code Office at 422-2847 if you have questions about those standards."
            ),
            new Policy(
                "Harassment",
                "Harassment of any kind is inappropriate at BYU. Specifically, BYU's policy against sexual harassment extends not only to employees of the university but to students as well. If you encounter sexual harassment, gender-based discrimination, or other inappropriate behavior, please talk to your professor, contact the Equal Employment Office at 422-5895 or 367-5689, or contact the Honor Code Office at 422-2847."
            ),
            new Policy(
                "Disabilities",
                "BYU is committed to providing reasonable accommodation to qualified persons with disabilities. If you have any disability that may adversely affect your success in this course, please contact the University Accessibility Center at 422-2767. Services deemed appropriate will be coordinated with the student and instructor by that office."
            ),
        ]
    }
}