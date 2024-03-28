import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root";
import Home from "../components/home/Home";
import BookDetails from "../components/books/BookDetails";
import ListedBooks from "../components/listed-books/ListedBooks";
import ReadBooks from "../components/listed-books/ReadBooks";
import WishlistBooks from "../components/listed-books/WishlistBooks";
import PagesToRead from "../components/PagestoRead/PagesToRead";
import ErrorPage from "../components/error-page";
import SignIn from "../components/sign-in/SignIn";
import Signup from "../components/signup/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('/books.json')
                loader: () => fetch('/books.json')
            },
            {
                path: "/pages-to-read",
                element: <PagesToRead></PagesToRead>,
                loader: () => fetch('/books.json')
            },
            {
                path: "/bookDetails/:Id",
                element: <BookDetails></BookDetails>,
                loader: () => fetch('/books.json')
            },
            {
                path: "listedBooks",
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        path: "",
                        element: <ReadBooks></ReadBooks>
                    },
                    {
                        path: "wishlist",
                        element: <WishlistBooks></WishlistBooks>
                    }
                ]
            },
            {
                path: "sign-in",
                element: <SignIn></SignIn>
            },
            {
                path: "sign-up",
                element: <Signup></Signup>
            }
        ]
    }
])