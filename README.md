# weatherapp
It is a weather app that tells the weather of a  person at his/her location via geolocation API 


The Weather App is a Angular 1.5 app that uses Openweathermap API to get weather data via API key. 
It has a list of weather apps with ratings and when clicked on each of the apps takes the user to the app page.
The co-ordinates(latitude & longitude) are sent to the Openweathermap API via geolocation.navigation API which gets the co-ordinates. 
If the site/device for some reason does not support geolocation, it throws an alert and gets the Weatherdata from the default co-ordinates
It is built using the component design pattern of angular 1.5 throughout.
There is a custom filter to decode the URIEncoding when the title of the app comes up with URI Encoding in string params. 
There is also a angularJS built-in filter used to search apps on the app name.
The app uses LESS as a preprocessor for styling.
There is transcluded content for the app rating component and specific binding for each component.
It is  hosted on Plnkr - http://plnkr.co/edit/GsGTo5d2yM2eL6DdTqFH?p=info

