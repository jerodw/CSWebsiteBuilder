# CSWebsiteBuilder
This is a website builder for CS courses at BYU. The main idea of this website builder is you supply it with a config file and a directory of resoures for your class and the website builder will build a standardized website for your class. Follow the instructions below to get started.

# Creating a New Website
## Setup Student Resources
1. Create a directory for all the resources that a student will need for your class
2. Add the files to the directory created in step 1 (it is encouraged to have subdirectories to organize your files)
2. If you want custom html pages for your website (Example: for a policy page or a project instruction page) make sure there is no html, head, or body tags in your html file. This means the html file you supply will just have the content that would appear in the body tag.

## Setup the Website Builder:
1. Clone this github repo
2. Navigate to the project directory in a terminal
2. Run "npm install" to download the necessary dependencies
2. Delete the "example-out" folder and then run "npm run build exampleConfig.json"
2. If there is an "example-out" folder, everything has been set up correctly
2. Optional: Host the website to check the site by navigating to the "example-out" folder and typing in the command "python -m http.server 80" (or your preferred way of serving the files)

## Create a Class Config File:
1. Open "exampleConfig.json"
2. Fill out the config file with the information needed for your class (look at the two sections below for clarification on what to put in the fields)
    a. Dates and times must be in a format recognizable by [moment.js](https://momentjs.com/docs/#/parsing/string/)
2. Run "npm run build /path/to/config.json" where config.json is the path to the config file you've created\
    a. The script fails early and fast, with specific error messages. This is done to prevent a broken website from being fully generated.
2. Your website will be build to the directory supplied in the "outDir" directory

## Config Fields
```JSON
{
    "baseUrl": "http://students.cs.byu.edu/~CSCourseNumberTA/", // the base url of the website
    "courseName": "CS 202", // the name of your course
    "inDir": "/path/to/resource/files", // the filepath of your input folder
    "outDir":  "/path/to/where/site/lives", // the filepath of where the website will be built
    "courseInfo": "inDir/homePageContent.html", // filepath relative to inDir to an html file containing the desired text for the home page
    "navLinks": [/* See NavLink interface below */], // a list of NavLink objects for the navbar at the top of the site
    "professors": [/* See PersonInformation interface below */], // a list of PersonInformation objects for the professor(s) information on the home page
    "tas": [/* See PersonInformation interface below */], // a list of PersonInformation objects for the ta information on the ta-infromation page
    "classPeriods": [/* See the ClassPeriod interface below*/] // a list of ClassPeriod objects for the shedule-page
}
```
### Objects
#### NavLink
```JSON
{
    "title": "Page Title", // name of the page, this is what appears as the link text
    "templateRef": "home-template", // reference to either
    "filename": "index.html" // Name
}
```
### PersonInformation
```JSON
{
        "pictureReference": "http://url.to/picture", // URL or path to image of professor
  // Or "pictureReference": "/path/to/picture.jpg",
        "contactInformation": {
            "email": "jwilkersonexample@cs.byu.edu",
            "phoneNumber": "801-867-5309",
            "officeLocation": "4210 TMCB",
            "name": "Jerod Wilkerson"
        },
        "officeHours": [/* See OfficHour interface below*/], // List of days and times for office hours
        "byAppointment": true // Boolean representing whether appointments can be scheduled
}
```
