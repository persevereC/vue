<template>
	<div class='add'>
		<label>name: </label><input type="text" v-model='name'><br>
		<label>age: </label><input type="text" v-model='age'><br>
		<label>phone: </label><input type="text" v-model='phone'><br>
		<label>address: </label><input type="text" v-model='address'>
		<button v-on:click='add'>submit</button>
	</div>
</template>

<script>
	export default {
		name: 'addItem',
		data () {
			return {
				obj: {},
				name: '',
				age: '',
				phone: '',
				address: ''
			}
		},
		methods: {
	  	    add: function(){
	  	    	this.obj = {'name' : this.name, 'age' : this.age, 'phone' : this.phone, 'address' : this.address};
	  	    	console.log(this.obj)
	  		    this.$emit('addTransfer', this.obj);
	  	    }
	    }
	}
</script>