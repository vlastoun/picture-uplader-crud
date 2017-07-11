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

  const settings = {
    path: '/admin/settings',
    name: 'settings',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/SettingsPage'),
        System.import('containers/SettingsPage/sagas'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component, sagas]) => {
        injectSagas(sagas.default);
        renderRoute(component);
      });
      importModules.catch(errorLoading);
    },
  };
  const categories = {
    path: '/admin/categories',
    name: 'categories',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/CategoriesPage'),
        System.import('containers/CategoriesPage/reducer'),
        System.import('containers/CategoriesPage/sagas'),
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
  const posts = {
    path: '/admin/posts',
    name: 'posts',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/PostsPage'),
        System.import('containers/PostsPage/reducer'),
        System.import('containers/PostsPage/sagas'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component, reducer, sagas]) => {
        injectReducer('posts', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });
      importModules.catch(errorLoading);
    },
  };
  const singlePost = {
    path: '/admin/post',
    name: 'categories',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/PostPage'),
        System.import('containers/PostPage/reducer'),
        System.import('containers/PostPage/sagas'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component, reducer, sagas]) => {
        injectReducer('post', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });
      importModules.catch(errorLoading);
    },
  };
  const editPost = {
    path: '/admin/post/:slug',
    name: 'categories',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/EditPostPage'),
        System.import('containers/EditPostPage/reducer'),
        System.import('containers/EditPostPage/sagas'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component, reducer, sagas]) => {
        injectReducer('editPost', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });
      importModules.catch(errorLoading);
    },
  };
  const post = {
    path: '/post/:slug',
    name: 'post',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('containers/Post'),
        System.import('containers/Post/reducer'),
        System.import('containers/Post/sagas'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([component, reducer, sagas]) => {
        injectReducer('post', reducer.default);
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
      childRoutes: [
        post,
      ],
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
        categories, posts, singlePost, editPost, settings,
      ],
    },
    {
      path: '/admin/signup',
      name: 'signup',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/SignupPage'),
          System.import('containers/SignupPage/reducer'),
          System.import('containers/SignupPage/sagas'),
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
          System.import('containers/LoginPage'),
          System.import('containers/LoginPage/reducer'),
          System.import('containers/LoginPage/sagas'),
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
