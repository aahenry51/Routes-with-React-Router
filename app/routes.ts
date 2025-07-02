import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,

} from "@react-router/dev/routes";

export default [

    //Basic 

    index("routes/home.tsx"), // The first route - the first page
    route("about", "routes/about.tsx"), //Simple alternate route
    route("post/:postId", "routes/post.tsx"), //Fetch data on page load and accept parameter (/:postId)
    //Must have id http://localhost:5173/post/r

    //Nested routes
    route("dashboard", "routes/dashboard.tsx",[
        route("finances", "routes/finances.tsx"), // dashboard/finances
        route("personal", "routes/personal.tsx"), // dashboard/personal
    ]), 
    
    //Nested routes layout
    //No dashboard route but displays dashboard components
    //Allows you to go to the indivival page without a nest i.e. /personal instead of dashboard/personal
    // layout("routes/dashboard.tsx", [
    //     route("finances", "routes/finances.tsx"),
    //     route("personal", "routes/personal.tsx"),
    // ]),

//   ...prefix("concerts", [
//     index("./concerts/home.tsx"),
//     route(":city", "./concerts/city.tsx"),
//     route("trending", "./concerts/trending.tsx"),
//   ]),
] satisfies RouteConfig;