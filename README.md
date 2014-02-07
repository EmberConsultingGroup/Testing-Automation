Testing Automation
==================

Howto automate testing using various tools such as TeamCity, Phantom, Jasmine 2.0 and RequireJS

###Overview

The build server will execute a task to run the specRunner.html  in a headless browser that runns the tests and reports out the results such that the build server understands.

###Required tools and libraries

* Build Server: [TeamCity](http://www.jetbrains.com/teamcity/)
* TeamCity Reporter: [Reporter](https://github.com/EmberConsultingGroup/JasmineTeamCityReporter)
* Headless browser: [PhantomJS](http://phantomjs.org/)
* Javascript testing framework:  [Jasmine 2.0](http://jasmine.github.io/2.0/introduction.html)
* Module Loader: [Requirejs](http://requirejs.org/)


### Project
In your projects, checked into source control, make sure you have phantom.exe, PhantomJS.js, specRunner.html, specRunner.js, Jasmine2-teamcityreporter.js and specList.js along with all supporting libraries your project needs.

*Be sure to change all the paths in the specRunner.html, specRunner.js to match your project paths.*

If you run the specRunner.html page from your project and it shows you all your tests and pass/fail you've got it right.

In Visual Studio, right click, show in browser will often try to launch the debugger and fail, just click the "cancel debugging" button.  [Chutzpah](http://chutzpah.codeplex.com/) plugin has a right click launch in browser that works great.  I'm sure other plugins exist for directly launching html pages in Visual Studio.
  
  
###Build Server Configuration

TeamCity build step instructions












