import Component from '@ember/component';
import { inject } from '@ember/service';
import ENV from '../config/environment';
import $ from 'jquery';
export default Component.extend({
	session: inject('session'),
	actions:{
		logout(){
			this.get('session').invalidate();
			//this.get('router').transitionTo('login');
			window.location.href='/login';
		},
		showMenu(){
			$('#main-menu').toggleClass("showMenu");
		}
	}
});
