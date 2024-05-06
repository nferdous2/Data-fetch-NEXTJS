import Link from "next/link";

const PostPage = async () => {
    // const res = await fetch("http://localhost:5000/posts",{
    //     // cache:"force-cache" // create HTMl on built time, by default NEXTjs store staic content
    //     next:{
    //         revalidate:5
    //     } //if any chnages happens on data ,,then fetch the data again and show the changes in 5s
    // });
    const res = await fetch("http://localhost:5000/posts", {
        cache: "force-cache",
      });
      const posts = await res.json();
    console.log(posts)
    return (
        <div className="w-full">
            <h1 className="text-4xl text-center">Total Post : {posts.length}</h1>
            {
                posts.map((post) => (
                    <div key={post.id} className="card mx-auto bg-gray-200 shadow-xl w-[70%] my-5">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <p>{post.likes}</p>
                            <div className="card-actions justify-end">
                            <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">See More</button>
              </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostPage;