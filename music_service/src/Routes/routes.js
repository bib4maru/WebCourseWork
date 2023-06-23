import Authorization from "../Pages/Authorization";
import CollectionPage from "../Pages/CollectionPage";
import Main from "../Pages/Main";
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