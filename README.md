# The Hershey Group — Static Website

A clean, fast, static HTML/CSS rebuild of thehersheygroup.com — no WordPress, no plugins, no vulnerabilities.

## File Structure

```
hersheygroup/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← All styles (shared across pages)
├── js/
│   └── shared.js           ← Shared header, footer, scroll-reveal
└── pages/
    ├── about.html          ← About Us
    ├── services.html       ← Services
    ├── portfolio.html      ← Portfolio (all 4 categories)
    ├── faq.html            ← FAQ with accordion
    └── contact.html        ← Contact form (EmailJS)
```

---

## Deploying to GitHub Pages (Free)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it `thehersheygroup` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop the entire `hersheygroup/` folder contents
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://yourusername.github.io/thehersheygroup/`

### Step 5 — Connect your custom domain (optional)
1. In **Settings → Pages**, enter `thehersheygroup.com` under **Custom domain**
2. At your domain registrar, add these DNS records:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   CNAME www  yourusername.github.io
   ```
3. Check **Enforce HTTPS** once DNS propagates (up to 24 hours)

---

## Deploying to Replit (Easiest)

1. Go to [replit.com](https://replit.com) and create a free account
2. Click **+ Create Repl** → choose **HTML, CSS, JS**
3. Delete the default files
4. Upload all files from this folder (maintaining the folder structure)
5. Click **Run** — your site is live instantly with a Replit URL
6. To use a custom domain: go to the Repl settings → **Custom Domain**

---

## Setting Up the Contact Form (EmailJS)

The contact form uses [EmailJS](https://emailjs.com) — free for up to 200 emails/month.

### Step 1 — Create EmailJS account
Go to [emailjs.com](https://emailjs.com) → Sign up free

### Step 2 — Add an email service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose Gmail, Outlook, or your email provider
3. Connect your `sales@thehersheygroup.com` account
4. Note down your **Service ID**

### Step 3 — Create an email template
1. Dashboard → **Email Templates** → **Create New Template**
2. Set **To Email**: `sales@thehersheygroup.com`
3. Use this template body:
   ```
   New inquiry from {{from_name}} ({{company}})
   
   Email: {{from_email}}
   Phone: {{phone}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Note down your **Template ID**

### Step 4 — Get your Public Key
1. Dashboard → **Account** → **API Keys**
2. Copy your **Public Key**

### Step 5 — Update contact.html
Open `pages/contact.html` and replace:
```javascript
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```
with your actual values.

---

## Fixing Email Deliverability (DNS Records)

These DNS records need to be added at wherever the domain's DNS is managed
(typically GoDaddy, Namecheap, Cloudflare, etc.):

### SPF Record (prevents email spoofing)
```
Type: TXT
Host: @
Value: v=spf1 include:_spf.google.com ~all
```
*(Replace `_spf.google.com` with your actual mail provider's SPF include)*

### DMARC Record (tells receiving servers what to do with spoofed mail)
```
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:sales@thehersheygroup.com
```

### DKIM (provided by your email host — usually found in their DNS settings panel)

### Check blacklist status
Go to: https://mxtoolbox.com/blacklists.aspx
Enter: thehersheygroup.com
Submit delisting requests for any lists that flag the domain.

---

## Pages Fixed vs. Original WordPress Site

| Issue | Status |
|-------|--------|
| 6 pages returning HTTP 500 errors | ✅ Fixed — all pages rebuilt clean |
| "Get Started" linking to gpsites.co (3rd party) | ✅ Fixed — links to services page |
| FAQ nav linking to wrong page | ✅ Fixed |
| /style/ internal dev page publicly visible | ✅ Removed entirely |
| Incomplete sentences on About & Services pages | ✅ Fixed |
| Inconsistent address across pages | ✅ Standardized to 2010-A New Garden Road |
| No XML sitemap | ✅ Add via Google Search Console after deploy |
| WordPress/plugin vulnerabilities | ✅ Eliminated — no CMS or plugins |
| Outdated copyright year in footer | ✅ Auto-updates via JavaScript |

---

## After Launch Checklist

- [ ] Set up EmailJS and test the contact form
- [ ] Add SPF, DKIM, DMARC DNS records
- [ ] Check domain at mxtoolbox.com/blacklists.aspx — submit delisting if needed
- [ ] Verify SSL certificate is active (GitHub Pages handles this automatically)
- [ ] Submit site to Google Search Console: https://search.google.com/search-console
- [ ] Submit sitemap (create one at xml-sitemaps.com)
- [ ] Submit site to Bing Webmaster Tools
- [ ] Update Google Business Profile with correct address (2010-A New Garden Road)
