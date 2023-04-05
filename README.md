# Fitness Space App

Fitness Space App is a Mobile Application that helps you to keep you fit and healthy. 
It consists of different type of workouts all grouped in to different categories. 
By default, you have access to an in-built Home-workout which consist consist of various types of workouts exercises. 
Each Workout focuses on a particular part of the body. For example, LEG EXERCISE focuses on your legs etc. 
You also have the Possibility to add CUSTOM workouts and Exercises at your will. 

- The Front-end of the application can be found [here](https://github.com/mbianou-bradon/ikniteSpace-Fitness-App)
- The Back-end of the Application is Hosted on render and can be accessed at [Fitness Space](https://fitness-space.onrender.com/)

The API is accessible to all. The different end-points are represented below 

**TABLE OF END-POINTS**

|STATUS	  |METHOD  	|ENDPOINT	        |RESPONSE
|---------|---------|-----------------|----------
|UP       |	GET	    |/	              |List of All End-points
|UP	      |GET	    |/workouts	      |JSON of All Workouts
|UP	      |POST	    |/workouts	      |CREATE a Workout
|UP	      |GET	    |/exercises	      |JSON of All Exercises
|UP	      |POST	    |/exercises	      |CREATE an Exercise
|TESTING	|PUT	    |/workouts/:id	  |UPDATE Workout with id
|UP	      |DELETE	  |/workouts/:id	  |DELETE Workout with id
|TESTING	|PUT	    |/exercises/:id	  |UPDATE Exercise with id
|UP	      |DELETE	  |/exercises/:id	  |DELETE Exercise with id

## **DATA MODEL AND TYPES**

### WORKOUT MODEL

|ATTRIBUTE|TYPE   	|REQUIRED	        |UNIQUE
|---------|---------|-----------------|----------
|name     |String   |true             |true
|desc     |String   |true             |false
|imgUrl   |String   |true             |false
|exercises|Array    |true             |true

### EXERCISE MODEL

|ATTRIBUTE          |TYPE   	|REQUIRED	        |UNIQUE
|-------------------|---------|-----------------|----------
|name               |String   |true             |true
|desc               |Array    |true             |false
|imgUrl             |String   |true             |false
|duration           |Number   |true             |false
|restTime           |Number   |true             |false
|focusArray         |Array    |true             |false
|workoutCategory    |Array    |false            |false


Remember "Health is Wealth" :smile: 
