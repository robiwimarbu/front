import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('login');
  this.route('protected');
  this.route('usuarios');
  this.route('preguntasg');
  this.route('perfiles');
  this.route('create-pregunta');
  this.route('update-pregunta');
});

export default Router;