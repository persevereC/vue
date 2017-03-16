<template>
    <div class='home'>
    	<header>
	    	<h1>test-header</h1>
	    </header>
	    <nav>
    		<router-link to="/hello" class='nav'>Hello</router-link><br><br><br>
      		<router-link to="/list" class='nav'>List</router-link>
    	</nav>
	    <section>
	    	<h2 class="title">{{$route.name}}</h2>
			<transition>
				<router-view></router-view>
			</transition>
	    </section>
		<footer>
	        <h3>test-footer</h3>
	    </footer>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
	header {
		width: 100%;height: 50px;background: #eee;
	}
	nav{
		width: 29%;padding: 30px 0;background: #aaa;display: inline-block;float: left;
		.nav {
			padding: 30px;
		}
	}
	section{
		width: 70%;padding: 10px 0 30px;background: #ccc;display: inline-block;
		.title {
           margin: 0;text-align: left;
		}
	}
	footer {
		width: 100%;height: 50px;background: #eee;
	}
</style>