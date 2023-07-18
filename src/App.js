import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Logout from './Components/LogOut/Logout';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoutes from './Routes/PrivateRoutes';
import Profile from './Components/Profile/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }, {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/logout',
          element: <Logout></Logout>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/profile',
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
