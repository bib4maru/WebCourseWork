import AddMusician from "../Pages/AddMusician";
import AdminMain from "../Pages/AdminMain";
import Authorization from "../Pages/Authorization";
import CollectionPage from "../Pages/CollectionPage";
import CreateTrack from "../Pages/CreateTrack";
import CreateUser from "../Pages/CreateUser";
import DeleteMusician from "../Pages/DeleteMusician";
import DeleteUser from "../Pages/DeleteUser";
import EditMusician from "../Pages/EditMusician";
import EditTrack from "../Pages/EditTrack";
import Main from "../Pages/Main";
import ManagerMain from "../Pages/ManagerMain";
import ManagerTracks from "../Pages/ManagerTracks";
import TracksPage from "../Pages/TracksPage";
export const UsersRoutes = [
    {path: "/", element : <Authorization/>},
    {path: "/main", element: <Main/> },
    {path: "/tracks", element: <TracksPage/>},
    {path: "/collection", element: <CollectionPage/>}
]

export const NoAuthRoutes = [
    {path: "/", element : <Authorization/>}
]

export const AdminRoutes = [
    {path: "/", element: <Authorization/>},
    {path: "/main",element: <AdminMain/>},
    {path: "/user/create", element: <CreateUser/>},
    {path: "/user/delete", element: <DeleteUser/>}
]

export const ManagerRoutes = [
    {path: "/", element: <Authorization/>},
    {path: "/main", element: <ManagerMain/>},
    {path: "/tracks/main", element: <ManagerTracks/>},
    {path: "/tracks/create", element: <CreateTrack/>},
    {path: "/musician/create", element: <AddMusician/>},
    {path: "/musician/delete", element: <DeleteMusician/>},
    {path: "/musician/edit", element: <EditMusician/>}
]