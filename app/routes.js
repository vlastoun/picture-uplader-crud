// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

/* eslint-disable */

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

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
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
          import('containers/AdminPage/reducer'),
          import('containers/AdminPage/sagas'),
          import('containers/AdminPage'),
        ]);
        const importAnotherModules = Promise.all([
          import('containers/CategoryContainer/reducer'),
        ]);
        const importAnotherSagas = Promise.all([
          import('containers/CategoryContainer/sagas'),
        ])
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, sagas, component]) => {
          injectReducer('admin', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
        importAnotherModules.then((result)=>{
          injectReducer('categories', result[0].default)
        })
        importAnotherSagas.then((result)=>{
          result.forEach((saga)=>{
            injectSagas(saga.default);
          })
        })
        importModules.catch(errorLoading);
        importAnotherModules.catch(errorLoading);
      },
    },
    {
          path: '/admin/signup',
          name: 'signup',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/SignupContainer'),
              import('containers/SignupContainer/reducer'),
              import('containers/SignupContainer/sagas'),
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
          import('containers/LoginContainer'),
          import('containers/LoginContainer/reducer'),
          import('containers/LoginContainer/sagas'),
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
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
