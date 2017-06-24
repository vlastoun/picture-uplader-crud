// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  const categories = {
    path: '/admin/categories',
    name: 'categories',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/CategoryContainer'),
        System.import('containers/CategoryContainer/reducer'),
        System.import('containers/CategoryContainer/sagas'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component, reducer, sagas]) => {
        injectReducer('categories', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });
      importModules.catch(errorLoading);
    },
  };
  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homepage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/admin',
      name: 'admin',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/AdminPage/reducer'),
          System.import('containers/AdminPage/sagas'),
          System.import('containers/AdminPage'),
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, sagas, component]) => {
          injectReducer('admin', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
      childRoutes: [
        categories,
      ],
    },
    {
      path: '/admin/signup',
      name: 'signup',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignupContainer'),
          System.import('containers/SignupContainer/reducer'),
          System.import('containers/SignupContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, reducer, sagas]) => {
          injectReducer('signup', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
    },
    {
      path: '/admin/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginContainer'),
          System.import('containers/LoginContainer/reducer'),
          System.import('containers/LoginContainer/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, reducer, sagas]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
