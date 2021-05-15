<template>
    <div id="scroll" class="scroll">
       <a><span></span></a>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.scroll {
	a {
		position: absolute;
		bottom: 20px;
		left: 50%;
		z-index: 2;
		display: inline-block;
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		color: #fff;
		font: normal 400 20px/1 'Josefin Sans', sans-serif;
		letter-spacing: .1em;
		text-decoration: none;
		transition: opacity .3s;
		&:hover {
			opacity: .5;
		}
	}
}


#scroll {
	a {
		padding-top: 60px;
		span {
			position: absolute;
			top: 0;
			left: 50%;
			width: 20px;
			height: 20px;
			margin-left: -12px;
			border-left: 1px solid #fff;
			border-bottom: 1px solid #fff;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			box-sizing: border-box;
		}
	}
}




</style>