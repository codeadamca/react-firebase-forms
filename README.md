# A Basic Introduction to Firebase and Forme

A basic example of integrating a React.js form with a Firebase Function.

If you want to deploy this application to Firebase, clonce this repository, and then follow these steps:

> Note: You will need to [install the Firebase CLI](https://firebase.google.com/docs/cli) and then run `firebase login`.

## Deploy Firebase Functions

1. The function uses GMail credentials to send an email. Open `functions/indes.js` and change the GMail credentials to your own.
2. Using a terminal, change your current directory to the functions folder.
3. Run `firebase init`. Choose Functions (using the arrow keys, space to selects, and enter to continue).
4. Choose an existing prject or create a new one.
5. Answer the following questions:
    
    ```
    ? What language would you like to use to write Cloud Functions? JavaScript
    ? Do you want to use ESLint to catch probable bugs and enforce style? Y
    ? File functions/package.json already exists. Overwrite? Y
    ? File functions/.eslintrc.json already exists. Overwrite? Y
    ? File functions/index.js already exists. Overwrite? N
    ? File functions/.gitignore already exists. Overwrite? N
    ? Do you want to install dependencies with npm now? Y
    ```

6. Run `firebase deploy`.
    
    You will now have a hosted function! Click on the Project Console link, then Functions (on the left hand side of your Project Console), copy the URL under the Trigger column, it should look something like this:
    
    https://us-central1-project-name.cloudfunctions.net/submit
    
    You will need this to place in the code of the contact form.

## Deploy React App

1. In the `react/source/src/ContactForm.js` file, change the URL in the Fetch request from `firebase-function-url` to the URL from the previous step.
2. Run `npm install`
3. Optional: Run `npm start` and you can see the contact form running locally.
4. Run `npm run build`. This will create a production version of the React app in a folder called `build`.
5. Run `firebase init`. Choose Hosting (using the arrow keys, space to selects, and enter to continue).
6. Choose an existing prject or create a new one.
7. Answer the following questions:

    ```
    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Y
    ? File build/index.html already exists. Overwrite? N
    ```

6. Run `firebase deploy`.

    You can now tet out the provided Hosting URL, it should look something like this:

    https://project-name.firebaseapp.com

> Full tutorial URL:  
> https://codeadam.ca/learning/react-firebase-forms.html

*** 

## Repo Resources

* [React.js](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)

<a href="https://codeadam.ca">
<img src="https://codeadam.ca/images/code-block.png" width="100">
</a>
