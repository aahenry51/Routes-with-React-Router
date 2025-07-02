import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,

} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), // The first route - the first page
    route("about", "routes/about.tsx"), //Simple alternate route
    route("post/:postId", "routes/post.tsx"), //Fetch data on page load and accept parameter (/:postId)
    //Must have id http://localhost:5173/post/r

    
//   layout("./auth/layout.tsx", [
//     route("login", "./auth/login.tsx"),
//     route("register", "./auth/register.tsx"),
//   ]),

//   ...prefix("concerts", [
//     index("./concerts/home.tsx"),
//     route(":city", "./concerts/city.tsx"),
//     route("trending", "./concerts/trending.tsx"),
//   ]),
] satisfies RouteConfig;