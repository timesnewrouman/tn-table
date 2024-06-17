<template>
	<router-link to="/daysTable">
		<v-btn
			color="success"
			class="mb-10"
		>
			Переход в таблицу дней
		</v-btn>
	</router-link>
	<TableComponent
		:headersData="hoursInDay"
		:colName="'h'"
	/>
</template>

<script setup>
import TableComponent from "@components/TableComponent.vue";
import {hoursInDay} from "@components/headers/tableHeaders.js";

</script>

<style scoped>

</style>