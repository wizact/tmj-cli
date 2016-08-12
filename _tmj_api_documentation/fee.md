---
title: Fee
layout: document
---
# Fee
Fee service validates and returns the fee breakdown for a specific listing.

## Calculate Fee for Creating a Listing
**Path:** POST /fee/

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/selling-methods/retrieve-fees-for-listing-an-item/) 

**Description:** This method calculates the fee associated to create a Job listing.   

**Request**
{% highlight curl %}
curl --request POST \
  --url /fee/ \
  --header 'authorization: Bearer JWToken' \
  --header 'content-type: application/json' \
  --data <Request Data> 
{% endhighlight %}

**Request Data**
{% highlight javascript %}
{
    "Category": 5007,
    "Title": "This is the title",
    "Description": [ "Description is here" ],
    "Duration": 30,
    "IsClassified": true,
    "IsFeatured": true,
    "Attributes": [
        { "Name": "Company", "Value": "ACME" }, 
        { "Name": "District", "Value": "2" },
        { "Name": "JobType", "Value": "FT" },
        { "Name": "ContractDuration", "Value": "PER" },
        { "Name": "PayAndBenefits", "Value": "PayAndBenefits" },
        { "Name": "ApproximatePay", "Value": "20000" },
        { "Name": "ApproximatePayRangeHigh", "Value": "20000" },
        { "Name": "IsWorkPermitNeeded", "Value": "1" },
        { "Name": "YourReference", "Value": "my ref" },
        { "Name": "ContactName", "Value": "ContactName" },
        { "Name": "EmailAddress", "Value": "test@example.com" },
        { "Name": "ApplicationUrl", "Value": "http://example.com/apply" },
        { "Name": "Phone1Prefix", "Value": "021" },
        { "Name": "Phone1Number", "Value": "01233211" },
        { "Name": "Phone2Prefix", "Value": "021" },
        { "Name": "Phone2Number", "Value": "01233211" },
        { "Name": "PreferredApplicationMode", "Value": "E" },
        { "Name": "ApplicationInstructions", "Value": "Apply via email" },
        { "Name": "GeneralManagement", "Value": "1" },
        { "Name": "PayType", "Value": "SALARY" },
        { "Name": "Branding", "Value": "1" },
        { "Name": "BrandingBanner", "Value": "0" },
        { "Name": "BrandingLogo", "Value": "0" }
        ],
    "ExternalReferenceId": "test_ref",
    "ReturnListingDetails": true,
    "IsBranded": true,
    "ShortDescription": "Short Description"
}
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "Success": true,
  "Description": "Success.",
  "TotalCost": 311.5,
  "FeeItems": {
    "TotalCount": 3,
    "Page": 1,
    "PageSize": 3,
    "List": [
      {
        "Date": "/Date(1471008239037)/",
        "Type": 105,
        "Description": "Feature listing",
        "Credit": 0,
        "Debit": 99,
        "Balance": 0
      },
      {
        "Date": "/Date(1471008239037)/",
        "Type": 0,
        "Description": "Branded listing",
        "Credit": 0,
        "Debit": 34.5,
        "Balance": 0
      },
      {
        "Date": "/Date(1471008239037)/",
        "Type": 1,
        "Description": "Listing fee ($178.00, Accounts administrators category, listing no. 0)",
        "Credit": 0,
        "Debit": 178,
        "Balance": 0
      }
    ]
  }
}
{% endhighlight %}