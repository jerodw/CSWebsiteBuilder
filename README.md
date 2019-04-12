# CSWebsiteBuilder
This is a website builder for CS courses at BYU. The main idea of this website builder is you supply it with a config file and a directory of resources for your class and the website builder will build a standardized website for your class. Follow the instructions below to get started. The recommended version is 10.15.3 LTS. Lower versions of Node.js may not work with the website builder.

# Dependency
This project requires Node.js. You can download it [here](https://nodejs.org/en/download/) or find instructions for your package manager [here](https://nodejs.org/en/download/package-manager/). The current LTS should be fine. Avoid any versions below 8 as their may be incompatibilities.   

# Building a Website
This section assumes that you already have a config file and a directory of resourses, if you don't have both of those items then read the "Creating a New Website" section
1. Clone this repository (it is recommended to clone this repo near to your config file and resouce directory)
2. Use a terminal of your choice to navigate into the folder that you just cloned
2. Run "npm install" inside the CSWebsiteBuilder directory
2. While npm install is running, open the class config file and make the following changes
    * "inDir" - should be updated to be the filepath to your resource directory (if you are using relative filepaths make sure it is relative to the "CSWebsiteBuilder" directory)
    * "outDir" - should be updated to the be the filepath to the directory you want the site built to (also relative to the "CSWebsiteBuilder" directory)
2. Run "npm run build /path/to/config.json" ("/path/to/config.json" is the path to the config file that you have)
2. Wait for builder to finish
2. Check to see that the website was built to the directory specified in the "outDir" field of your config file
2. Optional: Check to see if the website is working by navigating into the "outDir" folder and typing in the command "python -m http.server 8080" (or your preferred way of serving the files)

# Creating a New Website
## Setup Student Resources
1. Create a directory for all the resources that a student will need for your class
2. Add the files to the directory created in step 1 (it is encouraged to have subdirectories to organize your files)
2. If you want custom html pages for your website (Example: for a policy page or a project instruction page) make sure there is no html, head, or body tags in your html file. This means the html file you supply will just have the content that would appear in the body tag.

## Setup the Website Builder:
1. Clone this github repo
2. Navigate into the cloned directory in a terminal
2. Run "npm install" to download the necessary dependencies
2. Delete the "example-out" folder and then run "npm run build exampleConfig.json"
2. If there is an "example-out" folder, everything has been set up correctly
2. Host the website to check the site by navigating to the "example-out" folder and typing in the command "python -m http.server 8080" (or your preferred way of serving the files)

## Create a Class Config File:
1. Open "exampleConfig.json"
2. Fill out the config file with the information needed for your class (look at the two sections below for clarification on what to put in the fields)
    * Dates and times must be in a format recognizable by [moment.js](https://momentjs.com/docs/#/parsing/string/)
2. Run "npm run build /path/to/config.json" where "/path/to/config.json" is the path to the config file you've created
    * The script fails early and fast, with specific error messages. This is done to prevent a broken website from being fully generated.
2. Your website will be build to the directory supplied in the "outDir" directory

## Cleaning Google Doc HTML Pages
Google Docs can export documents as HTML pages. They do come with a bunch of formatting garbage that you don't need and that make it difficult to edit the file. To clean the file up run "npm run clean /path/to/file" and the script will clean up the majority of the file for you. It is not perfect however, and there may occassionally be issues that the script does not account for. Relatively common issues include pictures being poorly aligned and numbered or lettered sub-lists not using the correct letter or number. With a bit of knowledge about HTML and CSS these can be fixed rather quickly. To destructively clean a file, replacing the original, run "npm run clean /path/to/file destructive" Only do this if you are confident that it will work or you are willing to redownload the original page if something goes wrong.

## Provided Templates
The templates provided are for the home page, the TA schedule, and the class schedule. The home page templateRef is "home-template". The TA schedule templateRef is "taInfo-template". The class schedule templateRef is "schedule-template".

## Config Fields
```javascript
{
    "baseUrl": "http://students.cs.byu.edu/~CSCourseNumberTA/", // The base url of the website
    "courseName": "CS 202", // The name of your course
    "inDir": "/path/to/resource/files", // The filepath of your input folder
    "outDir":  "/path/to/where/site/lives", // The filepath of where the website will be built
    "courseInfo": "path/to/homePageContent.html", // Filepath, relative to inDir, to an html file containing the desired text for the home page
    "navLinks": [/* See NavLink interface below */], // A list of NavLink objects for the navbar at the top of the site
    "professors": [/* See PersonInformation interface below */], // A list of PersonInformation objects for the professor(s) information on the home page
    "tas": [/* See PersonInformation interface below */], // A list of PersonInformation objects for the ta information on the ta-infromation page
    "classPeriods": [/* See the ClassPeriod interface below*/] // A list of ClassPeriod objects for the shedule-page
}
```
### Object Interfaces

All dates **must** be compatible with [moment.js](https://momentjs.com/docs/#/parsing/string/), otherwise undefined behavior may occur.

#### NavLink
```javascript
{
    "title": "Page Title", // Name of the page, this is what appears as the link text
    "templateRef": "home-template", // Reference to either one of our templates or a custom template you have defined. The list of provided templateRefs is above
    "filename": "index.html" // Name of the output file
}
```
#### PersonInformation
```javascript
{
        "pictureReference": "http://url.to/picture", // URL or path to image of person
  // Or "pictureReference": "/path/to/picture.jpg", // Relative to inDir
        "contactInformation": {
            "email": "jwilkersonexample@cs.byu.edu",
            "phoneNumber": "801-867-5309",
            "officeLocation": "4210 TMCB",
            "name": "Jerod Wilkerson"
        },
        "officeHours": [{ // List of days and times for office hours
            "dayOfWeek": "Monday",
            "startHour": 8, // Both of these times are military hours (0-23)
            "stopHour": 12
        }], 
        "byAppointment": true // Boolean representing whether appointments can be scheduled
}
```
#### ClassPeriod
```javascript
{
    "title": "Class Period Title",
    "date": "2019-04-01",
    "classNotes": [{
        "title": "Class Note Title",
        "fileReference": "/path/to/file", // Relative to inDir
        "availableDate": "2019-03-30T17:57:22.674Z" // Optional, date specifying when the assignment will become available. If no date is specified then it is always available. This date is not visible to anyone.
    }],
    "assignments": [{
        "title": "Assignment Title",
        "bodyReference": "path/to/body", // Relative to inDir, file ending doesn't matter, but contents must be html
        "availableDate": " " // Optional, date specifying when the assignment will become available. If no date is specified then it is always available. This date is not visible to anyone.
    }]
}
```
