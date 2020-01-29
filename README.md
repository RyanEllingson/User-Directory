# User-Directory
Unit 19 homework

Check out the deployed app here:

https://ryanellingson-user-directory.netlify.com/

# Project Description
The User Directory is an app built using React that generates a random list of 20 names and displays them on the screen.

![Screenshot of app on loading](https://github.com/RyanEllingson/User-Directory/blob/master/public/assets/images/Screenshot1.JPG)

Upon clicking the "Sort users alphabetically" button, the list gets rearranged in alphabetical order based on last name.

![Screenshot of sorted list](https://github.com/RyanEllingson/User-Directory/blob/master/public/assets/images/Screenshot2.JPG)

In the text field to the left of the list, the user may type a series of characters, then click the "Search by last name" button.  This will filter the list and only display those users whose last names contain the characers entered in the text box (this is case sensitive).

![Screenshot of filtered list](https://github.com/RyanEllingson/User-Directory/blob/master/public/assets/images/Screenshot3.JPG)

At any time the user may click the "Restore original users" button to display the original list which which the app loaded.  Refreshing the page will generate a new random list of 20 names.

# Techniques and Technologies Used
This app was built using React.  The list of names is created by mapping an array of objects into pre-built components, with the names passed into the components via props.  The array of names is generated on app initialization using an Axios call to the Random User Generator API (https://randomuser.me/).  In order to handle the asynchronous nature of the GET request but have the page render properly, an "async" function is defined and the "await" keyword used to capture the response.

useState is used in several instances in this app.  It is used to store what Users should be displayed on the page; to store the initial array of Users that can be called back; and to keep track of the search term entered by the user.