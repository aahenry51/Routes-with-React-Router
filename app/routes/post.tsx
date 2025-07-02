import type { Route } from "./+types/post";

//Load data from app get params
export async function loader({params}: Route.LoaderArgs){
    const postId = params.postId //Get params from route
    return {postId}

}

export async function action(){

}

export default function Post({loaderData}:Route.ComponentProps){
    return <div>Post ID {loaderData.postId}</div>

}