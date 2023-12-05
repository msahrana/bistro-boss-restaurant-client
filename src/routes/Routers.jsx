import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import OurMenu from "../pages/Menu/Menu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import Reservation from "../pages/Dashboard/Reservation/Reservation";


  export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/ourMenu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/contactUs',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/ourShop/:category',
          element: <OurShop></OurShop>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user route
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'myBookings',
          element: <MyBookings></MyBookings>
        },
        {
          path: 'review',
          element: <AddReview></AddReview>
        },
        {
          path: 'reservation',
          element: <Reservation></Reservation>
        },
        // admin user route
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'bookings',
          element: <AdminRoute><MyBookings></MyBookings></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);