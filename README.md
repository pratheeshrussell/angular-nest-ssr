# Angular SSR with NestJS

This is just a base setup. Switch to other branches to checkout other functions.

# Branches
## main
this contains just the base setup
## 1-Routing
Contains demo code for routing and component navigation. Also has an example on using tansferstate api

## 2-Interacting-With-NestJS
Code for making calls to NestJS. Mentions about TransferHttpCacheModule, provideClientHydration

# Setup
Install the dependency  
```
ng add @nestjs/ng-universal
```
In case you get 'domino' package missing error while running it
```
npm i domino
```

# Run
To run in dev mode  
```
npm run dev:ssr
```

To get production build and to run it
```
npm run build:ssr

# to serve in production
npm run serve:ssr
```

# versions
* Angular 16  
* NestJS 9  