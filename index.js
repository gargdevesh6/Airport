// dependencies
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const http = require('https');
var unirest = require("unirest");
let errorResposne = {
    results: []
};
var port = process.env.PORT || 8080;
// create serve and configure it.
const server = express();
server.use(bodyParser.json());
server.post('/',function (request,response)  {
    //start - socket io
    var socket = require('socket.io-client')('wss://airportbuddy.herokuapp.com');
    socket.on('connect', function(){
        console.log('connected');
                    
        socket.on('login', function(data){
            console.log('login');
            socket.emit('new message', (request.body.queryResult.intent.displayName).toLowerCase()); //sends message to chat server
        });
        
        socket.on('got message', function() {
            socket.disconnect();
        });
        
        socket.emit('add user', 'alexa'); //login as "alexa"
    });
    //end - socket io
    if(request.body.queryResult.intent.displayName == 'Default Welcome Intent') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Please tell me how can I be of service.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Welcome') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Welcome Frank to the airport today. Your flight number DU348 to Paris is on time and will depart from gate 3A in 90 minutes ",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Baggage') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Let me help you with your baggage check in. Your bag ID has now been linked to your One ID. We invite you to enjoy world of million experience at our airport.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Bookticket') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Your ticket has been booked. Thank You.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'FlightBook') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Sure, can you tell me your one I D please?",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'CityNext') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Amy, there are 12 available options for you.  The best flight selected for you takes 26 hours with a 6 hour layover at Dubai.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'CityOne') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Bengaluru selected.  Tell me the next city",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'DateIntent') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Is it a one way journey, a round trip or a break journey?",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Security') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Your security check is complete. We invite you to enjoy the world of million experiences at our airport.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'oneID') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "This id will be used for all the booking procedures. So tell me, When do you want to travel?",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Roam') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Amy, Dubai now  provides free transit visa for maximum of 48 hours. According to your one ID you are eligible for the transit visa.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'TravelType') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Do you want to book the flight from your current location which is Bengaluru?",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Itinery') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Sure all the relevant flight details are mapped on your A R experience studio. Your ticket cost is five thousand nine hundred and thirty eight dollars.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Suggestions') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Hello Frank - we have great offers running for you today. You may like to buy the perfume from \"Chanel\" to gift your wife on your upcoming 15th marriage anniversary",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Thanks') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Thank you Frank for shopping with us today. The same will be delivered to your seat # 12A",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Coffee') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "There is a cafe at 4 minutes walking distance as shown on your digital assistant. Let me take you there. According to Zomato, this cafe has been rated 4 stars and their best seller is Sloppy Joe. So tell me what would you like to have?",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Reminder') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Frank, the boarding for your flight DU348 has started and the gate will close in 20 mins. I suggest you start walking to the boarding gate 3A that is 10 minutes walking distance",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Bye') {
        
       //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Thank you Frank for visiting us. Hope you have a pleasant journey!",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Burger') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "You have all the necessary ingredients for a sloppy joe. There is a video playing on the screen to help you with it. You can customize your toppings by calling them out and then finally say ‘Done'.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Bread') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Bun added.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Done') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "There you go. Your burger will be delivered to you in 5 minutes",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Cheese') {
        
       //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "One portion of Cheese added.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Patty') {
        
       //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "One Patty added.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Lettuce') {
        
       //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "One portion of Lettuce added.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Tomato') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "One portion of Tomatoes added.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Onion') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "One portion of Onions added.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Lounge') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Let’s go back to Airport Lounge.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'PlayGame') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Enjoy the Game.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'GameQuit') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "I hope you enjoyed the game.",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'PlayTrailer') {
        
        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'CloseTrailer') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "I have added this movie to your watchlist. You can watch it on the flight",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }
    else if(request.body.queryResult.intent.displayName == 'Restart') {

        //start - response to google assistant

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({
                "fulfillmentText": "Okay",
                "fulfillmentMessages": [
                ]
            }
        )); 
    }

});
server.get('/getName',function (req,res){
    res.send('Devesh Garg');
});
server.get('/',function (req,res){
    res.send('Welcome to the application');
});
server.listen(port, function () {
    console.log("Server is up and running...");
});
