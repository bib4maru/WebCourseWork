import Authorization from "../Pages/Authorization";
import Main from "../Pages/Main";
import TracksPage from "../Pages/TracksPage";
export const UsersRoutes = [
    {path: "/", element : <Authorization/>},
    {path: "/main", element: <Main/> },
    {path: "/tracks", element: <TracksPage/>}
]