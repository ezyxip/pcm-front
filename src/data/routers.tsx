import {createBrowserRouter} from "react-router-dom";
import {IndexPage} from "../pages/index/IndexPage";
import {AssemblePage} from "../pages/assemble/AssemblePage";
import {UpgradePage} from "../pages/upgrade/UpgradePage";
import {CreatePage} from "../pages/create/CreatePage";

export const router = createBrowserRouter([
    {
        path: "/app/",
        element: <IndexPage/>
    },
    {
        path: "/app/upgrade",
        element: <UpgradePage/>,
    },
    {
        path: "/app/assemble",
        element: <AssemblePage/>,
    },
    {
        path: "/app/scan",
        element: <div>Scan PC</div>,
    },
    {
        path: "/app/create",
        element: <CreatePage/>,
    },
]);