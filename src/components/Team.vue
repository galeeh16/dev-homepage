<template>
	<section id="teams" sytle="margin-top: 30px; margin-bottom: 100px; padding: 50px 0px; position: relative;">
		<div class="d-flex justify-content-center">
			<h2 class="text-center h2-text">Meet Our Team</h2>
		</div>
		<p class="text-center" style="margin-bottom: 40px;">Meet our team member who create CBS Web and many more apps</p>

		<div class="container">
			<div class="grid">
				<div class="team" v-for="i in 7" :key="i">
					<div class="team-image">
						<img :src="HackerImage" alt="Kurniawan Halim" style="width: 100%; max-width: 170px;">
					</div>
					<div class="team-body">
						<p class="text-dark" style="font-size: 18px; font-weight: 500;">Kurniawan Halim</p>
						<p class="text-gray" style="font-size: 15px;">Lead of Core Team</p>
						<p class="text-gray" style="font-size: 13px; margin-top: 1rem;">18 years experience</p>
						<p class="text-gray" style="font-size: 13px;">Since 2004-01-01</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import HackerImage from '../assets/hacker.png';
</script>