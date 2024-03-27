import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    // console.error(error);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
            {/* <h1 className="text-2xl font bold">Page Not Found !</h1> */}
            <h1 className="text-3xl font bold">We've Gotten Our Wires Crossed !</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="btn ">🏠Home</Link>
        </div>
    );
}