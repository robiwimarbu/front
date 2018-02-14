import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from '../config/environment';
import { inject } from '@ember/service';
import $ from 'jquery';
export default Ember.Route.extend(AuthenticatedRouteMixin,{
	session: inject('session'),
	model:function(){
		let usuario = {};
		usuario["imge_pth"]="";
		usuario["prmr_nmbre"]="";
		usuario["sgndo_nmbre"]="";
		usuario["prmr_aplldo"]="";
		usuario["sgndo_aplldo"]="";
		usuario["nmro_idntfccn"]="";
		usuario["fcha_ncmnto"]="";
		usuario["drccn"] ="";
		usuario["id_brro_ge"]="1";
		usuario["tpo_zna"]="1";
		usuario["id_estrto_ge"]="1";
		usuario["id_tpo_idntfccn_ge"]="1";
		usuario["id_sxo_ge"]="1";
		usuario["id_tpo_usro_sld_ge"]="1";
		var modelo=[];
		modelo[0] = usuario; 
		return modelo;
	}
});