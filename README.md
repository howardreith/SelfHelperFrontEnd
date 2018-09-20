# The Self-Helper
### A web application by Howie Reith

The Self-Helper is a web application built to accompany one's efforts when working through self-help literature. One of the best ways to stay motivated in any self-improvement effort is to track one's progress. This application is built to make that simple and easy.
Links to the various facets of the application are as follows:

    Front-End Repository: https://github.com/howardreith/SelfHelperFrontEnd
    Front-End Live Site: https://howardreith.github.io/SelfHelperFrontEnd/
    Back-End Repository: https://github.com/howardreith/SelfHelperBackEnd
    Back-End Live Site: https://morning-brook-19819.herokuapp.com/


### Technologies used in The Self-Helper include:
HTML5, SCSS, Javascript, Ember.js, Handlebars, Bootstrap, and Heroku

## Planning and Execution

My initial planning of the project involved laying out exactly what I wanted the app to do. Since I'd previously spend many hours determining what tools I felt were necessary for the exercises I included in my book nearly two years ago, this was a relatively simple task.

I next tried to figure out what frameworks could be employed for multiple purposes. For example, since most of the tools involved spreadsheets, could I create a single spreadsheet template and use it to generate all of the spreadsheets in the app? The answer appears to have been "yes." While it took me several days to develop the code for the journal aspect of the application, it took merely two hours to apply that code to the column method aspect, and I anticipate subsequent sections being similarly readily converted.

With the general purposes in mind I next set out designing the wireframes, as I expected the aesthetic design of the app to be one of the most challenging, but important, aspects of its design. My fears on that front proved exaggerated, but my care with the wireframing early on helped me design a clear template and clarified what could be repeated and re-used and what could not.

I then set about coding. I begna with the API, setting up the Rails table and writing CURL scripts to interact with it. With that in place, I set up my routes and components on the front end and began experimenting with how to get my API calls to work correctly and appropriately display the data on the screen. As I was relatively inexperienced with Ember, Handlebars, and Bootstrap, this was exceptionally challenging, but after two days of work I mostly got the hang of what was needed and development went smoothly from then on. I made heavy use of console.logs in every component and route and spent many hours reading the Ember documentation.

In future iterations I hope to add the additional functions I'd always intended for the app as well as some styling and branding associated with the book.

### WIREFRAMES
Landing Page https://imgur.com/a/I2at1fG
Write Entry view https://imgur.com/a/XROd5ol
View all entries view https://imgur.com/a/F9NI5Yw
Nav Menu Open https://imgur.com/a/MhdSdDD

### USER STORIES

As a user, I want...

-My content to be kept private to me alone.
-To be able to write journal entries and save them to the cloud
-To see a list of all of my journal entries
-To access my journal entry when I click on it
-To sort my journal entries by name or date
-To star my most important journal entries
-To view my list of journal entries showing only my starred entries
-To have a save button that commits my entries to the server
-To have an auto-save feature in case I forget to save

-To be able to change my password
-To navigate between the various features of the app with a simple dropdown menu

-To log my column method responses
-To see a spreadsheet of my column method responses
-To sort my column method responses by their headings
-To modify my column method responses if I feel the need
-To log my downward arrow technique responses
-To see a spreadsheet of all of my responses
-To modify my responses if I feel the need

### Screenshot

![screenshot](https://i.imgur.com/8qSECKH.jpg)

### Set Up and Installation

The application is readily available simply by accessing https://github.com/howardreith/hotguydefrontend.

To operate locally, you must fork and clone both the front and back-end repositories into separate folders. Run npm install on the front end repository and bundle install on the back end. To boot your back-end server, run bin/rails server which will launch of port 4741. To boot your back-end server, run ember install in the main directory. This will run a server on port 7165. Navigate to localhost:7165 in your browser and you should have full local access to the application.
