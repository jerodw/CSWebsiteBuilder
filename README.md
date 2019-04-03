# CSWebsiteBuilder
This is a website builder for CS courses at BYU. The main idea of this website builder is you supply it with a config file and a directory of resoures for your class and the website builder will build a standardized website for your class. Follow the instructions below to get started.

# Creating a New Website
## Setup Student Resources
1. Create a directory for all the resources that a student will need for your class
2. Add the files to the directory created in step 1 (it is encouraged to have subdirectories to organize your files)
2. If you want custom html pages for your website (Example: for a policy page or a project instruction page) make sure there is no html, head, or body tags in your html file. This means the html file you supply will just have the content that would appear in the body tag.

## Setup the Website Builder:
1. Clone this github repo
2. Navigate to the cs-website-builder in terminal
2. Run the command "npm install"
2. Delete the "example-out" folder and then run "npm run build exampleConfig.json"
2. Wait for the website to build
2. Check to see if there is now an "example-out" folder
2. If there is a folder, everything has been set up correctly
2. Optional: Host the website to check the files by navigating to the "example-out" folder and typing in the command "python -m http.server 80"

## Create a Class Config File:
1. Open the "exampleConfig.json" file
2. Fill out the config file with the information needed for your class (look at the two sections below for clarification on what to put in the fields)
2. Navigate to the cs-website-builder in terminal
2. Run "npm run build /path/to/config.json" where config.json is the path to the config file you've created\
    a. The script fails early and fast, with specific error messages. Nothing will be built if an error is thrown. Warnings may also be thrown.
2. Your website will be build to the directory supplied in the "outDir" field of the config file

### Config Fields
* fieldName : description: use
* baseUrl : the base url to the website you are creating : to set up links throughout the site
* courseName : a string to represent the name of your course : adds text to the nav bar and home page
* inDir : the filepath of your input folder : for custom content
* outDir : the filepath of where the website should be built : to set a location for the website to be built
* courseInfo : filepath relative to inDir to an html file containing the desired text for the home page : displays html file on home page
* navLinks : a list of NavLink objects : to build the navbar at the top of the site
* professors : a list of PersonInformation objects : to build the professor information on the home page
* tas : a list of PersonInformation objects : to build the ta information on the ta-infromation page
* classPeriods : a list of ClassPeriod objects : to build the shedule-page

### Objects


