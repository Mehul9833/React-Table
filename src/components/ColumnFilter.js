import React from "react";

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column;

	return (
		<span>
			Search: {""}
			<input
				type="search"
				id="filter"
				name="filter"
				value={filterValue || ""}
				onChange={(e) => setFilter(e.target.value)}
			></input>
		</span>
	);
};
