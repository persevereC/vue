<template>
    <div class='home'>
        <el-row class='header'>
	    	<el-col :span="24">
		    	<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                  <h2 class="title">vue-ad-test</h2>
				  <el-menu-item index="1" class='fr'>item1</el-menu-item>
				  <el-menu-item index="3" class='fr'>item2</el-menu-item>
				</el-menu>
				<div class="line"></div>
		    </el-col>
	    </el-row>
	    <el-row class='section'>
	        <el-col :span="3" class='nav'>
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
		    <el-col :span="21" class='content'>
		        <el-breadcrumb separator="/" class='bread'>
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
				</el-breadcrumb>
				<transition>
					<router-view></router-view>
				</transition>
				<el-col :span="21" class='footer'>
                    <div class="line"></div>
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
        	width: 100%;height: 60px;line-height: 60px;position: absolute;top: 0;left: 0;background: #1D8CE0;
            .title {
                    display: inline-block;margin: 0;color: #fff;float: left;
            }
            .fr {
                float: right;
            }
        }
        .section {
            width: 100%;position: absolute;top: 60px;bottom: 0;
            .nav {
            	height: 100%;text-decoration: none;color: #fff;background: #1f2d3d;
            	.bk {
            		background: #475669;
            	}
            }
            .content {
            	background: #fff;height: 100%;
            	.bread {
            		font-size: 16px;margin: 10px;
            	}
            }
            .footer {
                position: absolute;bottom: 10px;text-align: center;
            }
        }
    }
</style>