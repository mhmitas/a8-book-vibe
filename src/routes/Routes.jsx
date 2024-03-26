import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root";
import Home from "../components/home/Home";
import BookDetails from "../components/books/BookDetails";
import ListedBooks from "../components/listed-books/ListedBooks";
import ReadBooks from "../components/listed-books/ReadBooks";
import WishlistBooks from "../components/listed-books/WishlistBooks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('/books.json')
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
        ]
    }
])