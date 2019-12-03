

# Frontend Challenge Solution ☠️



Thanks for the opportunity to complete this challenege, it was great fun and I did learn some things along the way.

To start the app please run:
`npm i` `npm start`

Regarding my solution, unfortunately I realized too late, there is an endpoint to get filtered results for stars and price, so I added that functionality inside my app, it does filtering by price and stars, but It's making all the operation on a unfiltered response like the response of this api:

```
http://fake-hotel-api.herokuapp.com/api/hotels
```

The mock images provider 'lorempixel' is often slow, some images consistently timeout, so I added default image backup:

[![N|Solid](https://thumb2.holidaypirates.com/Heyb--pOABv6fdJUPfI5UDvkzLQ=/424x195/https://media.mv.urlaubspiraten.de/images/2019/11/5dd6574938114637411283sj5tm69i.jpg)]()

For that reason, when you change stars or price, the images dont update as fast as it should.

# Things I could not get to:

  - Catch error on the reviews fetch call
  - Tests
  - Make the filtering with the result of fetching the api with the correspondent query params
  - Improve the UI design

# The flight API

For the flights API we need, we can follow the structure of the hotel and reviews API's.

It could look like this:
```
http://fake-hotel-api.herokuapp.com/api/flights
```

Response can look something like this:
```
[ { "id": "4ce349c9-009c-40ab-8716-5f1d794e7c11",
      "airLine": "id repellendus sunt",
      "departingCity": "Qatar", "arrivalCity": "New Rosella",
      "price": 365, "images": [ "http://lorempixel.com/640/480/city?71822" ],
      "date_start": "2019-11-21T13:13:54.841Z",
      "date_end": "2020-08-06T10:34:08.830Z",
      "description": "Ad enim tenetur fugit maiores et sunt quas aut. Beatae aut fuga tempora saepe ad consequuntur. Quod            tempore quo quaerat maxime. Et et error. Ea id assumenda est perferendis voluptatem qui officia et distinctio.                Voluptate laudantium voluptatem voluptas saepe hic ut ullam dolor."
  }
  ...
]
```

### Query params:

| QUERY PARAMETER | VALUE |
| ------ | ------ |
| no_error | Optional. Prevents server from errors if set. By default server returns error sometimes. |
| force_error | Optional. Enforces server error if set. |
| count | Optional. The number of hotel flight to return. Default: random count from 0 to 500. |
| directFlight | Optional. Boolean that indicates if flight is direct or not |
| max_price | Optional. Maximum offer price.



***
***
***




# Welcome on board ☠️

As a potential new crew member, we have some tests for you to show us what a pirate you can become. Like a real pirate, you must find your way by yourself sometimes. We give you only some little hints to get the 🔑 to our pirate ship.

## What you need

You need some basic knowledge about

* HTML
* CSS
* JavaScript

## Time frame

You have exactly one week after you received this test. Don't worry if you have not finished with all tasks.

## 1. Hotel list

We need for our next trip with the whole ☠️-crew a hotel and what we get from our backend-🐵 was only [this](http://fake-hotel-api.herokuapp.com/).

Your task is now to present us the hotels that we can choose the right one for our next trip. To make it easier for us to find the right hotel, we want to have a filter for hotel ⭐ (stars) and hotel 💰 (price).

**Acceptance Criteria:**

* We are modern pirates and love to navigate with our mobile devices too. Please optimize your presentation on all modern devices.
* On our trips we want to have it more comfortable and the default hotel list should have minimum 3 ⭐.
* You will find a lot of data and information for one hotel. Show us you what you think is really important to present.
* Pirates love to share their knowledge! Please find a way to show for every hotel also the reviews that we know what other pirates thing about the hotel.

**Bonus (extra chance for our pirate ship 🔑):**
Write some tests (integration, unit or e2e) which you find useful for your code. Use every test framework which you want.

**Optional:**
Did you miss something in our hotel API? Something that is really needed or you think is important to have before starting with the design or frontend? Please write down your thoughts in a simple list with short statements that we can discuss these point together later.

### Technical Requirements

* [Node.js](https://nodejs.org/en/)

Please install Node.js globally.

### Tech Stack

Please use our starter kit what we prepared for you. __Use plain JavaScript and no CSS framework!__ But you are free to install npm packages which you think is needed to solve the test in the best way.

To start, you must only install the dependencies.

```bash
npm install
```

Now you can start developing with

```bash
npm start
```

To build your final project call

```bash
npm run build
```

### Design

We have no requirements for design. No colours, no mockups, nothing. Please feel free to inspire us with everything you think this list of hotels needs to be perfect in case of UX and UI.

### Product Requirements

Please use either a public GitHub repository for your solution or create a ZIP file and include every asset (images, data files,... [no node_modules folder please]) which we need to run the presentation on local. Your final code should run without any error in following desktop browser:

* Chrome(version >=76)
* Safari (version >= 12)
* Firefox (version >= 69)

And on the following mobile browser (only when you have real test devices):

* iOS Safari (version >= 12)
* Samsung Internet (version >= 9)
* Chrome for Android (version >= 76)

For the first mobile tests without real devices, you can run your code in chrome devtools [device-mode](https://developers.google.com/web/tools/chrome-devtools/device-mode). Here, please run it at minimum for the following devices:

* Galaxy S5
* iPhone 6/7/8
* Pixel 2
* iPhone X
* IPad

## 2. The Flight

To get to our hotel, we also need a flight. But here our backend-🐵 has no idea how he can start with the development.

Your second task is to explain our backend-🐵 what you need from him as a data structure for an API endpoint.

Here you are entirely free how the data structure should look like and which format it should have. Think about what you need to show us also a flight list where we can search flight to our hotel.

Please describe with your own words in a text what you need and give us a short example with dummy data how your data structure will look like. See this text as a briefing for a KickOff meeting that all departments can sit together and talk about the next steps.
