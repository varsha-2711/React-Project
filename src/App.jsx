import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';

import ProtectedRoute from './components/ProtectedRoute';

import UserDashboard from './user/UserDashboard';
import UserHome from './user/UserHome';
import BrowseProducts from './user/BrowseProducts';
import ProductDetails from './user/ProductDetails';
import SellProducts from './user/SellProducts';
import MyListing from './user/MyListing';
import Wishlist from './user/Wishlist';
import MyProfile from './user/MyProfile';

import AdminDashboard from './admin/AdminDashboard';
import DashboardHome from './admin/DashboardHome';
import ManageProducts from './admin/ManageProducts';
import ManageCategories from './admin/ManageCategories';
import ManageUsers from './admin/ManageUsers';
import Reports from './admin/Reports';

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Welcome />} />

                <Route
                    path="/login"
                    element={<Login />}
                />

              
                <Route
                    path="/register"
                    element={<Register />}
                />

               

                <Route element={<ProtectedRoute role="user" />}>

                    <Route
                        path="/user"
                        element={<UserDashboard />}
                    >

                        <Route
                            index
                            element={<UserHome />}
                        />

                        <Route
                            path="browse"
                            element={<BrowseProducts />}
                        />

                        <Route
                            path="product/:id"
                            element={<ProductDetails />}
                        />

                        <Route
                            path="sell"
                            element={<SellProducts />}
                        />

                        <Route
                            path="listings"
                            element={<MyListing />}
                        />

                        <Route
                            path="wishlist"
                            element={<Wishlist />}
                        />

                        <Route
                            path="profile"
                            element={<MyProfile />}
                        />

                    </Route>

                </Route>

       

                <Route element={<ProtectedRoute role="admin" />}>

                    <Route
                        path="/admin"
                        element={<AdminDashboard />}
                    >

                        <Route
                            index
                            element={<DashboardHome />}
                        />

                        <Route
                            path="products"
                            element={<ManageProducts />}
                        />

                        <Route
                            path="categories"
                            element={<ManageCategories />}
                        />

                        <Route
                            path="users"
                            element={<ManageUsers />}
                        />

                        <Route
                            path="reports"
                            element={<Reports />}
                        />

                    </Route>

                </Route>

           

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;