# HowToCreateASailsJsApplicationWithSwagger

HowToCreateASailsJsApplicationWithSwagger is a project that shows how to setup [Swagger-Node/ Swagger](https://github.com/swagger-api/swagger-node) within a [Sails.JS](https://sailsjs.com/) application.

[![Build status](https://ci.appveyor.com/api/projects/status/vyh07xstdod7l90b?svg=true)](https://ci.appveyor.com/project/SeppPenner/howtocreateasailsjsapplicationwithswagger)
[![GitHub issues](https://img.shields.io/github/issues/SeppPenner/HowToCreateASailsJsApplicationWithSwagger.svg)](https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/issues)
[![GitHub forks](https://img.shields.io/github/forks/SeppPenner/HowToCreateASailsJsApplicationWithSwagger.svg)](https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/network)
[![GitHub stars](https://img.shields.io/github/stars/SeppPenner/HowToCreateASailsJsApplicationWithSwagger.svg)](https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/master/License.txt)

## Installation
1. Install [Node.JS](https://nodejs.org/en/download/) properly (administrator mode on Windows)
2. Check if the [environment variables](https://www.nextofwindows.com/windows-quick-tip-how-to-find-out-all-my-environment-variables) are set properly. (See image below for more information)

![Screenshot of the environment variables](https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/blob/master/Environment_Variables.png "Screenshot of the environment variables")

3. Install [Sails.JS](https://sailsjs.com/):
```bash
npm install sails -g
```

4. Install [Swagger-Node/ Swagger](https://github.com/swagger-api/swagger-node):
```bash
npm install swagger -g
```

5. [Create the new project](https://www.npmjs.com/package/swagger) (didn't work for me but might.)
```bash
swagger project create yournameproject
```

Choose **sails** as framework in the following dialog option.

Run this step in Windows Powershell in Admin mode only. Otherwise it might fail: https://github.com/swagger-api/swagger-node/issues/315

6. [Create the new project](https://sailsjs.com/documentation/reference/command-line-interface/sails-generate) (Only if 5. didn't work)
```bash
sails new yournameproject
```

7. Switch to your project folder
```bash
cd yournameproject
```

8. [Create a controller](https://sailsjs.com/documentation/reference/command-line-interface/sails-generate)
```bash
sails generate api user
```
This will generate a **user** model and controller.

8. Install additional packages as you like:
```bash
npm install sails-mongo // Package for connecting to MongoDB (See https://github.com/balderdashy/sails-mongo)
npm install waterline --save // Generic database adapter for database-model abstraction (See https://github.com/balderdashy/waterline)
npm install winston --save // Package for logging (See https://github.com/winstonjs/winston)
npm install http-auth // Package for authentication for your service (See https://github.com/http-auth/http-auth)
npm install mqtt --save // Package to send/ receive MQTT messages (See https://github.com/mqttjs/MQTT.js)
```

9. Specifiy your options, e.g. database connections, logging, auth, ....

10. Copy the example swagger.yaml file from https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/tree/master/YAML to your service's **api\swagger** folder. (Only if 5. didn't work)

11. Adjust the **config/models.js** file like the following (or take a look at the https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/blob/master/exampleproject/config/models.js file):
```javascript
migrate: 'safe'
```

to prevent sails from asking you if you want to delete your data in the database on every start of the service.

12. Edit your [Swagger API YAML file](https://swagger.io/specification/) with
```bash
swagger project edit
```

13. Add the controller methods you defined in your controllers to the config/routes.js file. Please recognize the special notice [below](https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger#special-things-to-notice).

14. Add the content of the [Swagger_Stuff folder](https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/tree/master/Swagger_Stuff) to your service's **assets** folder.


15. Disable the default sails homepage view with the following configuration in your **config/routes.js** file (or take a look at the https://github.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/blob/master/exampleproject/config/routes.js file):
```javascript
'/':
{
    // view: 'homepage'
},
```

16. Check out your swagger ui on the http://localhost:10010 address with
```bash
swagger project start
```

Eventually, you will have to run a
```bash
npm install
```

or even
```bash
npm install
npm install sails -g
npm install swagger -g
```
first. The service should than run on http://localhost:10010 if you haven't specified a new port.

## Special things to notice:
* The ["winston" package](https://www.npmjs.com/package/winston) needs a special (before created) file to log data to. It cannot create its own (empty) log file somehow!
* Never use / as the last char in a route in the Sails.JS **config/routes.js** file. This will crash your service! E.g. don't use something like _'post /api/user/register': 'UserController.registerUser/'_. Use _'post /api/user/register': 'UserController.registerUser'_ instead.
* Make sure that the **assets/index.html** file and the **swagger.yaml** file both contain the exact same hostname/ uri (even localhost and 127.0.0.1 won't work!!!)
* You can easily clone the project and customize it :) --> [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/SeppPenner/HowToCreateASailsJsApplicationWithSwagger/master/License.txt)

## Updating the basic uri/ hostname of the service
1. Update the **assets/index.html** file.
2. Update the **swagger.yaml** file by 
```bash
swagger project edit
```

## Updating dependencies
1. Remove the package-lock.json file.
2. Update via npm:
```bash
npm i -g npm-check-updates
npm-check-updates -u
npm install
```
https://stackoverflow.com/questions/16073603/how-do-i-update-each-dependency-in-package-json-to-the-latest-version

## Using Typescript
1. Configure Typescript according to https://sailsjs.com/documentation/tutorials/using-type-script
2. Adjust your controllers and models to be _*.ts_ instead of _*.js_
3. Adjust your models and controllers according to https://github.com/aslanvaroqua/sails-ts/blob/master/api/controllers/WelcomeController.ts and https://github.com/aslanvaroqua/sails-ts/blob/master/api/models/Welcome.ts
4. Start your app with **node app.js** instead of **swagger project start** or **sails lift**

## Adding SSL
1. Change the host from http://localhost:10010/swagger to https://localhost:10010/swagger in the /assets/index.html file.
2. Remove http from the schemes section in the swagger.yaml file.
3. Uncomment (and change) the following lines as shown below in the /config/local.js file:

```json
ssl: {
    // ca: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl_gd_bundle.crt'), //Do not use this line with self-signed certificates --> Uncommented
     key: require('fs').readFileSync(__dirname + '/ssl/default.key'),
     cert: require('fs').readFileSync(__dirname + '/ssl/default.crt')
   },
```

and

```json
port: process.env.PORT || 10010,
```

4. Add your generated ssl files (you might need to replace your SERVER_NAME in this script)
```bash
export SERVER_NAME='localhost'
mkdir ssl

openssl req -nodes -x509 -newkey rsa:2048 \
  -subj "/CN=$SERVER_NAME" \
  -keyout ssl/default.key \
  -out ssl/default.crt
```

to the config folder: /config/ssl/

5. Now your server should run under https://localhost:10010/

## Validating parameters
See https://github.com/chriso/validator.js for examples.

Change history
--------------
* **Version 1.0.0.0 (2018-04-09)** : Added SSL support example.
* **Version 1.0.0.0 (2018-01-02)** : Added Typescript support to description.
* **Version 1.0.0.0 (2017-12-23)** : 1.0 release.
