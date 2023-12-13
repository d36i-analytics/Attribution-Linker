# D36i Attribution Linker Tag

D36i Attribution Linker provides simple integration with the D36i Attribution Solution.

Control attribution to reflect the right channels to accurately measure success.

## Setup

This tag will add three variables to the dataLayer: `source`, `medium`, and `campaign`. It will fire a custom event when finished. These variables will be used to control attribution. Here is how to configure your GTM container to make the most of this tag.

### 1. Add the D36i Attribution Linker tag

- Navigate to `Tags`
- Create a new tag
- Choose `D36i Attribution Linker` configuration from the Community Template Gallery
- In `Client Tab`, write your D36i Attribution client tab name
- In `Event Name`, write your desired custom event name or leave as the default `d36i_pageview`
- To use the attribution on all pages, it is recommended you use the `Initialization - All Pages` trigger. Otherwise create a new trigger that fires on page view of the pages you want them to
- Save the tag

![Example Attribution Tag](./images/AttributionTag.png)

### 2. Make your three dataLayer variables

You will need to create a variable for each of `source`, `medium`, and `campaign`.

- Navigate to `Variables`
- Create new variable, named with `source`, `medium`, or `campaign`
- Choose `Data Layer Variable` configuration
- In `Data Layer Variable Name`, write the appropriate choice of `source`, `medium`, or `campaign`
- Save the variable and repeat until all three variables are created

![Example Source Variable](./images/SourceVariable.png)

### 3. Make your GA4 Settings variable

Using your three dataLayer variables, you will create a variable that you will use with your Google Tag.

- Navigate to `Variables`
- Create new variable, named `GA4 Settings`
- Choose `Google Analytics Settings` for the Variable Type
- Under `Config Parameter`, add 4 parameters
    - `campaign_source`: Set the value to `{{Source}}` by typing that or clicking the `+` icon on the right and selecting your `Source variable`
    - `campaign_medium`: Same as with Source, but enter `{{Medium}}` instead
    - `campaign_name`: Same as with Source, but enter `{{Campaign}}` instead
    - `send_page_view`: Set the value to true
- Save the variable

![Example GA4 Settings Variable](./images/GA4Settings.png)

### 4. Create custom event trigger

- Navigate to `Triggers`
- Create new trigger, named with your event name to avoid confusion
- Choose `Custom Event` configuration
- In `Event name`, write the same event name you used in step 1
- Save the trigger

![Example d36i_pageview event](./images/d36i_pageview.png)

### 5. Configure your Google Tag

- Navigate to `Tags`
- Click on your container's Google tag
- Change the trigger to your custom event trigger from step 4
- Open the `Configuration settings` section
- Set the Configuration Settings Variable to the `{{GA4 Settings}}` from step 3
- Save the tag

![Example Google Tag](./images/GoogleTag.png)

After these steps have been taken, the Google tag will fire with the proper fields being set with the proper values.

How it works is that when the custom event is fired, the Google tag will fire and update the appropriate campaign parameters to be used by future GA4 event tags. This means that if you want a GA4 event tag that fires on page view to use the attribution, you must add the custom event trigger to it rather than the usual `All Pages` trigger, so that it does not fire on its own before the Google Tag. This could be especially important for those tracking purchases.

It is recommended you test the setup in preview mode to ensure it is working as expected.