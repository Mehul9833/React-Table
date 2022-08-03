import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { SortingTable } from "./components/SortingTable";
import { TableResizeAble } from "./components/TableResizeAble";
function App() {
	return (
		<div className="App">
			{
				// <BasicTable />
			}
			{
				// <SortingTable />
			}
			{
				// <FilteringTable />
			}
			<TableResizeAble />
		</div>
	);
}

export default App;
