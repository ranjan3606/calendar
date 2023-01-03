import React from 'react';
// import { App } from '../../src';
import Filter from '../../src/components/Filter';
import '../../src/stylesheets/main.css';
const filters = {
		Birthdays: true,
		Holidays: true,
		'Company Events': true,
		Miscellaneous: true,
	}
const FilterEx = () => <Filter filters={filters}/>;

export default FilterEx;