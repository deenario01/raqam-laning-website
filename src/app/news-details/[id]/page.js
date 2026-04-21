import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSocialShare from "@/components/BlogSocialShare";
import RelatedTags from "@/components/RelatedTags";
import { getNewsByIdSync } from "@/lib/site-news";

export const dynamic = "force-dynamic";

export default async function BlogDetailsDynamic({ params }) {
  const { id: blogId } = await params;
  const currentBlog = getNewsByIdSync(blogId);

  if (!currentBlog) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/news" className="primary__btn">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="breadcrumb__section breadcrumb__bg">
        <div className="container">
          <div className="row row-cols-1">
            <div className="col">
              <div className="breadcrumb__content">
                <h2 className="breadcrumb__content--title h1 text-white mb-15">
                  News Detail
                </h2>
                <ul className="breadcrumb__content--menu d-flex">
                  <li className="breadcrumb__content--menu__items">
                    <Link className="text-white" href="/news">
                      Back to All News
                    </Link>
                  </li>
                  <li className="breadcrumb__content--menu__items">
                    <span className="text-white">News Detail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog__details--section section--padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="blog__details--content">
                <div className="blog__details--thumbnail mb-30">
                  <img
                    className="blog__details--thumbnail__img border-radius-10"
                    src={currentBlog.image}
                    alt="blog-thumbnail"
                  />
                </div>
                <div className="blog__details--content__desc">
                  <div className="blog__details--content__meta mb-20">
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
                        {currentBlog.date}
                      </li>
                    </ul>
                  </div>
                  <h1 className="blog__details--content__title h2 mb-20">
                    {currentBlog.title}
                  </h1>
                  <div
                    className="blog__details--content__desc"
                    dangerouslySetInnerHTML={{ __html: currentBlog.content }}
                  />

                  <div className="blog__tags--social__media d-flex align-items-center justify-content-between">
                    <RelatedTags tags={currentBlog.tags} />
                    <BlogSocialShare
                      title={currentBlog.title}
                      url={`/news-details/${blogId}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
