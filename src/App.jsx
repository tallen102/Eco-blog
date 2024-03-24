import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
// import Contact from "./pages/ContactPage/ContactUs";
import ChatPage from "./pages/ChatPage/ChatPage";
import Chatpage2 from "./pages/ChatPage2/Chatpage2";

function App() {
	const [authUser] = useAuthState(auth);

	return (
		<PageLayout>
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
				<Route path='/:username' element={<ProfilePage />} />
				<Route path='/Chat' element ={<ChatPage />} />
				<Route path='/Chat101' element ={<Chatpage2 />} />


			</Routes>
		</PageLayout>
	);
}

export default App;