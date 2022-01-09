import React from "react";
import moment from "moment";
import Link from "next/link";

const AdjacentPostCard = ({ post, position }) => (
  <>
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="text-white text-shadow font-semibold text-2xl text-center">
        {post.title}
      </p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="z-10 cursor-pointer absolute w-full h-full" />
    </Link>
    {position === "LEFT" && (
      <button className="absolute left-8 bottom-4 btn">&larr;</button>
    )}
    {position === "RIGHT" && (
      <button className="absolute right-8 bottom-4 btn">&rarr;</button>
    )}
  </>
);

export default AdjacentPostCard;
