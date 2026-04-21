"use client";

import Link from "next/link";

export default function AdminNewsCard({ post }) {
  return (
    <div className="col mb-30">
      <div className="blog__items">
        <div className="blog__thumbnail">
          <Link
            className="blog__thumbnail--link display-block"
            href={`/admin/news/${encodeURIComponent(post.id)}/`}
          >
            <img
              className="blog__thumbnail--img display-block"
              src={post.image}
              alt=""
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="blog__content">
          <ul className="blog__content--meta d-flex">
            <li className="blog__content--meta__text">
              <svg
                className="blog__content--meta__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="12.569"
                height="13.966"
                viewBox="0 0 12.569 13.966"
              >
                <path
                  data-name="Icon material-date-range"
                  d="M8.69,9.285h-1.4v1.4h1.4Zm2.793,0h-1.4v1.4h1.4Zm2.793,0h-1.4v1.4h1.4Zm1.4-4.888h-.7V3h-1.4V4.4H7.991V3h-1.4V4.4H5.9a1.39,1.39,0,0,0-1.39,1.4L4.5,15.569a1.4,1.4,0,0,0,1.4,1.4h9.776a1.4,1.4,0,0,0,1.4-1.4V5.793A1.4,1.4,0,0,0,15.673,4.4Zm0,11.173H5.9V7.888h9.776Z"
                  transform="translate(-4.5 -3)"
                  fill="currentColor"
                />
              </svg>
              {post.date}
            </li>
          </ul>
          <h3 className="blog__content--title h4">
            <Link href={`/admin/news/${encodeURIComponent(post.id)}/`}>{post.title}</Link>
          </h3>
          <p className="blog__content--desc">{post.excerpt}</p>
          <Link
            className="blog__content--btn primary__btn"
            href={`/admin/news/${encodeURIComponent(post.id)}/`}
          >
            Edit article
          </Link>
        </div>
      </div>
    </div>
  );
}
