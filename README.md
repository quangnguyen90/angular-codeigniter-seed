# angular-codeigniter-seed
A seed based on [multi-angular-apps-seed](https://github.com/phatpham9/angular-codeigniter-seed) with CodeIgniter on the back.

### Source structure
```
api/                                  -> codeigniter v3.0 source files, application and system directories
apps/                                 -> all apps source files
  admin/                              -> admin's app source files
    controllers/                      -> angular controller scripts
    directives/                       -> angular directive scripts
    services/                         -> angular service scripts
    routes/                           -> angular routes scripts
    views/                            -> view templates
    app.js                            -> main application module
  frontend/                           -> frontend's app source files
    controllers/                      -> angular controller scripts
    directives/                       -> angular directive scripts
    services/                         -> angular service scripts
    routes/                           -> angular routes scripts
    views/                            -> view templates
    app.js                            -> main application module
  shared/                             -> all shared assets between the apps
    fonts/                            -> copied font files
    images/                           -> image files
    scripts/                          -> build js files
    styles/                           -> build css files
grunt/                                -> gruntjs tasks files
  config/                             -> all tasks configuration
  pipeline/                           -> configuration of assets linker
  register/                           -> all tasks register
views/                                -> all view templates of the apps rendered by server
  admin/                              -> view templates of admin app
    layout.php                        -> layout file to be linked assets
  frontend/                           -> view templates of frontend app
    layout.php                        -> layout file to be linked assets
Gruntfile.js                          -> main script to load and register grunt tasks
bower.json                            -> dependencies list
package.json                          -> node packages list
.htaccess
```

### Included libraries
* angular-resource
* angular-ui-router
* angular-cookies
* angular-bootstrap
* ng-progress
* oclazyload
* jquery
* bootstrap
* font-awesome
* nomalize.css

### Grunt tasks
* grunt-contrib-clean
* grunt-contrib-concat
* grunt-contrib-copy
* grunt-contrib-cssmin
* grunt-contrib-uglify
* grunt-contrib-watch
* grunt-sails-linker

## Installation

### Prerequisites
You need
* [Git](http://git-scm.com/) to clone the repo
* [Node.js](http://nodejs.org/) and its package manager npm to install and build dependencies
* PHP-Apache stack to host the app

### Clone angular-codeigniter-seed
```sh
$ git clone https://github.com/phatpham9/angular-codeigniter-seed
$ cd angular-codeigniter-seed
```

### Install dependencies
Node modules then vendors will be install
```sh
$ npm install
```

### Build
In development mode, run
```sh
$ grunt
```
Or in production mode, run
```sh
$ grunt prod
```

### Run the application
Start the Apache server then open your browser and enter [http://localhost/angular-codeigniter-seed/](http://localhost/angular-codeigniter-seed/) to go to frontend app by default. To go to admin app, enter [http://localhost/angular-codeigniter-seed/admin/](http://localhost/angular-codeigniter-seed/admin/)

### Contribute
If you like it and want to contribute, just folk my repo and pull your requests.

### License
MIT license

### Version
0.0.1
