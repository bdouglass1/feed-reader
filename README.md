# Project Overview

This project is a web based application that uses and reads RSS feeds. Jasmine is needed to provide test suites. 

The following tests and independent from one another, call backs are used to ensure feeds are loaded prior to testing, and when complete; all tests should pass. 

The loadFeed method is asynchronous and thus, use of beforeEach and asynchronous done() function needed to be implemented. Test were created and passed to ensure items/elements were defined, contained items (length < 0) and ensured content was changed.

At the bottom of the web page, the 7 specs with 0 failurs is logged. 

Uploaded is an image displaying all 7 specs passing. 

# Contributing

Starter code provided by Udacity. 

I only edited the feedreader.js file. There was no need to edit the app.js file.
