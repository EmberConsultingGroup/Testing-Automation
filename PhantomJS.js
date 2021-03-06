﻿
//Found on the internet, played with a little.

console.log('Loading a web page');
var page = new WebPage();
//This was tricky, this is the way to open LOCAL files
//var url = "file://localhost/Ember/WebRole/Scripts/app/test/SpecRunner.html";

console.log("Phantom Argument: " + phantom.args[0]);

var url = phantom.args[0].replace('D:\\', 'file://localhost/');
url = url.replace('\\', '/');
url = url.replace('\\', '/');

console.log("Loading " + url);

phantom.viewportSize = { width: 800, height: 600 };
//This is required because PhantomJS sandboxes the website and it does not show up the console messages form that page by default
page.onConsoleMessage = function (msg) {
    console.log(msg);

    if (msg && msg.indexOf("##jasmine.reportRunnerResults") !== -1) {
        phantom.exit();
    }
};

//Open the website
page.open(url, function (status) {
    //Page is loaded!
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        //Using a delay to make sure the JavaScript is executed in the browser
        window.setTimeout(function () {
           // page.render("output.png");
            phantom.exit();
        }, 5000);
    }
});