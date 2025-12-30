# EmailJS Setup Guide

## Fixing the 412 Precondition Failed Error

The **412 Precondition Failed** error occurs when the template variables in your EmailJS template don't match the variables being sent from the form.

## Steps to Fix:

### 1. Go to EmailJS Dashboard
- Visit: https://dashboard.emailjs.com/admin
- Log in to your account

### 2. Check Your Template Variables

Go to **Email Templates** → Select your template (`template_6b5y6v4`)

### 3. Update Your Template

Make sure your EmailJS template includes these variables:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Reply-To: {{reply_to}}

Message:
{{message}}
```

**OR** if your template uses different variable names, update the Contact.jsx component to match.

### 4. Common Variable Names

EmailJS templates commonly use:
- `{{from_name}}` or `{{user_name}}` - Sender's name
- `{{from_email}}` or `{{user_email}}` - Sender's email
- `{{message}}` or `{{user_message}}` - Message content
- `{{reply_to}}` - Reply-to email address
- `{{to_name}}` - Recipient name

### 5. Verify Your Configuration

In `src/constants/contactConfig.js`, verify:
- ✅ `YOUR_SERVICE_ID`: "service_jay_45"
- ✅ `YOUR_TEMPLATE_ID`: "template_6b5y6v4"
- ✅ `YOUR_USER_ID`: "wbhphlmPenoRsj0sV" (Public Key)

### 6. Test the Template

1. Go to EmailJS Dashboard → Email Templates
2. Click "Test" on your template
3. Make sure it sends successfully

### 7. Alternative: Update Template Variables

If your template uses different variable names, update `src/components/Contact.jsx`:

```javascript
const templateParams = {
  // Match these to your EmailJS template variables
  user_name: form.name,        // if template uses {{user_name}}
  user_email: form.email,       // if template uses {{user_email}}
  user_message: form.message,   // if template uses {{user_message}}
  // etc.
};
```

## Quick Fix Checklist:

- [ ] Template variables match exactly (case-sensitive)
- [ ] Service ID is correct
- [ ] Template ID is correct
- [ ] Public Key (User ID) is correct
- [ ] Template is published/active
- [ ] Email service is connected and verified

## Need Help?

If you're still getting errors:
1. Check the browser console for detailed error messages
2. Verify all IDs in EmailJS dashboard
3. Test the template directly in EmailJS dashboard
4. Make sure your EmailJS account is active

