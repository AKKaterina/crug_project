import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { UserManagementList } from "./pages/UserManagementList";
import { Error } from "./pages/Error";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "/registration",
		element: <Registration />,
        errorElement: <Error />,
	},
	{
		path: "/",
		element: <UserManagementList />,
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
