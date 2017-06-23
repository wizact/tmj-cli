---
title: Listing
layout: document
---
# Listing
Listing service creates, updates, relisti, or clone a job listing.

## Attribute Description


## Create a Listing
**Path:** POST /listing/

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/selling-methods/list-an-item/) 

**Description:**  Create a job listing. This operation returns 400 if the listing payload is not parsable by the server. If there is any other validation errors, the results will be represented with `200` status code, `Success = false` and the explanation can be found in the response. In case of success, the response contains the detail of created listing as well as listing Id.

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request POST \
  --url /listing/ \
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
        { "Name": "JobDistrict", "Value": "2" },
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
  "Description": "ListingId 4771533 created.",
  "ListingId": 4771533,
  "Listing": {
    "ListingId": 4771533,
    "Title": "This is the title",
    "Category": "5000-5001-5007-",
    "StartPrice": 0,
    "StartDate": "/Date(1471051074227)/",
    "EndDate": "/Date(1473681599000)/",
    "ListingLength": null,
    "IsFeatured": true,
    "AsAt": "/Date(1471051074837)/",
    "CategoryPath": "/Trade-Me-Jobs/Accounting/Accounts-administrators",
    "RegionId": 12,
    "Region": "Northland",
    "SuburbId": 67,
    "Suburb": "Whangarei",
    "NoteDate": "/Date(0)/",
    "CategoryName": "Accounts administrators",
    "ReserveState": 3,
    "Attributes": [
      {
        "Name": "company",
        "DisplayName": "Company",
        "Value": "ACME",
        "EncodedValue": "ACME"
      },
      {
        "Name": "job_location",
        "DisplayName": "Job Location",
        "Value": "Whangarei, Northland"
      },
      {
        "Name": "type",
        "DisplayName": "Type",
        "Value": "FT",
        "EncodedValue": "FT"
      },
      {
        "Name": "duration",
        "DisplayName": "Duration",
        "Value": "PER"
      },
      {
        "Name": "pay_and_benefits",
        "DisplayName": "Pay and benefits",
        "Value": "PayAndBenefits",
        "EncodedValue": "PayAndBenefits"
      },
      {
        "Name": "application_instructions",
        "DisplayName": "Application Instructions",
        "Value": "Apply via email"
      },
      {
        "Name": "contact_name",
        "DisplayName": "Contact Name",
        "Value": "ContactName"
      },
      {
        "Name": "contact_type",
        "DisplayName": "Contact Type",
        "Value": "via_email"
      },
      {
        "Name": "contact_phone_number",
        "DisplayName": "Contact Phone Number",
        "Value": "021 01233211"
      },
      {
        "Name": "your_reference_#",
        "DisplayName": "Your reference #",
        "Value": "my ref"
      },
      {
        "Name": "apply_online",
        "DisplayName": "Apply Online",
        "Value": "path to apply online page"
      }
    ],
    "IsClassified": true,
    "OpenHomes": [],
    "RemainingGalleryPlusRelists": 0,
    "PriceDisplay": "PayAndBenefits",
    "ExternalReferenceId": "test_ref",
    "Member": {
      "MemberId": 4004251,
      "Nickname": "wizact",
      "DateAddressVerified": "/Date(1468843200000)/",
      "DateJoined": "/Date(1468843200000)/",
      "UniqueNegative": 0,
      "UniquePositive": 0,
      "FeedbackCount": 0,
      "IsAddressVerified": true,
      "Suburb": "Wellington City",
      "Region": "Wellington",
      "IsAuthenticated": true
    },
    "Body": "Description is here\r\n\r\n
    Applicants for this position should have NZ residency or a valid NZ work visa.",
    "Photos": [],
    "AllowsPickups": 1,
    "ShippingOptions": [],
    "PaymentOptions": "",
    "ContactDetails": {
      "ContactName": "ContactName",
      "PhoneNumber": "(021) 01233211",
      "MobilePhoneNumber": "(021) 01233211"
    },
    "CanAddToCart": false,
    "EmbeddedContent": {},
    "ContactCount": 0
  }
}
{% endhighlight %}

## Update a Listing
**Path:** PUT /listing/

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/selling-methods/edit-an-item/) 

**Description:**  Updates a job listing and charge the member if there is any additional extras like branding, or feature is selected. The behaviour is exactly the same as create listing except that request needs to have an additional `ListingId` field.

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request PUT \
  --url /listing/ \
  --header 'authorization: Bearer JWToken' \
  --header 'content-type: application/json' \
  --data <Request Data> 
{% endhighlight %}

**Request Data**
{% highlight javascript %}
{
    "Category": 5007,
    "Title": "This is the title 10",
    "Description": [ "Description is here" ],
    "Duration": 30,
    "IsClassified": true,
    "IsFeatured": true,
    "Attributes": [
        { "Name": "Company", "Value": "ACME" }, 
        { "Name": "JobDistrict", "Value": "2" },
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
        { "Name": "Phone1Number", "Value": "01212121" },
        { "Name": "Phone2Prefix", "Value": "021" },
        { "Name": "Phone2Number", "Value": "01212121" },
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
    "ShortDescription": "Short Description",
    "ListingId": 4771533
}
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "Success": true,
  "Description": "ListingId 4771533 updated.",
  "ListingId": 4771533,
  "Listing": {
    "ListingId": 4771533,
    "Title": "This is the title 10",
    "Category": "5000-5001-5007-",
    "StartPrice": 0,
    "StartDate": "/Date(1471051074227)/",
    "EndDate": "/Date(1473681599000)/",
    "ListingLength": null,
    "IsFeatured": true,
    "AsAt": "/Date(1471051874291)/",
    "CategoryPath": "/Trade-Me-Jobs/Accounting/Accounts-administrators",
    "RegionId": 12,
    "Region": "Northland",
    "SuburbId": 67,
    "Suburb": "Whangarei",
    "NoteDate": "/Date(0)/",
    "CategoryName": "Accounts administrators",
    "ReserveState": 3,
    "Attributes": [
      {
        "Name": "company",
        "DisplayName": "Company",
        "Value": "ACME",
        "EncodedValue": "ACME"
      },
      {
        "Name": "job_location",
        "DisplayName": "Job Location",
        "Value": "Whangarei, Northland"
      },
      {
        "Name": "type",
        "DisplayName": "Type",
        "Value": "FT",
        "EncodedValue": "FT"
      },
      {
        "Name": "duration",
        "DisplayName": "Duration",
        "Value": "PER"
      },
      {
        "Name": "pay_and_benefits",
        "DisplayName": "Pay and benefits",
        "Value": "PayAndBenefits",
        "EncodedValue": "PayAndBenefits"
      },
      {
        "Name": "application_instructions",
        "DisplayName": "Application Instructions",
        "Value": "Apply via email"
      },
      {
        "Name": "contact_name",
        "DisplayName": "Contact Name",
        "Value": "ContactName"
      },
      {
        "Name": "contact_type",
        "DisplayName": "Contact Type",
        "Value": "via_email"
      },
      {
        "Name": "contact_phone_number",
        "DisplayName": "Contact Phone Number",
        "Value": "021 08385199"
      },
      {
        "Name": "your_reference_#",
        "DisplayName": "Your reference #",
        "Value": "my ref"
      },
      {
        "Name": "apply_online",
        "DisplayName": "Apply Online",
        "Value": "apply online url"
      }
    ],
    "IsClassified": true,
    "OpenHomes": [],
    "RemainingGalleryPlusRelists": 0,
    "PriceDisplay": "PayAndBenefits",
    "ExternalReferenceId": "test_ref",
    "Member": {
      "MemberId": 4004251,
      "Nickname": "wizact",
      "DateAddressVerified": "/Date(1468843200000)/",
      "DateJoined": "/Date(1468843200000)/",
      "UniqueNegative": 0,
      "UniquePositive": 0,
      "FeedbackCount": 0,
      "IsAddressVerified": true,
      "Suburb": "Wellington City",
      "Region": "Wellington",
      "IsAuthenticated": true
    },
    "Body": "Description is here\r\n\r\n
    Applicants for this position should have NZ residency or a valid NZ work visa.",
    "Photos": [],
    "AllowsPickups": 1,
    "ShippingOptions": [],
    "PaymentOptions": "",
    "ContactDetails": {
      "ContactName": "ContactName",
      "PhoneNumber": "(021) 01212121",
      "MobilePhoneNumber": "(021) 01212121"
    },
    "CanAddToCart": false,
    "EmbeddedContent": {},
    "ContactCount": 0
  }
}
{% endhighlight %}

## Withdraw a Listing
**Path:** DELETE /listing/

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/selling-methods/withdraw-an-auction-or-classified/) 

**Description:**  Withdraws a current live listing.

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request DELETE \
  --url /listing/ \
  --header 'authorization: Bearer JWToken' \
  --header 'content-type: application/json' \
  --data <Request Data> 
{% endhighlight %}

**Request Data**
{% highlight javascript %}
{
    "ListingId": 4771601,
    "Reason":  "Just testing the withdraw"
}
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "Success": true,
  "Description": "4771601 withdrawn",
  "ListingId": 4771601
}
{% endhighlight %}

## Clone a Listing
**Path:** POST /listing/clone

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/selling-methods/sell-similar-from-an-existing-auction-or-classified/) 

**Description:** Clones a current live listing and charges the member for the new listing. All the fields are copied one by one. 

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request POST \
  --url /listing/clone \
  --header 'authorization: Bearer JWToken' \
  --header 'content-type: application/json' \
  --data <Request Data> 
{% endhighlight %}

**Request Data**
{% highlight javascript %}
{
    "ListingId": 4771533,
    "ReturnListingDetails": true
}
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "Success": true,
  "Description": "Created similar item.",
  "ListingId": 4771601,
  "Listing": {
    "ListingId": 4771601,
    "Title": "This is the title 10",
    "Category": "5000-5001-5007-",
    "StartPrice": 0,
    "StartDate": "/Date(1471052220370)/",
    "EndDate": "/Date(1473681599000)/",
    "ListingLength": null,
    "IsFeatured": true,
    "AsAt": "/Date(1471052220464)/",
    "CategoryPath": "/Trade-Me-Jobs/Accounting/Accounts-administrators",
    "RegionId": 12,
    "Region": "Northland",
    "SuburbId": 67,
    "Suburb": "Whangarei",
    "NoteDate": "/Date(0)/",
    "CategoryName": "Accounts administrators",
    "ReserveState": 3,
    "Attributes": [
      {
        "Name": "company",
        "DisplayName": "Company",
        "Value": "ACME",
        "EncodedValue": "ACME"
      },
      {
        "Name": "job_location",
        "DisplayName": "Job Location",
        "Value": "Whangarei, Northland"
      },
      {
        "Name": "type",
        "DisplayName": "Type",
        "Value": "FT",
        "EncodedValue": "FT"
      },
      {
        "Name": "duration",
        "DisplayName": "Duration",
        "Value": "PER"
      },
      {
        "Name": "pay_and_benefits",
        "DisplayName": "Pay and benefits",
        "Value": "PayAndBenefits",
        "EncodedValue": "PayAndBenefits"
      },
      {
        "Name": "application_instructions",
        "DisplayName": "Application Instructions",
        "Value": "Apply via email"
      },
      {
        "Name": "contact_name",
        "DisplayName": "Contact Name",
        "Value": "ContactName"
      },
      {
        "Name": "contact_type",
        "DisplayName": "Contact Type",
        "Value": "via_email"
      },
      {
        "Name": "contact_phone_number",
        "DisplayName": "Contact Phone Number",
        "Value": "021 08385199"
      },
      {
        "Name": "your_reference_#",
        "DisplayName": "Your reference #",
        "Value": "my ref"
      },
      {
        "Name": "apply_online",
        "DisplayName": "Apply Online",
        "Value": "apply online url"
      }
    ],
    "IsClassified": true,
    "OpenHomes": [],
    "RemainingGalleryPlusRelists": 0,
    "PriceDisplay": "PayAndBenefits",
    "Member": {
      "MemberId": 4004251,
      "Nickname": "wizact",
      "DateAddressVerified": "/Date(1468843200000)/",
      "DateJoined": "/Date(1468843200000)/",
      "UniqueNegative": 0,
      "UniquePositive": 0,
      "FeedbackCount": 0,
      "IsAddressVerified": true,
      "Suburb": "Wellington City",
      "Region": "Wellington",
      "IsAuthenticated": true
    },
    "Body": "Description is here\r\n\r\n
    Applicants for this position should have NZ residency or a valid NZ work visa.",
    "Photos": [],
    "AllowsPickups": 1,
    "ShippingOptions": [],
    "PaymentOptions": "",
    "ContactDetails": {
      "ContactName": "ContactName",
      "PhoneNumber": "(021) 01212121",
      "MobilePhoneNumber": "(021) 01212121"
    },
    "CanAddToCart": false,
    "EmbeddedContent": {},
    "ContactCount": 0
  }
}
{% endhighlight %}

## Relist a Listing
**Path:** POST /listing/relist

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/selling-methods/relist-an-item/) 

**Description:**  Relists an expired job listing. The new listing has a new listing Id. The member gets charged for the new listing. 

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request POST \
  --url /listing/relist \
  --header 'authorization: Bearer JWToken' \
  --header 'content-type: application/json' \
  --data <Request Data> 
{% endhighlight %}

**Request Data**
{% highlight javascript %}
{
    "ListingId": 4765989,
    "ReturnListingDetails": true
}
{% endhighlight %}

**Response**
{% highlight javascript %}
// Same as Create Listing response
{% endhighlight %}

## Relist a Listing with Edit
**Path:** POST /listing/relistWithEdit

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/selling-methods/relist-an-item-with-edits/) 

**Description:**  

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request POST \
  --url /listing/relistWithEdit \
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
        { "Name": "JobDistrict", "Value": "2" },
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
        { "Name": "Phone1Number", "Value": "021021021" },
        { "Name": "Phone2Prefix", "Value": "021" },
        { "Name": "Phone2Number", "Value": "021021021" },
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
    "ShortDescription": "Short Description",
    "ListingId": 4765979
}
{% endhighlight %}

**Response**
{% highlight javascript %}
// Same as Create Listing response
{% endhighlight %}

## Possible Errors

### Application Url

**Status Code**
200

**Response**
{% highlight javascript %}
{
  Success: false,
  Description: "For Application details : au"
}
{% endhighlight %}

**Reason**
Setting `PreferredApplicationMode` to `E` to use `ApplicationUrl` for application process is only available for Job Pack and Volume Plan users.
This feature can be enabled only by account managers per request.