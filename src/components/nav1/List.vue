<template>
  <div class='list'>
    <button class='addBtn' v-on:click='show'>addItem</button>
    <div class='dialog' v-if='status'>
      <label>id: </label><input type="text" v-model='id'><br>
      <label>name: </label><input type="text" v-model='name'><br>
      <label>age: </label><input type="text" v-model='age'><br>
      <label>phone: </label><input type="text" v-model='phone'><br>
      <label>address: </label><input type="text" v-model='address'>
      <button v-on:click='add'>submit</button>
    </div>
    <div class='table'>
      <table border='1'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>phone</th>
            <th>address</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in items'>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.address }}</td>
            <td><span v-on:click='edit(item)'>修改</span>|<span v-on:click='del(item)'>删除</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data (){ 
    return {
      id: '',
      name: '',
      age: '',
      phone: '',
      address: '',
      ite: {},
      nitem: {},
      items: [],
      status: false,
      isedit: false
    }
  },
  methods: {
    show (){
      this.status = true;
    },
    add (){
      if(this.isedit == true){
        this.nitem = {id:this.id, name:this.name, age:this.age, phone:this.phone, address:this.address};        
        this.items.splice(this.items.indexOf(this.ite),1,this.nitem);
        this.isedit = false;
        this.ite.length = 0;
      }else{
        this.items.push({id:this.id, name:this.name, age:this.age, phone:this.phone, address:this.address})
      }
      this.status = false;

        this.id = '';
        this.name = '';
        this.age = '';
        this.phone = '';
        this.address = '';
    },
    edit (item){
      this.isedit = true;
      this.status = true;
      this.id = item.id;
      this.name = item.name;
      this.age = item.age;
      this.phone = item.phone;
      this.address = item.address;
      // this.ite = {id:this.id, name:this.name, age:this.age, phone:this.phone, address:this.address}
      this.ite = item;
    },
    del (item){
      this.items.splice(this.items.indexOf(item),1);
    }
  }
}
</script>

<style lang='scss'>
  .addBtn {
    padding: 10px;border: 1px solid;border-radius: 10px;
  }
  .dialog {
    padding: 20px;border: 10px solid;
  }
  .table{
    margin-top: 20px;padding: 20px;border: 10px solid;
  }
  table {
    border: 1;
  }
</style>