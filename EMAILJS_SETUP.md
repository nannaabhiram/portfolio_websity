# 📧 Email Setup Instructions for Contact Form

Your contact form is configured to send emails to: **nanna.abhiram25@gmail.com**

## 🚀 Step-by-Step Setup (5 minutes)

### 1. Create EmailJS Account (FREE)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's completely free!)
3. Sign up with Google or email

---

### 2. Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **Gmail** (or your preferred email provider)
4. Click **"Connect Account"** and authorize with your Gmail: **nanna.abhiram25@gmail.com**
5. Give it a name like "Portfolio Contact"
6. Click **"Create Service"**
7. **COPY the Service ID** (looks like: `service_abc1234`)

---

### 3. Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Click **"Save"**
5. **COPY the Template ID** (looks like: `template_xyz5678`)

---

### 4. Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **COPY the Public Key** (looks like: `abcDEF123xyz`)

---

### 5. Update Your Code

Open `src/components/Contact.jsx` and replace these values (around line 15-17):

```javascript
const serviceID = 'service_abc1234';    // ← Your Service ID
const templateID = 'template_xyz5678';  // ← Your Template ID
const publicKey = 'abcDEF123xyz';       // ← Your Public Key
```

**Save the file** and the dev server will automatically reload!

---

## ✅ Test Your Contact Form

1. Go to your portfolio: http://localhost:5174/
2. Scroll to the contact form
3. Fill in the form and click "Send Message"
4. Check your email: **nanna.abhiram25@gmail.com**

---

## 📝 Template Variables Explained

These variables are automatically filled:

- `{{from_name}}` - Sender's name from the form
- `{{from_email}}` - Sender's email from the form
- `{{message}}` - The message content
- `{{to_email}}` - Your email (nanna.abhiram25@gmail.com)

---

## 🔒 Free Tier Limits

EmailJS Free Plan:
- ✅ 200 emails/month
- ✅ 2 email services
- ✅ Unlimited templates
- ✅ Perfect for portfolios!

---

## 🆘 Troubleshooting

**Email not sending?**
1. Check browser console for errors (F12)
2. Verify all 3 IDs are correct
3. Make sure Gmail is connected in EmailJS dashboard
4. Check EmailJS usage limits

**Still not working?**
- Visit EmailJS docs: https://www.emailjs.com/docs/
- Check spam folder
- Try sending a test email from EmailJS dashboard

---

## 🎯 Alternative: Direct Gmail Link (No Setup Required)

If you want a simpler solution without EmailJS setup, replace the Contact.jsx with a mailto link:

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  window.location.href = `mailto:nanna.abhiram25@gmail.com?subject=${subject}&body=${body}`;
};
```

This will open the user's default email client.

---

## 📚 Resources

- EmailJS Dashboard: https://dashboard.emailjs.com/
- EmailJS Docs: https://www.emailjs.com/docs/
- React Integration: https://www.emailjs.com/docs/examples/reactjs/

---

**Need help?** Email yourself at nanna.abhiram25@gmail.com 😄
