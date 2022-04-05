import {registerComponent} from './utils/registerComponent';

import components from './components/**/index.ts';
import SignUpPage from "./pages/SignUp";
import Router from "./utils/Router";
import SignInPage from "./pages/SignIn";
import ProfilePage from "./pages/Profile";
import AuthController from "./controllers/AuthController";

/**
 * Startup the app
 */
document.addEventListener('DOMContentLoaded', async () => {
  Object.values(components).forEach(component => registerComponent(component.default));


  const router = new Router();

  router
      .use('/signin', SignInPage)
      .use('/signup', SignUpPage)
      .use('/profile', ProfilePage);

  try {
    await AuthController.fetchUser();

    router.go('/profile');
  } catch (e) {
    console.log('Error fetching user', e);
    router.go('/signin');
  }

  router.start();
});