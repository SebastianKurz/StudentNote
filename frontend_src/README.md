# Studentnote



Studentnote is just a tiny Web project to get familiar with Angular JS and Google Appengine. 

The Backend Service is written in Java and uses JPA with DataNucleus to store Java Objects in the Google DataStore. For Communication it uses an REST Service.

The Frontend just uses Angular JS 4 with Google's Material Design Language.

![Image](doc/WIP-20170906.png?raw=true)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

### How to install NPM and Node for compiling the Angular frontend

Since the frontend ist completely written with Angular, for further development and self compilation it is necessary to install an NPM and Node.js environment. With an Debain based System you can use those instructions:

#### Add the NodeSource package signing key

```sh
curl --silent https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
# wget can also be used:
# wget --quiet -O - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -
```

#### Add the desired NodeSource repository

```sh
DISTRO="$(lsb_release -s -c)"
echo "deb https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list
```

#### Update package lists and install Node.js

```sh
sudo apt-get update
sudo apt-get install nodejs
```

## General Information regarding Angular

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
