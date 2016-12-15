# OngVang 12/2016

# Creator: Linh Nguyen (email: nguyenlinh9890@gmail.com)

# Environment
* node package management (NPM)
* HTML 5 & CSS 3 (CSS is built from SASS)
* Bootstrap (3)
* Javascript, Jquery

# Tool
* NPM - node package management (download here: https://nodejs.org/en/)
* Git - manage project code (download here: https://git-scm.com/)
* Gulp Js - use to build and minify source code (js and scss and css)
!Node: To use and install GulpJs, you need to use npm (please read and follow steps at this link: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

# How to run?
1. Install node
2. Check out the project at: https://github.com/LinhNg9890/OngVang.git
3. Open the command prompt (in project folder press: Ctrl + right click -> open command window here)
3. Run: npm install.
4. Run: gulp dev
-> check your result at address: http://localhost:3000/

# How to build
1. check the gulpfile.js to understand
2. Run: gulp -> use to convert sass file to css file. And minify css and js file to a min file to use.
3. Run: gulp build -> build a package foler name "dist", contain all files that you need to run directly without steps above.