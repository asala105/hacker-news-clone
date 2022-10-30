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
This was a 4 days long project built to assess my coding skills.  

I started this process by using the `create-react-app` boilerplate, then adding `react-router-6.0` and other helper packages to manage dates(`moment`), API calls `axios`, parsing html string (`html-react-parser`)... I also planned to use `Redux` when implementing the login and signup components but they are still in progress so I decided not to include the related packages to the package.json file

The most challenging part was implementing the API calls in a way to reduce the loading time of the page. for example to get all the top stories I had to run an API to get the ids of the articles (500 articles) then I would go over the list and get article details for each article which means 500 requests (it took around 1 min and 40 sec) but I managed to reduce this time to ~ 18 sec using promises.

Note that there was another way to implementing the API calls in a way to reduce the loading time of the page by sending the ids of the articles that will appear in the current page only and fetching the article details of those ids only (that would have reduced API calls to 30 per page) but I had to use the above implementation if I was to add the search and date filters to articles lists as required in the past articles page, and because of the limitation of the API calls (we only have a couple of allowed endpoints). 

All in all, it was a great experience for me where I learned to think out of the box when having limitations

