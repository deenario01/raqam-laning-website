import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import ProductsBanner from "@/components/ProductsBanner";
import Products from "@/components/Products";
import VideoBanner from "@/components/VideoBanner";
import Shipping from "@/components/Shipping";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";
import Blog from "@/components/Blog";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";
import QuickviewWrapper from "@/components/QuickviewWrapper";
import NewsletterPopup from "@/components/NewsletterPopup";
import ScrollTopBar from "@/components/ScrollTopBar";
import BrandLogosCarousel from "@/components/BrandLogosCarousel";
import Choose from "./choose/page";
import Link from "next/link";

export default function Home() {
  return (
 <>
  <Header />
  <main className="main__content_wrapper">
    <Slider />
    <Banner />
    <div className="section__heading text-center mb-30">
              <h2 className="section__heading--maintitle">Why Choose RAQAM</h2>
    </div>
    <section className="about__section section--padding mb-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about__thumbnail">
                  <img
                    className="about__thumbnail--img border-radius-5 display-block"
                    src="/assets/img/state_of_the_art.jpg"
                    alt="about-thumbnail"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about__content">
                  <span className="about__content--subtitle text__secondary mb-20">
                    {" "}
                    Excellence in Every Label
                  </span>
                  <h2 className="about__content--maintitle mb-25">
                  State-of-the-Art Label Production
                  </h2>
                  <p className="about__content--desc mb-20">
                  We operate with some of the most advanced printing and finishing technology in the region, enabling us to produce labels that are sharp, durable, and visually striking. From high-volume production runs to specialized, small-batch orders, our manufacturing setup is designed for precision and consistency. Every label is crafted under strict quality controls, ensuring that what leaves our facility is a perfect representation of your brand’s identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>
    <section className="about__section section--padding mb-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="about__content">
                  <span className="about__content--subtitle text__secondary mb-20">
                    {" "}
                    Tailored Packaging, Built Around You
                  </span>
                  <h2 className="about__content--maintitle mb-25">
                  Customized Packaging Solutions
                  </h2>
                  <p className="about__content--desc mb-20">
                  At RAQAM, we believe there’s no such thing as a “one-size-fits-all” solution. Every business has its own story, audience, and functional requirements—so we take the time to understand yours. Our team works closely with you to recommend the right materials, finishes, and design enhancements that will make your packaging stand out while meeting practical needs like durability, compliance, and cost-efficiency.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="about__thumbnail">
                  <img
                    className="about__thumbnail--img border-radius-5 display-block"
                    src="/assets/img/customized.jpg"
                    alt="about-thumbnail"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
    </section>
    <section className="about__section section--padding mb-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about__thumbnail">
                  <img
                    className="about__thumbnail--img border-radius-5 display-block"
                    src="/assets/img/global_reach.jpg"
                    alt="about-thumbnail"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about__content">
                  <span className="about__content--subtitle text__secondary mb-20">
                    {" "}
                    Your Global Partner, Rooted in Local Expertise
                  </span>
                  <h2 className="about__content--maintitle mb-25">
                  Global Reach & Local Presence
                  </h2>
                  <p className="about__content--desc mb-20">
                  With fully equipped facilities and offices in Saudi Arabia, Pakistan, and Canada, we have the capability to serve clients across multiple markets while remaining deeply connected to local business environments. This unique position allows us to combine global production standards with an understanding of regional preferences, regulations, and industry trends—making us a trusted partner for both multinational brands and local businesses aiming for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>
    {/* <ProductsBanner /> */}
    {/* <Products /> */}
    {/* <VideoBanner /> */}
    {/* <Shipping /> */}
    {/* <Newsletter />   */}
    <PopularProducts />
    <BrandLogosCarousel />
    {/* <Instagram /> */}
  </main>
  <Footer />  
  <QuickviewWrapper />
  <NewsletterPopup />
  <ScrollTopBar />
</>
  );
}