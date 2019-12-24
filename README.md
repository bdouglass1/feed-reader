# Project Overview

This project is a web based application that uses and reads RSS feeds. Jasmine is needed to provide test suites. 

The following tests and independent from one another, call backs are used to ensure feeds are loaded prior to testing, and when complete; all tests should pass. 

The loadFeed method is asynchronous and thus, use of beforeEach and asynchronous done() function needed to be implemented. Test were created and passed to ensure items/elements were defined, contained items (length < 0) and ensured content was changed.

At the bottom of the web page, the 7 specs with 0 failurs is logged. 

Uploaded is an image displaying all 7 specs passing. 

To run the application, launch the index.html file. The bottom of the page displays the 7 specs with 0 failures. 

The applicaton can be run to test that these specs truly pass. Verify the menu is hidden by defulat. To test the menu, click the menu hamburger icon. A menu should appear when the icon is clicked. The menu is no longer hidden. To make the menu hidden again, click again the hamburher icon. This passes the 'menu element is hidden by default' spec.

To test URL spec, verify that each link works properly. Each link can be clicked to test whether a new page is uploaded. There should not be any incorrect URLs or invalid links. The user can click each link and verify the old feed and it's content is replaced by the new feed and the new content. 


# Contributing

Starter code provided by Udacity. 

I only edited the feedreader.js file. There was no need to edit the app.js file.

Only the first test was provided in the feedreader.js file. All the other test had to be added. The first test ensures the allFeeds object is defined and not emtpy. The second test verifies each feed in the allFeeds object has a defined URL and not empty. It also checks to make sure the URL is a string type. The third test verifies the menu element works as expected; it verifies the menu is hidden by default and displayed when the icon is clicked and becomes hidden again if clicked once more. The fourth test verifies the there is at least one element once the load feed method is called. The beforeEach and asynchronous done() function is called prior to the test since the load method is asynchronous. The test is complete once the feed length is greater than 0 is checked. The last test has to use the beforeEach and asynchronous done() function as well. This test ensure when a new feed is loaded, the past feed is longer present and verifies that all content has changed. 
