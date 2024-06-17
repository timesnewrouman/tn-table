<template>
	<router-link to="/hoursTable">
		<v-btn
			color="success"
			class="mb-10"
		>
			Переход в таблицу часов
		</v-btn>
	</router-link>
	<TableComponent
		:headersData="daysInMonth"
		:colName="'d'"
	/>
</template>

<script setup>
import TableComponent from "@components/TableComponent.vue";
import {daysInMonth} from "@components/headers/tableHeaders.js";

</script>

<style scoped>

</style>