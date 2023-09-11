# Login-Signup-Page-using-ReactJS-Node.js-MongoDB

## Frontend

Deploy link: https://simpleloginsignupform.netlify.app/

In the project directory, you can run:

### `npm install`
### `npm start`

To build and deploy it on netlify.com
### `npm run build`

 Drag & Drop the build folder in Netflify


## Backend

In the project directory, you can run:

It will start the server on your local machine
### `node app.js`

If you want to host backend you can go to 
### https://render.com/
Steps:-
#### package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  }
  
#### Add file .env
DATABASE = mongodb+srv://reshav:password@cluster0.hfofzwf.mongodb.net/?retryWrites=true&w=majority
BASE_URL = http://localhost:5000

New -> Web Service -> Build and deploy from Github -> Select repository for backend code only -> Build Command(npm install) -> Start Command(node app.js) -> Advanced -> Add Environment Variable -> Key(DATABASE) & Value(mongodb+srv://reshav:password@cluster0.hfofzwf.mongodb.net/?retryWrites=true&w=majority) -> Create web service


### https://www.cyclic.sh/
Steps:-
Link your Own -> Select Github Repository -> Connect Cyclic
