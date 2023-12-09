# Team Tracker

### Client-side Live Link: https://team-tracker-31435.web.app

## Technologies:
- Firebase based authentication.
- MongoDB is used for database.
- Stripe is used for payment gateway.
- Jwt implementation is done for security.

## Features:
- This is an employee management website.
- There is a homepage that contains the services that the company provides, their featured projects, about the company and testimonials given by the users.
- There are also some pages like faq, contact us etc.
- An user can set his/her role while registration. User can be an employee or a HR of the company.
- There is admins in website. They can change a normal employee's role to a HR.
- Admin can also fire any employee if he/she wants.
- HRs can make a employee verified or unverified. And also see the details about the employees. 
- In this details page, HR can see a bar chart that represents the salaries of various months of the employees.
- HR can make payment for the verified employees only. But making payments for the same month twice is not allowed.
- HR can also see the works done by the employees in progress page. He/she can also filter the works by name and date selecting from the dropdown menu.
- Employees can submit their finished works in the work sheet page. In this page, they can also view their submitted works in a table.
- In payment history page, they can view their payments that they have received previously.

## To Run Locally
### Client Side
1. Clone the application.
2. Create a .env.local file
3. In this file, you have to add your firebase variables as follows:
   VITE_APIKEY=value of apiKey from your firebase configuration <br/> 
VITE_AUTHDOMAIN=value of authDomain from your firebase configuration <br/>
VITE_PROJECTID=value of projectId from your firebase configuration <br/>
VITE_STORAGEBUCKET=value of storageBucket from your firebase configuration <br/>
VITE_MESSAGINGSENDERID=value of messagingSenderId from your firebase configuration <br/>
VITE_APPID=value of appId from your firebase configuration <br/>
4. In your terminal, run the following command: <br/>
    npm install <br/>
    npm run dev

### Server Side
1. Clone the server from: https://github.com/Orchizakia00/team-tracker-server
2. Create a .env file.
3. In this file, you have to add the followings: <br/>
DB_USER=replace with your username <br/>
DB_PASS=replace with your password <br/>
ACCESS_TOKEN_SECRET=replace with your token <br/>
STRIPE_SECRET_KEY=replace with your key from stripe.
4. In your terminal, run the following commands: <br/>
    npm install <br/>
    nodemon index.js