<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){ 
    return {
    }
  }
  // mounted: function(){
  //   this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {
  //       headers: {

  //       },
  //       emulateJSON: true
  //   }).then(function(resp){
  //     console.log(resp)
  //     this.items = resp.data.subjects
  //   },function(resp){
  //     console.log(resp)
  //   })
  // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
}
</style>
