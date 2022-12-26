<template>
	<section id="teams" style="margin-top: 30px; padding: 50px 0px; position: relative;">
		<div class="d-flex justify-content-center">
			<h2 class="text-center h2-text">{{ $t('meet_our_team') }}</h2>
		</div>
		<p class="text-center" style="margin-bottom: 40px;">{{ $t('meet_our_team_desc') }}</p>

		<div class="container">
			<div class="grid">
				<div class="team" v-for="team in teams" :key="team.id">
					<div class="team-image">
						<img :src="HackerImage" alt="Kurniawan Halim" style="width: 100%; max-width: 170px;">
					</div>
					<div class="team-body">
						<p class="text-dark" style="font-size: 18px; font-weight: 500;">{{ team.name }}</p>
						<p class="text-gray" style="font-size: 15px;">{{ team.title }}</p>
						<p class="text-gray" style="font-size: 13px; margin-top: 1rem;">{{ $t('experience', {
		year:
			getAge(team.since)
	})
}}
						</p>
						<p class="text-gray" style="font-size: 13px;">{{ $t('since', { date: team.since }) }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import HackerImage from '../assets/hacker.png';
import { getAge } from '../composables/useHelper';

const teams = [
	{
		id: 1,
		name: 'Kurniawan Halim',
		title: 'Lead of Core Team',
		since: '2004-01-01'
	},
	{
		id: 2,
		name: 'Angga Baskoro',
		title: 'Fullstack Developer',
		since: '2007-01-01'
	},
	{
		id: 3,
		name: 'Sandy Pratama Hidayat',
		title: 'Fullstack Developer',
		since: '2015-01-01'
	},
	{
		id: 4,
		name: 'Galih Anggoro Jati',
		title: 'Fullstack Developer',
		since: '2018-11-04'
	},
	{
		id: 5,
		name: 'Faisal Achmad Dwi Cahyo',
		title: 'Fullstack Developer',
		since: '2018-12-01'
	},
	{
		id: 6,
		name: 'Rizhul Januar Ramadhan',
		title: 'Fullstack Developer',
		since: '2019-03-01'
	},
	{
		id: 7,
		name: 'Dede Sumantri',
		title: 'Fullstack Developer',
		since: '2019-11-01'
	},
];
</script>