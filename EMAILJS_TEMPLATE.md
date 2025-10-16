# EmailJS Email Template for Bharath Engineerings Contact Form

Copy the content below into your EmailJS template editor.

## Template Configuration

### To Email
```
bharathengineerings@gmail.com
```

### From Name
```
{{from_name}}
```

### From Email (Reply-To)
You can set this to `noreply@bharathengineerings.com` or leave it as EmailJS default

---

## Subject Line

```
🔔 New Contact Form Submission from {{from_name}}
```

**Alternative subject lines:**
- `New Inquiry from {{from_name}} - Bharath Engineerings`
- `Contact Form: {{from_name}} | {{from_company}}`
- `New Customer Inquiry - {{from_name}}`

---

## Email Body (HTML Version - Recommended)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial', 'Helvetica', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0a1a3f 0%, #1e3a8a 100%);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    .info-row {
      margin-bottom: 20px;
      padding: 15px;
      background: #f9fafb;
      border-left: 4px solid #facc15;
      border-radius: 4px;
    }
    .label {
      font-weight: bold;
      color: #0a1a3f;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .value {
      color: #4b5563;
      font-size: 16px;
    }
    .message-box {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #d1d5db;
      margin-top: 20px;
    }
    .footer {
      background: #f9fafb;
      padding: 20px;
      text-align: center;
      border-radius: 0 0 10px 10px;
      border: 1px solid #e5e7eb;
      border-top: none;
      font-size: 12px;
      color: #6b7280;
    }
    .highlight {
      color: #facc15;
      font-weight: bold;
    }
    .divider {
      height: 1px;
      background: #e5e7eb;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📧 New Contact Form Submission</h1>
    <p style="margin: 10px 0 0 0; font-size: 14px;">Bharath Engineerings Website</p>
  </div>
  
  <div class="content">
    <p style="font-size: 16px; color: #0a1a3f; margin-bottom: 25px;">
      You have received a new inquiry from your website contact form. Please review the details below:
    </p>
    
    <div class="info-row">
      <div class="label">👤 Customer Name</div>
      <div class="value">{{from_name}}</div>
    </div>
    
    <div class="info-row">
      <div class="label">📞 Phone Number</div>
      <div class="value">{{from_phone}}</div>
    </div>
    
    <div class="info-row">
      <div class="label">🏢 Company Name</div>
      <div class="value">{{from_company}}</div>
    </div>
    
    <div class="divider"></div>
    
    <div class="label" style="margin-bottom: 10px;">💬 Message</div>
    <div class="message-box">
      {{message}}
    </div>
    
    <div style="margin-top: 30px; padding: 15px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
      <p style="margin: 0; font-size: 14px; color: #1e40af;">
        <strong>⚡ Quick Action:</strong> Please respond to this inquiry within 24 hours for the best customer experience.
      </p>
    </div>
  </div>
  
  <div class="footer">
    <p style="margin: 0 0 10px 0;">
      This email was automatically sent from the Bharath Engineerings contact form
    </p>
    <p style="margin: 0; font-size: 11px;">
      Website: bharathengineerings.com | Phone: 9842750053
    </p>
    <p style="margin: 10px 0 0 0; font-size: 11px; color: #9ca3af;">
      Sent on {{email_date}} at {{email_time}}
    </p>
  </div>
</body>
</html>
```

---

## Email Body (Plain Text Version - Fallback)

```
=====================================
NEW CONTACT FORM SUBMISSION
Bharath Engineerings Website
=====================================

You have received a new inquiry from your website contact form.

CUSTOMER DETAILS
----------------

Name: {{from_name}}
Phone: {{from_phone}}
Company: {{from_company}}

MESSAGE
-------

{{message}}

=====================================

Please respond to this inquiry within 24 hours for the best customer experience.

---
This email was automatically sent from the Bharath Engineerings contact form.
Website: bharathengineerings.com
Phone: 9842750053
=====================================
```

---

## Auto-Reply Template (Optional)

Create a second template for auto-replying to customers:

### Subject:
```
Thank you for contacting Bharath Engineerings!
```

### Body:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Arial', 'Helvetica', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0a1a3f 0%, #1e3a8a 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 1px solid #e5e7eb;
    }
    .footer {
      background: #f9fafb;
      padding: 20px;
      text-align: center;
      border-radius: 0 0 10px 10px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>✅ Message Received!</h1>
  </div>
  
  <div class="content">
    <p>Dear {{from_name}},</p>
    
    <p>Thank you for contacting <strong>Bharath Engineerings</strong>!</p>
    
    <p>We have received your inquiry and one of our team members will get back to you within 24 hours.</p>
    
    <p><strong>Your submitted information:</strong></p>
    <ul>
      <li>Name: {{from_name}}</li>
      <li>Phone: {{from_phone}}</li>
      <li>Company: {{from_company}}</li>
    </ul>
    
    <p>If you need immediate assistance, please feel free to call us at <strong>9842750053</strong>.</p>
    
    <p>Best regards,<br>
    <strong>Bharath Engineerings Team</strong></p>
  </div>
  
  <div class="footer">
    <p><strong>Bharath Engineerings</strong></p>
    <p>151, Karur Main road, Chinnammapuram<br>
    Ganapathipayam (po), Erode 638 153</p>
    <p>📞 9842750053 | ✉️ bharathengineerings@gmail.com</p>
  </div>
</body>
</html>
```

---

## Template Variables Used

Make sure these variables are available in your EmailJS template:

| Variable | Source | Description |
|----------|--------|-------------|
| `{{from_name}}` | Form field | Customer's full name |
| `{{from_phone}}` | Form field | Customer's phone number |
| `{{from_company}}` | Form field | Customer's company name |
| `{{message}}` | Form field | Customer's message/inquiry |
| `{{to_email}}` | Auto | Your email (bharathengineerings@gmail.com) |

---

## Setup Instructions

1. **Login to EmailJS Dashboard**
2. **Go to Email Templates**
3. **Click "Create New Template"**
4. **Set Template Name**: `bharath_contact_form`
5. **Copy the HTML template** from above into the Content section
6. **Set the Subject line**
7. **Configure Reply-To** (optional)
8. **Save the template**
9. **Copy the Template ID** and add it to your `.env.local` file

---

## Testing Your Template

After setup, send a test email from EmailJS dashboard with sample data:
- from_name: "Test Customer"
- from_phone: "9876543210"
- from_company: "Test Company Ltd"
- message: "This is a test message to verify the email template."

Check if the email formatting looks good in your inbox!

