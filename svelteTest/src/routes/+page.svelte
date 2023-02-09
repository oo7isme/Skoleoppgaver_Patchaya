<script>
	import math from '../routes/mathematic/math.svelte';
	let bg =
		'https://external-preview.redd.it/uhq5zTcMPM3tOW_fbUz4PayDt_5pkEXdyXXoRWs3XOg.jpg?auto=webp&s=e06461124c1ccfdba7e9ece763b644ff68eeb06b';
	let plane = 'http://gifimgs.com/animations/transportation/planes/cartoon_plane.gif';
	// let tower = 'https://www.seekpng.com/png/full/519-5191875_twin-towers-of-nyc-skyscraper.png';
	// function move(event) {
	// 	var k = event.keyCode,
	// 		chrId = document.getElementById('plane'),
	// 		chr = {
	// 			updown: function () {
	// 				var y = parseInt(getComputedStyle(chrId).top);
	// 				if (k == 38) {
	// 					--y * 100;
	// 				} else if (k == 40) {
	// 					++y * 100;
	// 				}

	// 				return y;
	// 			},

	// 			leftright: function () {
	// 				var x = parseInt(getComputedStyle(chrId).left);
	// 				if (k == 37) {
	// 					--x * 100;
	// 				} else if (k == 39) {
	// 					++x * 100;
	// 				}

	// 				return x;
	// 			}
	// 		};

	// 	chrId.style.top = chr.updown() + 'px';
	// 	chrId.style.left = chr.leftright() + 'px';
	// }
	// document.addEventListener('keydown', move);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<img src={bg} alt="bg" id="bg" />
	<img src={plane} alt="plane" id="plane" />
	<!-- <img src={tower} alt="tower" id="tower" /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	#bg {
		width: 100%;
		height: 100vh;
	}
	#plane {
		position: absolute;
		z-index: 1;
	}
	/* #tower {
		position: absolute;
		margin-right: 60%;
	} */
</style>
