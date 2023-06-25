import AddMusician from "../Pages/Content Manager/AddMusician"
import AdminMain from "../Pages/Admin/AdminMain";
import Authorization from "../Pages/Authorization";
import CollectionPage from "../Pages/Client/CollectionPage";
import CreateTrack from "../Pages/Content Manager/CreateTrack";
import CreateUser from "../Pages/Admin/CreateUser";
import DeleteMusician from "../Pages/Content Manager/DeleteMusician";
import DeleteUser from "../Pages/Admin/DeleteUser";
import EditMusician from "../Pages/Content Manager/EditMusician";
import Main from "../Pages/Client/Main";
import ManagerMain from "../Pages/Content Manager/ManagerMain";
import ManagerTracks from "../Pages/Content Manager/ManagerTracks";
import Registration from "../Pages/Registration";
import TracksPage from "../Pages/Client/TracksPage";
import EditUser from "../Pages/Admin/EditUser";
export const UsersRoutes = [
    {path: "/", element : <Authorization/>},
    {path: "/main", element: <Main/> },
    {path: "/tracks", element: <TracksPage/>},
    {path: "/collection", element: <CollectionPage/>},
    {path: "/registration", element: <Registration/>}
]

export const NoAuthRoutes = [
    {path: "/", element : <Authorization/>},
    {path: "/registration", element: <Registration/>}
]

export const AdminRoutes = [
    {path: "/", element: <Authorization/>},
    {path: "/main",element: <AdminMain/>},
    {path: "/user/create", element: <CreateUser/>},
    {path: "/user/delete", element: <DeleteUser/>},
    {path: "/registration", element: <Registration/>},
    {path: "/user/edit", element: <EditUser/>}
]

export const ManagerRoutes = [
    {path: "/", element: <Authorization/>},
    {path: "/main", element: <ManagerMain/>},
    {path: "/tracks/main", element: <ManagerTracks/>},
    {path: "/tracks/create", element: <CreateTrack/>},
    {path: "/musician/create", element: <AddMusician/>},
    {path: "/musician/delete", element: <DeleteMusician/>},
    {path: "/musician/edit", element: <EditMusician/>},
    {path: "/registration", element: <Registration/>}
]