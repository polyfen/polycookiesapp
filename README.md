# Poly Cookies

## A free solution to cookies consent
[Polycookies.com](https://polycookies.com) is a free and open-source solution to cookies consent management. Implementing Privacy Protection on your website is not just for legal compliance, it's about caring for your users.


## Support our cause!

Help us keep polycookies.com running and growing by donating any amount you'd like. Every cent helps!

[Send a Donation](https://donate.stripe.com/9AQ5lgeoDef2b1CdQQ)


## Authors

- [Boris Hrncic](https://boris.hr)
- [The Poly Group](https://thepolygroup.co)


## Installation Guide

### 1. Download the Poly Cookies source files

First, download the Poly Cookies source files which include the HTML code will be adding to Google Tag Manager and the CSS file you'll be adding to your website.

Download the ZIP file from the following link: https://github.com/The-Poly-Group/poly-cookies/archive/refs/heads/main.zip

### 2. Make sure you have installed GTM in all the pages of your website

We're gonna be using Google Tag Manager to add our code and settings. If you're not familiar with Google Tag Manager, don't worry. This tutorial will cover what you need to know.

If you haven't used Google Tag Manager before, then use your Google account to sign in and create a Container where we'll be adding all our code and specifications for your website, and add the corresponding code to call the Container in your head and body elements of all the pages you want to work with Poly Cookies.

If you already have a Container embedded in your website, then you can start with the following steps.

### 3. Add the Consent Mode tag to GTM

The Vendor Agnostic Google Consent Template will allow us to define and change the consent preferences of the user in GTM.

Download the ZIP file of the Google Consent Template: https://github.com/googleanalytics/gtm-consent-mode-examples/archive/refs/heads/main.zip

Once you're in the Workspace of your desired Container, we'll go to the "Templates" page and click on the "New" button in the Tag Templates section.

Next, click on the three dots icon on the upper-right corner of the screen and click on "Import" on the dropdown menu.

Select the template file included in the Google Consent Template ZIP.

The rest of the information about the Tag will fill out automatically. Just submit it.

### 4. Create a Default Consent state

Once you're in the Workspace of your desired Container, we'll go to "Tags" and click on the "New" button in the upper right corner.

We'll name it "Default Consent" so that Google knows that we're not having intrusive behavior with the user's browser once he or she lands on our webpage.

In the Tag Type, we'll select the "Consent Mode" tag we've uploaded with the tempalte file.

On the Default Settings, we'll add a row to specify that all browser privacy permissions are denied, except for any related to the Functionality Storage, which should be allowed.

As a trigger for the Tag will set "Consent Initialization - All Pages", which is by default the first event that fires in GTM.

### 5. Create a new Consent Accepted variable

On the Variables page of your GTM, look for the "User-Defined Variables" section and click the "New" button.

Name the new variable "consentAccepted" and set the variable type as a "1st Party Cookie".

We'll set the Cookie Name to "consentAccepted" and click on "Save".

### 6. Add the Cookies Modal as a custom HTML Tag

You can either create a new HTML, or you can use the template we've provided for you in the file **cookies-modal.html**.
        
Just replace the link "#YOUR-PRIVACY-POLICY-PAGE" with your privacy policy's page URL. If you don't have a privacy's policy page yet, you can set one up for free using a privacy policy generator, like getterms.io. We have no affiliation with GetTerms and you can use any other privacy policy generator or create a custom one consulting a legal expert.

We'll set up "All pages" as the trigger.

### 7. Create a Trigger based on clicking the Accept button

We'll go to the Triggers page and create a new one named "Clicked on Accept Cookies".

Select the "Click - All Elements" trigger type.

Change the option of "Trigger fires on" to "Some Clicks".

We'll set it as "Click ID", "equals", and "accept-cookies-button".

### 8. Create a new tag to Change the Consent Permissions

On the Tags page, we'll create a new one with a type of "Consent Mode - Vendor Agnostic Google Template".

The consent command should be "Update Command", and we'll set "Granted" in all storage settings.

As the trigger, We'll select the new "Clicked on Accept Cookies" we created and save.

### 9. Save the consent acceptance with a cookie

Create a new custom HTML tag named "Save Consent 1st party Cookie" with the following content.
                  
Make sure you check the box with the label "Support document.write".

And we'll select "Clicked on Accept Cookies" as the trigger and save the tag.

### 10. Create new Trigger for Page Views after accepted consent

We'll create a new Trigger and name it "Page view - previously accepted cookies".

Set the trigger configuration as "Page View".

Choose the firing option "Some Page Views".

Set the conditions for firing on "consentAccepted", "equals", and type "true".

### 11. Hide the Cookies modal on new page views after accepted consent

On the Tags page, we'll edit the "Cookies Modal" custom HTML tag triggers and add an exception.

We'll select "Page view - previously accepted cookies" as an exception and save.

Once we submit our Google Tag Manager container the functionality of our cookies consent modal should be working.

### 12. Add CSS style to the Cookies Modal

Add the "cookies.css" file from Poly Cookies to your website's <head>.
            
<link rel="stylesheet" href="cookies.css" type="text/css">       
          
Make sure all files (like the thumbs-up icons) are in the correct directory path.

By default, the cookies modal features a light theme. However, we can change it to a dark theme by adding class="dark-theme" to <div id="cookies-modal"> in the Cookies Modal HTML tag from GTM.

### 13. Set all tracking tags to trigger after accepted consent

Any tags that you want to you on your website to track your users activity should be set with the two triggers "Clicked on Accept Cookies" and "Page View - previously accepted cookies".

### 14. Test functionality

Clear your server and browser caché and open your website on a new tab.

Right-click anywhere on your webpage and click "Inspect Item" to open up the DevTools windown.

On the "Application" tab, navigate to the Storage›Cookies section of the sidebar, and click on your website's URL.

There should be no cookies saved on your browser by default.

Next, Click on the "Reject" button of the cookies modal. The modal should dissappear without saving any cookies.

Refresh the website, the cookies modal should re-appear. This time, click on the "Accept" button.

Lastly, go back to the DevTools "Application" tab and make sure there is a new cookie being registered from your website named "consentAccepted" with a value of "True" and an expiration date set 90 days from today's date.

All other tracking cookies you might be using, like "_ga" from Google Analytics, should also be appearing on the DevTools window.