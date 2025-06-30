import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users: Post[] = await response.json();
  const filterPosts = users.filter((data) => data.id % 10 === 1);
  return (
    <>
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8">Blog Post</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filterPosts.map((data) => (
            <div
              key={data.id}
              className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 shadow-sm"
            >
              <div>
                <span className="font-semibold">ID:</span> {data.id}
              </div>
              <div>
                <span className="font-semibold">User Id:</span> {data.userId}
              </div>
              <div>
                <span className="font-semibold">Title:</span> {data.title}
              </div>
              <div>
                <span className="font-semibold">Body:</span> {data.body}
              </div>
              <Suspense
                fallback={
                  <div className="text-sm text-gray-500">Loading Author...</div>
                }
              >
                <Author userId={data.userId} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
