# 📧 EmailJS Setup for Hiring Section

## Step 1: Create New Email Template in EmailJS

1. Go to https://dashboard.emailjs.com/
2. Login with your account
3. Click on **Email Templates** in the left sidebar
4. Click **Create New Template**

## Step 2: Configure Template

**Template ID:** `template_hiring_123` (or create your own and update in Hiring.jsx)

**Template Name:** Pioneers Digital Marketing - Job Application

**Subject:** New Job Application - {{position}}

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #0066FF 0%, #00D4AA 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
        }
        .content {
            background: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            margin-top: 20px;
        }
        .info-row {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }
        .label {
            font-weight: bold;
            color: #0066FF;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 New Job Application</h1>
            <p>Pioneers Digital Marketing</p>
        </div>
        
        <div class="content">
            <h2>Applicant Details</h2>
            
            <div class="info-row">
                <span class="label">Name:</span> {{name}}
            </div>
            
            <div class="info-row">
                <span class="label">Email:</span> {{email}}
            </div>
            
            <div class="info-row">
                <span class="label">Phone:</span> {{phone}}
            </div>
            
            <div class="info-row">
                <span class="label">Position:</span> {{position}}
            </div>
            
            <div class="info-row">
                <span class="label">Experience:</span> {{experience}}
            </div>
            
            <div class="info-row">
                <span class="label">Resume:</span> {{resume_name}}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px;">
                <p><strong>📎 Resume Attached</strong></p>
                <p style="color: #666;">The candidate's resume is attached to this email.</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This application was submitted via Pioneers Digital Marketing website</p>
            <p>© 2024 Pioneers Digital Marketing. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

## Step 3: Enable File Attachments

⚠️ **IMPORTANT:** EmailJS has limitations with attachments. Here are your options:

### Option A: Use EmailJS Attachments (Recommended)

1. In your EmailJS template settings, enable **Attachments**
2. Add this to template content:
```
Attachments: {{resume_name}}
Content: {{resume_data}}
```

### Option B: Alternative - Use FormSubmit or Email Services

If EmailJS attachments don't work, use these alternatives:

**1. FormSubmit (Free, No Signup)**
```jsx
// Replace the emailjs.send with:
const formData = new FormData();
formData.append('name', formData.name);
formData.append('email', formData.email);
formData.append('phone', formData.phone);
formData.append('position', formData.position);
formData.append('resume', formData.resume);

await fetch('https://formsubmit.co/YOUR_EMAIL@gmail.com', {
  method: 'POST',
  body: formData
});
```

**2. Formspree (Better for attachments)**
```jsx
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
});
```

## Step 4: Update Hiring.jsx

If using EmailJS, update the template ID:
```jsx
await emailjs.send(
  'service_pawbhjv',           // Your service ID
  'template_hiring_123',       // Your hiring template ID
  templateParams,
  'OPf_qpcMtwb8J00UK'         // Your public key
);
```

## Step 5: Test the Form

1. Fill out the hiring form
2. Upload a test resume
3. Submit
4. Check your email inbox

## 📝 Notes

- **Max file size:** 5MB
- **Allowed formats:** PDF, DOC, DOCX
- **EmailJS Free Plan:** 200 emails/month
- **Upgrade for more:** https://www.emailjs.com/pricing/

## 🔧 Troubleshooting

**Resume not attaching?**
- Switch to FormSubmit or Formspree
- They handle file attachments better than EmailJS

**Form not submitting?**
- Check browser console for errors
- Verify EmailJS service ID and template ID
- Make sure public key is correct

## ✅ Recommended Setup

For best results with resume attachments:

**Use FormSubmit (No signup needed):**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('position', formData.position);
  formDataToSend.append('experience', formData.experience);
  formDataToSend.append('resume', formData.resume);
  
  try {
    await fetch('https://formsubmit.co/careers@pioneersdigital.com', {
      method: 'POST',
      body: formDataToSend
    });
    
    toast.success("Application submitted! 🎉");
  } catch (error) {
    toast.error("Failed to submit ❌");
  }
};
```

This works instantly without any setup!