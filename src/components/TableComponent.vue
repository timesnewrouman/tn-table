<template>
	<v-data-table
		:headers="props.headersData"
		:items="tableData"
		:items-per-page="-1"
		density="comfortable"
		item-key="name"
		class="mainTable"
	>
		<template #bottom></template>
		<template
			v-for="header in props.headersData"
			:key="header.key"
			v-slot:[`item.${header.key}`]="{ item, index }"
		>
			<span v-if="header.key === 'stringNumber'">
				{{ index + 1 }}
			</span>
			<v-text-field
				v-else-if="props.colName === 'h'"
				v-model="item[header.key]"
				type="number"
				dense
				hide-details
				@input="limitInput(item, header.key)"
				class="mainTable__input"
			/>
			<v-icon
				v-else-if="props.colName === 'd'"
				color="success"
				icon="mdi mdi-alpha-d-circle"
				class="mainTable__mdi-icon"
			></v-icon>
		</template>
	</v-data-table>
</template>

<script setup>
import {ref, defineProps} from "vue";

const props = defineProps({
	headersData: {
		type: [Object],
		default: [],
		required: true
	},

	colName: { // colName = h/d - имена столбцов для hours/days
		type: String,
		default: 'h',
		required: false
	}
})

/*   Переменные   */

// демонстрационное заполнение таблицы данными; в реальном проекте переменная tableData будет получать данные через
// запросы к бэку, либо преобразовываться через computed
const tableData = ref(Array.from({length: 10}, () => {
	const row = {};
	for (let j = 1; j <= props.headersData.length; j++) {
		row[`${props.colName}${j}`] = props.colName === 'h' ? getRandomNumber() : 0;
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

	:deep(.v-data-table-header__content) {
		display: flex;
		justify-content: center;
	}

	:deep(.v-data-table__td) {
		padding: 0 5px;
	}

	.mainTable__mdi-icon {
		height: 25px;
		width: 25px;
		margin: 10px
	}

	.mainTable__input {
		min-width: 60px;

		:deep(.v-field__input) {
			padding: 0;
			text-align: center;
		}
	}
}
</style>