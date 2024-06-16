<template>
	<v-data-table
		:headers="hoursInDay"
		:items="tableData"
		:items-per-page="-1"
		density="comfortable"
		item-key="name"
		class="mainTable"
	>
		<template #bottom></template>
		<template
			v-for="header in hoursInDay"
			:key="header.key"
			v-slot:[`item.${header.key}`]="{ item, index }"
		>
			<span v-if="header.key === 'stringNumber'">{{ index + 1 }}</span>
			<v-text-field
				v-else
				v-model="item[header.key]"
				type="number"
				dense
				hide-details
				@input="limitInput(item, header.key)"
				class="abcd"
			/>
		</template>
	</v-data-table>
</template>

<script setup>
import {hoursInDay} from "@components/headers/tableHeaders.js";
import {ref} from "vue";

/*   Переменные   */

// демонстрационное заполнение таблицы данными; в реальном проекте переменная tableData будет получать данные через
// запросы к бэку, либо преобразовываться через computed
const tableData = ref(Array.from({length: 15}, () => {
	const row = {};
	for (let j = 1; j <= 24; j++) {
		row[`h${j}`] = getRandomNumber();
	}
	return row;
}));

/*   Переменные   */

/*   Функции   */

function getRandomNumber() {
	return Math.floor(Math.random() * 999999) + 1;
}

function limitInput(item, key) {
	if (item[key].length > 6) {
		// console.log(item[key]);
		item[key] = item[key].slice(0, 6);
		alert(`максимальная длина поля - 6 символов`);
	}
}

/*   Функции   */

</script>

<style lang="scss" scoped>
.mainTable {
	max-width: 1000px;
	max-height: 500px;

	:deep .v-data-table-header__content {
		display: flex;
		justify-content: center;
	}

	:deep .v-data-table__td {
		padding: 0 5px;
	}
}

.abcd {
	min-width: 60px;

	:deep .v-field__input {
		padding: 0;
		text-align: center;
	}
}
</style>