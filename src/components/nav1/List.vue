<template>
  <div class='list'>
    
    <!-- <div class='dialog' v-if='status'>
      <label>name: </label><input type="text" v-model='name'><br>
      <label>age: </label><input type="text" v-model='age'><br>
      <label>phone: </label><input type="text" v-model='phone'><br>
      <label>address: </label><input type="text" v-model='address'>
      <el-button type="primary" v-on:click='add' class='submit'>submit</el-button>
    </div> -->
    <el-button type="primary" v-on:click='show' class='addBtn'>addItem</el-button>
    <el-dialog title="详细信息" v-model="status">
      <el-form >
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="age" :label-width="formLabelWidth">
          <el-input v-model="age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="phone" :label-width="formLabelWidth">
          <el-input v-model="phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth">
          <el-input v-model="address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" v-on:click='add' class='submit'>submit</el-button>
      </div>
    </el-dialog>
    <el-table :data="items" height="750" border style="width: 100%">
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
import moc from 'mockjs'
console.log(moc)
var Random = moc.Random
var datas = [];

for (let i = 0; i < 20; i++) {
  datas.push(moc.mock({
    name: moc.Random.cname(),
    'age|18-60': 1,
    phone: moc.Random.date(),
    address: moc.mock('@county(true)'),
  }));
}
 
console.log(datas)
export default {
  name: 'list',
  data (){ 
    return {
      name: '',
      age: '',
      phone: '',
      address: '',
      region: '',
      ite: {},
      nitem: {},
      items: [],
      status: false,
      isedit: false,
      formLabelWidth: '120px'
    }
  },
  mounted () {
    this.items = datas;
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
    float: right;font-size: 12px;margin-top: -35px!important
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