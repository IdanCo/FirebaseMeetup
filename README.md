# Firebase Demo Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Meetup Presentation

Checkout `/Firebase-Meetup.pdf`

## Prerequisites
1. Install Angular CLI
2. Create a new [Firebase project](https://console.firebase.google.com/)
3. Open `/src/environments/environment.ts` and add your Firebase configuration. You can find your project configuration in [the Firebase Console](https://console.firebase.google.com). From the project overview page, click **Add app** and select **Add Firebase to your web app**.

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```
4. The _SignIn_ component implements Google Login. Enable it through the authentication section in your firebase console.

**Notice** This project uses [Angular Firebase](https://github.com/angular/angularfire2), which is an angular wrapper of the [firebase js] library. Checkout [their tutorial](https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md) for details and code samples.

## Install Dependencies

Run `npm install` inside the project library.
**AND ALSO** inside `./functions` folder if you plan to deploy them.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory, which can later be deployed to firebase.

## Deploy To Firebase

1. Install [Firebase CLI](https://firebase.google.com/docs/cli/)
2. Run `firebase login` to connect to your account
3. Run `firebase use --add` select your project and give it the alias 'default'
4. Run `firebase deploy` to deploy your project.

**NOTICE:** `firebase deploy` will also try to upload the angular build to your *firebase hosting*, so make sure you run `ng build` first.

## More Resources

1. Excellent source for Angular Firebase Videos - https://angularfirebase.com/
2. Great videos about firebase - https://www.youtube.com/user/Firebase?hl=he
