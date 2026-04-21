// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS public key
  PUBLIC_KEY: "eIPtDr9Q1uW-Dbd1m",
  
  // Your EmailJS service ID
  SERVICE_ID: "service_hzop5t4",
  
  // Your EmailJS template ID
  TEMPLATE_ID: "template_50dfixp",
  
  // Email template parameters mapping
  TEMPLATE_PARAMS: {
    to_name: "Sales Team",
    from_name: "{{from_name}}",
    from_email: "{{from_email}}",
    from_phone: "{{from_phone}}",
    from_country: "{{from_country}}",
    order_notes: "{{order_notes}}",
    order_id: "{{order_id}}",
    order_date: "{{order_date}}",
    order_items: "{{order_items}}",
    items_count: "{{items_count}}"
  }
};

// EmailJS CDN URL
export const EMAILJS_CDN_URL = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
