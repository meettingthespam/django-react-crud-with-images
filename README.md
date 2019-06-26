# React-and-Django-with-Redux-and-Knox
Just a proof of concept of pulling together React for front end, Redux
for managing state in React and Django handling the backend and
database. Also allows users to use tokens for authentication and
automatic logging in. It handles multiple apps in Django, so it has
mutliple API connections to React. It has the ability to take some
quick notes, dossiers, and display images. Once users register, they
can see only their notes keeping the app private. The notes and
dossiers are saved to a SQLite database, the images are hosted on
Github.
          

* To build, start virtual environment, install all of the Python libraries in requirements.txt

```
 pip install -r requirements.txt
```

* Install the Node.JS dependencies with npm.
          

```
npm install 
```
* Build the database
```
python3 manage.py makemirgrations
```
```
python3 manage.py migrate
```

* Build the React App
```
npm run dev
```

* Then run the server with 
```
python3 manage.py runserver
```



Note : *There is no admin page and no need for a superuser*

