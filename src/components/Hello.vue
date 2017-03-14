<template>
  <div class="hello">
    <input v-model="age"><span>{{ age }}</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      age: 123
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    reversedMessage: function(){
      return this.msg.split('').reverse().join('')
    },
    now: function(){
      return Date.now()+this.msg;
    }
  },
  methods: {
    hi: function(msg, event){
      console.log(event)
      if (event) event.preventDefault()
      alert(msg)
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

input {
  width: 200px;
  height: 30px;
  font-size: 30px;
}

span{
  font-size: 30px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
