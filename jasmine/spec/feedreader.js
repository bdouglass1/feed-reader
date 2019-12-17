/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //checks allFeeds is defined
            expect(allFeeds.length).not.toBe(0);    //checks allFeeds is not empty 
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeeds object has URL defined', function() {
            for(let i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined(); //checks url is defined
                expect(allFeeds[i].url).not.toBe('');   //checks url is not missing from object
                expect(typeof allFeeds[i].url).toBe('string');  //checks url is a string type
            };
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('feed contains name defined and name not emtpy', function() {
            for(let i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined(); //checks name is defined
                expect(allFeeds[i].name).not.toBe('');  //checks name is not missing from object
                expect(typeof allFeeds[i].name).toBe('string'); //checks that name attribute of object is a string type
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is not hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); //checks hidden class is present
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('display when clicked and hide again when clicked again', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false); //checks if hidden class is removed
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true); //checks if hidden class is back added 
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() { 
                done(); //signals loadFeed method completes it's work
            });
        });

        it('at least one entry element after loadFeed is called', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);    //checks if there is at least one entry 
            done(); 
         });
     });

    /* TODO: Write a new test suite named "New Feed Selection" */
     describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let oldFeed;
        let newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();    //saves old feed

                loadFeed(1, function() {
                    newFeed = $('.feed').html();    //saves new feed
                    done(); //signals loadFeed method completes it's work
                });
            });
        });

        it('new feed loaded when loadFeed is called and content is changed', function() {
            expect(oldFeed).not.toBe(newFeed);  //checks to see if old feed is not the same as new feed
        });
     });
}());
