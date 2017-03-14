<template>
  <div class="world">
    <label>子组件World：</label>
    <input v-model='name' v-on:keyup='add'>
  </div>
</template>

<script>
export default {
  name: 'world',
  data () {
    return {
      msg: 'this id component World',
      counter: 0,
      name: ''
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
  	add: function(){
  		this.$emit('addTransfer', this.name);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
