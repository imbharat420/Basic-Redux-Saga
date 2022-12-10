**CRA with redux-saga**
 > yarn create react-app my-app --typescript

 > yarn start




 Installing Dependencies


> yarn add redux@4.0.4 react-redux@7.1.0 redux-saga@1.0.5 redux-saga-test-plan@4.0.0-beta.4 typesafe-actions@4.4.2 enzyme@3.10.0 redux-mock-store@1.5.3 enzyme-adapter-react-16@1.14.0

> yarn add --dev @types/react-redux@7.1.1 @types/enzyme@3.10.3 @types/redux-mock-store@1.0.1 @types/enzyme-adapter-react-16@1.0.5


```
 src
├── App.css
├── App.test.tsx
├── App.tsx
├── components
│   ├── post.tsx
│   └── postList.tsx
├── containers
│   ├── __tests__
│   │   └── postList.container.spec.tsx
│   └── postList.tsx
├── index.css
├── index.tsx
├── logo.svg
├── react-app-env.d.ts
├── serviceWorker.ts
└── state
    ├── configureStore.dev.ts
    ├── ducks
    │   ├── index.ts
    │   └── post
    │       ├── __tests__
    │       │   ├── __mockData__
    │       │   ├── actions.spec.ts
    │       │   │   └── postsData.json
    │       │   ├── reducers.spec.ts
    │       │   └── sagas.spec.ts
    │       ├── actions.ts
    │       ├── reducers.ts
    │       ├── sagas.ts
    │       └── types.ts
    ├── index.ts
    ├── middlewares
    │   └── saga.ts
    └── utils
        └── apiCaller.ts
```