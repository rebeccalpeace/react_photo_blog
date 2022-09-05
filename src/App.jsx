import { useState } from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Register from "./components/Register";
import Profile from "./components/Profile";
import AlertMessage from "./components/AlertMessage";
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import HomePage from './components/HomePage';
import ViewPosts from './components/ViewPosts';
import MyCard from './components/MyCard';
import SinglePost from './components/SinglePost';
import SingleWordPost from './components/SingleWordPost';
import EditForm from './components/EditForm';



function App(props) {

	const now = new Date();
	const [username, setUsername] = useState(null);
	const [message, setMessage] = useState(null);
	const [category, setCategory] = useState(null);
	const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('expiration')) > now) ? true : false)

	const flashMessage = (message, category) => {
		setMessage(message);
		setCategory(category);
	}

	const verifyUser = (username) => {
		setUsername(username);
	}

	const login = () => {
		setLoggedIn(true)
	}

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('expiration');
		setLoggedIn(false)
	}


	return (
		<>
			<Navbar logout={logout} loggedIn={loggedIn}/>
			<div className="container">
				{message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/profile' element={<Profile loggedIn={loggedIn} username={username} />} />
					<Route path='/register' element={<Register flashMessage={flashMessage} />} />
					<Route path='/login' element={<Login login={login} flashMessage={flashMessage} username={username} verifyUser={verifyUser} />} />
					<Route path='/create' element={<CreatePost flashMessage={flashMessage} loggedIn={loggedIn}/>} />
					<Route path='/view' element={<ViewPosts loggedIn={loggedIn}/>} />
					<Route path='/singlePost' element={<SinglePost />} />
					<Route path='/singleWordPost' element={<SingleWordPost />} />
					<Route path='/editForm' element={<EditForm />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
