import login from "../routes/login";
import error from "../routes/error";
export const routes = [
    ...login,
    ...error,
    { path: "/", redirect: { name: "error-404" } },
    {
        path: "*",
        redirect: "error-404",
    },
]
