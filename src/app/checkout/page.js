"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EMAILJS_CONFIG, EMAILJS_CDN_URL } from "@/config/emailjs";

export default function Checkout() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    note: ""
  });
  const [cartItems, setCartItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    // Load cart items from localStorage
    try {
      const raw = localStorage.getItem("quotationCart");
      const parsed = raw ? JSON.parse(raw) : [];
      setCartItems(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      setCartItems([]);
    }

    // Load EmailJS script
    const script = document.createElement('script');
    script.src = EMAILJS_CDN_URL;
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your public key
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
  }, [cartItems]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Prepare order data
      const orderData = {
        customer: formData,
        items: cartItems,
        subtotal: subtotal,
        total: subtotal,
        orderDate: new Date().toISOString(),
        orderId: `ORD-${Date.now()}`
      };

      // Prepare email template parameters for EmailJS
      const templateParams = {
        to_name: EMAILJS_CONFIG.TEMPLATE_PARAMS.to_name,
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        from_country: formData.country,
        order_notes: formData.note,
        order_id: orderData.orderId,
        order_date: new Date(orderData.orderDate).toLocaleString(),
        order_items: cartItems.map(item => 
          `${item.name} (Qty: ${item.quantity})`
        ).join('\n'),
        items_count: cartItems.length
      };

      // Send email using EmailJS
      if (window.emailjs) {
        await window.emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams
        );

        setSubmitMessage("Order submitted successfully! We'll contact you soon.");
        
        // Clear cart after successful submission
        localStorage.removeItem("quotationCart");
        setCartItems([]);
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          note: ""
        });

        // Dispatch custom event to notify Header component about cart update
        window.dispatchEvent(new CustomEvent('cartUpdated'));

        // Show success popup
        setShowSuccessPopup(true);
        
        // Redirect to home page after 3 seconds
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        throw new Error("EmailJS not loaded");
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitMessage("Failed to submit order. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    router.push('/');
  };

  const formatCurrency = (value) => {
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "USD",
      }).format(value);
    } catch {
      return `$${value.toFixed(2)}`;
    }
  };

  return (
    <>
      {/* Start header area */}
      <Header />
      {/* End header area */}
      <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">
                    Checkout
                  </h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <Link className="text-white" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text-white">Checkout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        
        {/* Start checkout page area */}
        <div className="checkout__page--area section--padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="main checkout__mian">
                  <form onSubmit={handleSubmit}>
                    <div className="checkout__content--step section__contact--information">
                      <div className="section__header checkout__section--header mb-25">
                        <h2 className="section__header--title h3">
                          Contact Information
                        </h2>
                      </div>
                      
                      <div className="customer__information">
                        <div className="row">
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-5"
                                htmlFor="name"
                              >
                                Full Name{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Enter your full name"
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-5"
                                htmlFor="email"
                              >
                                Email Address{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Enter your email address"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-5"
                                htmlFor="phone"
                              >
                                Phone Number{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Enter your phone number"
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-5"
                                htmlFor="country"
                              >
                                Country{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <div className="checkout__input--select select">
                                <select
                                  className="checkout__input--select__field border-radius-5"
                                  id="country"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleInputChange}
                                  required
                                >
                                  <option value="">Select Country</option>
                                  <option value="Saudi Arabia">Saudi Arabia</option>
                                  <option value="United Arab Emirates">United Arab Emirates</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="United States">United States</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="Germany">Germany</option>
                                  <option value="France">France</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Spain">Spain</option>
                                  <option value="Netherlands">Netherlands</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Switzerland">Switzerland</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Norway">Norway</option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Finland">Finland</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Czech Republic">Czech Republic</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Chile">Chile</option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="French Guiana">French Guiana</option>
                                  <option value="Falkland Islands">Falkland Islands</option>
                                  <option value="South Georgia">South Georgia</option>
                                  <option value="South Sandwich Islands">South Sandwich Islands</option>
                                  <option value="Bouvet Island">Bouvet Island</option>
                                  <option value="Heard Island">Heard Island</option>
                                  <option value="McDonald Islands">McDonald Islands</option>
                                  <option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option>
                                  <option value="Coral Sea Islands">Coral Sea Islands</option>
                                  <option value="Norfolk Island">Norfolk Island</option>
                                  <option value="Christmas Island">Christmas Island</option>
                                  <option value="Cocos Islands">Cocos Islands</option>
                                  <option value="Lord Howe Island">Lord Howe Island</option>
                                  <option value="Macquarie Island">Macquarie Island</option>
                                  <option value="Antarctica">Antarctica</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-5"
                                htmlFor="note"
                              >
                                Order Notes{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <textarea
                                className="checkout__notes--textarea__field border-radius-5"
                                id="note"
                                name="note"
                                placeholder="Please provide any special requirements, specifications, or additional information about your order..."
                                value={formData.note}
                                onChange={handleInputChange}
                                rows="4"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {submitMessage && (
                      <div className={`alert ${submitMessage.includes('successfully') ? 'alert-success' : 'alert-danger'} mb-20`}>
                        {submitMessage}
                      </div>
                    )}

                    <div className="checkout__content--step__footer d-flex align-items-center">
                      <button
                        className="continue__shipping--btn primary__btn border-radius-5"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Order"}
                      </button>
                      <Link className="previous__link--content" href="/cart">
                        Return to cart
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="col-lg-5 col-md-6">
                <aside className="checkout__sidebar sidebar border-radius-10">
                  <h2 className="checkout__order--summary__title text-center mb-15">
                    Your Order Summary
                  </h2>
                  
                  {cartItems.length === 0 ? (
                    <div className="text-center py-4">
                      <p>Your cart is empty</p>
                      <Link href="/shop" className="primary__btn">
                        Continue Shopping
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="cart__table checkout__product--table">
                        <table className="cart__table--inner">
                          <tbody className="cart__table--body">
                            {cartItems.map((item, index) => (
                              <tr key={index} className="cart__table--body__items">
                                <td className="cart__table--body__list">
                                  <div className="product__image two d-flex align-items-center">
                                    <div className="product__thumbnail border-radius-5">
                                      <Link
                                        className="display-block"
                                        href={item.href || "/product-details"}
                                      >
                                        <img
                                          className="display-block border-radius-5"
                                          src={item.image || "/assets/img/product/product1.webp"}
                                          alt={item.name}
                                          style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                        />
                                      </Link>
                                      <span className="product__thumbnail--quantity">
                                        {item.quantity || 1}
                                      </span>
                                    </div>
                                    <div className="product__description">
                                      <h4 className="product__description--name">
                                        <Link href={item.href || "/product-details"}>
                                          {item.name}
                                        </Link>
                                      </h4>
                                      <span className="product__description--variant">
                                        Quantity: {item.quantity || 1}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="checkout__total">
                        <div className="text-center">
                          <p className="mb-0">
                            <strong>Total Items: {cartItems.length}</strong>
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* End checkout page area */}
        
      </main>
      {/* Start footer section */}
      <Footer />
      {/* End footer section */}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div className="success-popup" style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div className="success-icon" style={{
              fontSize: '4rem',
              color: '#28a745',
              marginBottom: '1rem'
            }}>
              ✓
            </div>
            <h3 style={{
              color: '#333',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              Order Submitted Successfully!
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '1.5rem',
              lineHeight: '1.5'
            }}>
              Thank you for your order. We'll contact you soon with further details.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button
                onClick={closePopup}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Go to Home
              </button>
            </div>
            <p style={{
              color: '#999',
              fontSize: '0.9rem',
              marginTop: '1rem'
            }}>
              Redirecting automatically in a few seconds...
            </p>
          </div>
        </div>
      )}

      {/* Scroll top bar */}
      <button id="scroll__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 244l144-144 144 144M256 120v292"
          />
        </svg>
      </button>
    </>
  );
}
