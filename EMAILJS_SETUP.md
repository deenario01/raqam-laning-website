# EmailJS Setup Guide for Checkout Page

This guide will help you set up EmailJS to send order emails from your checkout page.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Order Received - {{order_id}}

Hello {{to_name}},

A new order has been received from your website.

**Order Details:**
- Order ID: {{order_id}}
- Order Date: {{order_date}}
- Customer Name: {{from_name}}
- Customer Email: {{from_email}}
- Customer Phone: {{from_phone}}
- Customer Country: {{from_country}}

**Order Items:**
{{order_items}}

**Order Summary:**
- Items Count: {{items_count}}

**Customer Notes:**
{{order_notes}}

This is an automated message from your website checkout system.

Best regards,
Your Website Team
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  // Your EmailJS public key
  PUBLIC_KEY: "your_actual_public_key_here",
  
  // Your EmailJS service ID
  SERVICE_ID: "your_actual_service_id_here",
  
  // Your EmailJS template ID
  TEMPLATE_ID: "your_actual_template_id_here",
  
  // ... rest of the config
};
```

## Step 6: Test the Setup

1. Add some items to your cart
2. Go to the checkout page
3. Fill out the form and submit
4. Check your email for the order notification

## Troubleshooting

### EmailJS not loading
- Check if the CDN URL is accessible
- Verify your public key is correct
- Check browser console for errors

### Emails not sending
- Verify your service ID and template ID
- Check if your email service is properly connected
- Look for errors in the browser console

### Template variables not working
- Ensure template variable names match exactly
- Check that all required variables are being sent

## EmailJS Limits (Free Plan)

- **200 emails per month**
- **2 email templates**
- **1 email service**

## Upgrade Options

If you need more emails or features, consider upgrading to:
- **Personal Plan**: 1,000 emails/month
- **Business Plan**: 10,000 emails/month
- **Enterprise Plan**: Custom limits

## Security Notes

- Your public key is safe to expose in frontend code
- Never share your private keys or service credentials
- EmailJS handles all the backend email sending securely

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Community](https://community.emailjs.com/)
- [EmailJS Support](https://www.emailjs.com/support/)
