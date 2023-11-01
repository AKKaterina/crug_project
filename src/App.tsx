import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { UserManagementList } from "./pages/UserManagementList";
import { Error } from "./pages/Error";
import { Edit } from "./pages/Edit";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "/registration",
		element: <Registration />,
        errorElement: <Error />,
	},
	{
		path: "/loged",
		element: <UserManagementList />,
        errorElement: <Error />,
	},
	{
		path: "/edit",
		element: <Edit />,
        errorElement: <Error />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
