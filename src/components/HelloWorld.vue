<template>
	<div class="hello">
		<div class="hello-top">
			我是count={{count}}
			<button @click="setCount">count++</button>
			<button @click="setCount2">count--</button>
		</div>
		<div class="hello-section">
			我是section={{counts}}
		</div>
	</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			counts: ''
		}
	},
	computed: {

		...mapState(['count'])
	},
	mounted() {
		this.getCounts()
		
	},
	methods: {
		getCounts() {
			this.counts = this.count
		},
		setCount() {
			this.counts++
			// this.$store.commit('INCREMENT', this.count)
			this.increment(this.counts)
		},
		setCount2() {
			this.counts--
			this.decrementCount2(this.counts)
		},
		...mapMutations({
			increment: 'INCREMENT'
		}),
		...mapActions({
			decrementCount2: 'decrementCount'
		})
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.hello {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		&-top {
			height: 105px;
			width: 100%;
			background: lightblue;
		}
		&-section {
			flex: 1;
			background: pink;
		}
	}
</style>
