# Ionic x React

## Required
`npm install -g ionic cordova`
`npm install -g @ionic/cli native-run cordova-res`

## Start Guide

## initialize
```sh
npm i
npm run chmod
npm run createkey <Alias>
```

## Application setting
1. app.json  
- Enter ja and en application name
- Enter extra permission required in capacitor

2. capacitor.config.json  
Enter AppId

## Debug
`ionic serve`

## Publish
1. Command
```sh
# ja
npm run release--android
# en
npm run release--android--en
```

## Once Required
```sh
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore android/app/build/outputs/apk/release/app-release-unsigned.apk test
./zipalign -f -v 4 android/app/build/outputs/apk/release/app-release-unsigned.apk android/app/build/outputs/apk/release/app-release.apk
ionic capacitor add android
```

## .env sample
```
REACT_APP_FIREBASE_API_KEY =
REACT_APP_FIREBASE_AUTH_DOMAIN =
REACT_APP_FIREBASE_PROJECT_ID =
REACT_APP_FIREBASE_STORAGE_BUCKET =
REACT_APP_FIREBASE_MESSAGING_SENDER_ID =
REACT_APP_FIREBASE_APP_ID =

REACT_APP_ADMOB_BANNER_ANDROID =
REACT_APP_ADMOB_INTERSTITIAL_ANDROID =
REACT_APP_ADMOB_REWARDVIDEO_ANDROID =

```

