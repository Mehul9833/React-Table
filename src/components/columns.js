import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
	{
		Header: "Id",
		Footer: "Id",
		accessor: "id",
		disableFilters: true,
	},
	{
		Header: "First Name",
		Footer: "First Name",
		accessor: "first_name",
	},
	{
		Header: "Last Name",
		Footer: "Last Name", // here it is title of the column
		accessor: "last_name", // accessor should be same as data obj key name
	},
	{
		Header: "Date of Birth",
		Footer: "Date of Birth",
		accessor: "date_of_birth",
		Cell: ({ value }) => {
			return format(new Date(value), "dd/MM/yyyy");
		}, //Cell is responsible what to be rendered in UI
	},
	{
		Header: "Country",
		Footer: "Country",
		accessor: "country",
		disableSortBy: true,
	},
	{
		Header: "Phone",
		Footer: "Phone",
		accessor: "phone",
		disableSortBy: true,
	},
];

export const GROUPED_COLUMNS = [
	{
		Header: "Id",
		Footer: "Id",
		accessor: "id",
	},
	{
		Header: "Name",
		Footer: "Name",
		columns: [
			{
				Header: "First Name",
				Footer: "First Name",
				accessor: "first_name",
			},
			{
				Header: "Last Name",
				Footer: "Last Name",
				accessor: "last_name",
			},
		],
	},
	{
		Header: "Info",
		Footer: "Info",
		columns: [
			{
				Header: "Date of Birth",
				Footer: "Date of Birth",
				accessor: "date_of_birth",
			},
			{
				Header: "Country",
				Footer: "Country",
				accessor: "country",
			},
			{
				Header: "Phone",
				Footer: "Phone",
				accessor: "phone",
			},
		],
	},
];
