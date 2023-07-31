# JavaScriptMedApp

## Overview
This application is made up of a client app and a server app. The client application runs in a web browser and is written using Javascript. To date it has been successfully tested in Firefox(v115.0.3 64 bit).

The server-side application is also written in Javascript and requires the Node.Js runtime at version 16.13.0 as well as
npm at version 8.1.1

## Installation
After cloning the repo into your local directory run:

`>npm install`

## Getting started
It is recommended that the application be tested using Visual Studio code with the live server extension (Extension ID:ritwickdey.LiveServer) installed. To run the server which stores the files run:

`>npm run serve`

To run the client one may open the index.html file in /Client_App and run it using live server. Alternatively one may run the server for the client using the server.js file provided for convenience. To run the server type:

`> node ./Client_app/server.js`

The client runs on localhost:5500 while the server runs on localhost:3000


