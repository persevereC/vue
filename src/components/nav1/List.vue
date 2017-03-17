<template>
  <div class='list'>
    <el-button type="primary" v-on:click='show' class='addBtn'>addItem</el-button>
    <div class='dialog' v-if='status'>
      <label>name: </label><input type="text" v-model='name'><br>
      <label>age: </label><input type="text" v-model='age'><br>
      <label>phone: </label><input type="text" v-model='phone'><br>
      <label>address: </label><input type="text" v-model='address'>
      <el-button type="primary" v-on:click='add' class='submit'>submit</el-button>
    </div>
    <el-table :data="items" height="250" border style="width: 100%">
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" @click="edit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="del(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data (){ 
    return {
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
        this.nitem = {name:this.name, age:this.age, phone:this.phone, address:this.address};        
        this.items.splice(this.items.indexOf(this.ite),1,this.nitem);
        this.isedit = false;
        this.ite.length = 0;
      }else{
        this.items.push({name:this.name, age:this.age, phone:this.phone, address:this.address})
      }
      this.status = false;

        this.name = '';
        this.age = '';
        this.phone = '';
        this.address = '';
    },
    edit (index, row){
      console.log(index, row)
      this.isedit = true;
      this.status = true;
      this.name = row.name;
      this.age = row.age;
      this.phone = row.phone;
      this.address = row.address;
      // this.ite = {id:this.id, name:this.name, age:this.age, phone:this.phone, address:this.address}
      this.ite = row;
    },
    del (index, row){
      this.items.splice(this.items.indexOf(row),1);
    }
  }
}
</script>

<style lang='scss'>
  .addBtn {
    float: right;
  }
  .dialog {
    padding: 20px;border: 10px solid;
    .submit {
      background: #475669;color: #fff;
    }
  }
  .table{
    margin-top: 30px;padding: 20px;border: 10px solid;
  }
  table {
    border: 1;
  }
</style>