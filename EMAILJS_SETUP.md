# EmailJS Setup Guide

This guide will help you configure EmailJS for the contact form in your Bharath Engineerings website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. Login to your EmailJS dashboard
2. Go to **Email Services** section
3. Click **Add New Service**
4. Choose your email provider (Gmail recommended)
5. Follow the instructions to connect your email account
6. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. Go to **Email Templates** section
2. Click **Create New Template**
3. Use the following template structure:

### Template Content:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Body:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Phone: {{from_phone}}
Company: {{from_company}}

Message:
{{message}}

---
This email was sent from the Bharath Engineerings contact form.
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key (e.g., `abcdefghijk123456`)

## Step 5: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Example:
```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcdefghijk123456
```

## Step 6: Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Customer's name
- `{{from_phone}}` - Customer's phone number
- `{{from_company}}` - Customer's company name
- `{{message}}` - Customer's message
- `{{to_email}}` - Your email (bharathengineerings@gmail.com)

## Step 7: Test the Form

1. Restart your development server:
   ```bash
   npm start
   ```

2. Navigate to the contact form
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox for the test message

## Troubleshooting

### Form submission fails
- Check if all environment variables are set correctly
- Verify your EmailJS service is active
- Check browser console for error messages
- Ensure you've restarted the development server after updating `.env.local`

### Emails not received
- Check your spam folder
- Verify the template is configured correctly
- Check EmailJS dashboard for failed requests
- Ensure your email service is properly connected

### Environment variables not loading
- Make sure the file is named exactly `.env.local`
- All environment variables must start with `REACT_APP_`
- Restart your development server after making changes

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - never commit this file
- ✅ Always use environment variables for sensitive data
- ✅ The `.env.example` file shows the structure without exposing real credentials
- ✅ EmailJS public key is safe to use in frontend code

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic email support

For higher volume, consider upgrading to a paid plan.

## Support

For EmailJS-specific issues, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

