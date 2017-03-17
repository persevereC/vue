<template>
    <div class='home'>
        <el-row class='header'>
	    	<el-col :span="24">
		    	<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item index="1">item1</el-menu-item>
				  <el-menu-item index="3">item2</el-menu-item>
				</el-menu>
				<div class="line"></div>
		    </el-col>
	    </el-row>
	    <el-row class='section'>
	        <el-col :span="4" class='nav'>
			    <el-menu default-active="2" class="el-menu-vertical-demo bk" @open="handleOpen" @close="handleClose" theme="dark">
			      <el-submenu index="1">
			        <template slot="title">nav1</template>
			        <el-menu-item index="2"><router-link to="/hello" class='nav'>Hello</router-link></el-menu-item>
			        <el-menu-item index="3"><router-link to="/list" class='nav'>List</router-link></el-menu-item>
			      </el-submenu>
			      <el-menu-item index="4">nav2</el-menu-item>
			      <el-menu-item index="5">nav3</el-menu-item>
			    </el-menu>
			</el-col>
		    <el-col :span="20" class='content'>
		        <el-breadcrumb separator="/" class='bread'>
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
				</el-breadcrumb>
				<transition>
					<router-view></router-view>
				</transition>
				<el-col :span="24">
			        <h3>test-footer</h3>
			    </el-col>
		    </el-col>
	    </el-row>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
        activeIndex: '1'
    }
  },
  methods: {
  	handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<style lang='scss'>
    .home {
    	position: absolute;top: 0;bottom: 0;width:100%;
        .header {
        	width: 100%;height: 60px;position: absolute;top: 0;left: 0;background: #1D8CE0
        }
        .section {
            width: 100%;position: absolute;top: 60px;bottom: 0;
            .nav {
            	background: #475669;height: 100%;
            	.bk {
            		background: #475669;
            	}
            }
            .content {
            	background: #fff;height: 100%;
            	.bread {
            		font-size: 20px;margin: 20px;
            	}
            }
        }
    }
</style>