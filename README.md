# News Room
A cross platform desktop application that organises whats happening in the world to help you learn more
about the stories according to your interest. The key feature of this application is it allow user to notify the news related to user interest after some fix amount of time defined by the user.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.
Other features are
- You can run this on Mac, Windows, Linux
- This app can also be used as web application
- You can see any news related to particular country, category (like sports, technology, etc.), news channel, language.
- You can set news related to your interest which will be shown in home screen.
- You can search any news in search bar.
- You can bookmark the news, see recently viewed news.
- You can share particular news via different platform like Facebook, Twitter, WhatsApp.
- You can enable desktop notification feature.

## Skills used
- Electron js
- Angular 7
- NodeJS
- TypeScript
- JavaScript
- HTML
- CSS Grid

## Setup for mac
- [Click here](https://drive.google.com/open?id=1i85p2Ggd9Cggrayq6MSY_zk2BVMEYXgu) to download the application and move it to application folder.

### How to use this application [for production purpose]
- For mac, windows and linux, need to deploy the app first.
- For web application, just open folder dist-win, and open index.html file. Enjoy the app.

### How to deploy this application
1. install angular 7.2.1 using `npm install @angular/cli@7.2.1`;
2. `npm install`
3. Now for web application `ng build --prod` (optional)
4. Now for installer application `npm run dist`
5. For particular OS application `npm run package-mac` or `npm run package-win` or `npm run package-linux`

## Tips to start contributing
1. Make changes to angular project then `ng build --aot`
2. Then run `npm run electron`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Screenshots
![alt Splash Screen](/ScreenShots/Splash-screen.jpg)
![alt Home](/ScreenShots/Home.jpg)
![alt Explore](/ScreenShots/Explore.jpg)
![alt Language](/ScreenShots/Language.jpg)
![alt News Channel](/ScreenShots/News-channel.jpg)
![alt Country](/ScreenShots/Country.jpg)
![alt Recently viewed](/ScreenShots/Recently-viewed.jpg)
![alt Bookmark](/ScreenShots/Bookmark.jpg)
![alt Account](/ScreenShots/Account.jpg)
