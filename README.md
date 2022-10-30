## Project Name & Pitch
Hacker News Project

An application used to fetch data form Hacker News API based on user preference, built with React, JavaScript, and CSS.

## Project Status
This project is still incomplete. Users can view Top, new, ask and show articles, and job. They can access Article details and user details. Comments pages, past articles page, login and sign up are still in progress.

## Installation and Setup Instructions
To run this project on your machine, You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

## Reflection

  - What did you set out to build?
  I had planned to build the whole project but then I faced some obstacles like the time frame and the limitation of the APIs that can be used to get the data for the project
  - Why was this project challenging and therefore a really good learning experience?
  
  - What were some unexpected obstacles?
  the limitations of the APIs built to get the data for the project

This was a 4 days long project built to assess my coding skills.  

 I started this process by using the `create-react-app` boilerplate, then adding `react-router-6.0` and other helper packages to manage dates(`moment`), API calls `axios`, parsing html string (`html-react-parser`)...

The most challenging part was implementing the API calls in a way to reduce the loading time of the page. for example to get all the top stories I had to run an API to get the ids of the articles (500 articles) then I would go over the list and get article details for each article which means 500 requests (it took around 1 min and 40 sec) but I managed to reduce this time to ~ 18 sec using promises.