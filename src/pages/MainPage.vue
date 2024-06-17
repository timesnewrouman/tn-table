<template>
	Основная страница
	<div class="d-flex mt-5">
		<router-link to="/hoursTable">
			<v-btn
				color="success mr-3"
			>
				Переход в таблицу часов
			</v-btn>
		</router-link>
		<router-link to="/daysTable">
			<v-btn
				color="success"
			>
				Переход в таблицу дней
			</v-btn>
		</router-link>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>