import { createBrowserRouter } from "react-router"
import App from "../App"
import HomePage from "../pages/HomePage"
import RelatedItemList from "../pages/RelatedItemList"
import DetailPage from "../pages/DetailPage"
import SearchItemPage from "../pages/SearchItemPage"
import Cart from "../pages/Cart"



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                Component: HomePage
            },
            {
                path: '/relatedItem/:itemId',
                Component: RelatedItemList
            },
            {
                path: '/detailPage/:itemId',
                Component: DetailPage
            },
            {
                path: '/searchItemPage/:searchStr',
                Component: SearchItemPage
            },
            {
                path: '/cart',
                Component: Cart
            }

        ]
    }
])