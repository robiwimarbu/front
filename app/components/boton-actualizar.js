import Component from '@ember/component';
import {get} from '@ember/object';
	
export default Component.extend({
	actions:{
		mostrar_ventana(actionName, record, event) {
			get(this, 'sendAction')(actionName, record);
			console.log(record.id);
			this.set('modal1', true);
			console.log('abrir');
		}
	}
});
