<template>
  <div id="app">
    <router-view></router-view>
    <AddItem v-on:addTransfer='submit'></AddItem>
    <!-- <h2>{{ name }}</h2> -->
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>phone</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='item in items'>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import World from './components/World';
import AddItem from './components/AddItem';
export default {
  name: 'app',
  data (){ 
    return {
      msg: 'we are young',
      age: 18,
      total: 0,
      items: [],
      name: ''
    }
  },
  components: {World, AddItem},
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
  methods: {
    submit (obj){
      this.items.push(obj);
    }
  }
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
}
.world{display: inline-block;}
</style>
