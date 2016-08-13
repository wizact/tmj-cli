---
title: Watchlist
layout: document
---
# Watchlist
Watchlist service provides operations to manage logged-in member watchlist.

## Retrieve Watchlist
**Path:** GET /watchlist/

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/my-trade-me-methods/retrieve-your-watchlist/) 

**Description:** Retrieves the list of watchlisted items for a logged-in member.

**Request**
{% highlight curl %}
curl --request GET \
  --url /watchlist/ \
  --header 'authorization: Bearer SWToken'
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "TotalCount": 1,
  "Page": 1,
  "PageSize": 1,
  "List": [
    {
      "ListingId": 4771776,
      "Title": "This is the title",
      "Category": "5000-5001-5007-",
      "StartPrice": 0,
      "StartDate": "/Date(1471055384830)/",
      "EndDate": "/Date(1473681599000)/",
      "ListingLength": null,
      "AsAt": "/Date(1471055405173)/",
      "CategoryPath": "/Trade-Me-Jobs/Accounting/Accounts-administrators",
      "RegionId": 12,
      "Region": "Northland",
      "Suburb": "Whangarei",
      "Note": "",
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
          "Value": "021 021021021"
        },
        {
          "Name": "email_address",
          "DisplayName": "Email Address",
          "Value": "test@example.com"
        },
        {
          "Name": "your_reference_#",
          "DisplayName": "Your reference #",
          "Value": "my ref"
        }
      ],
      "IsClassified": true,
      "IsOnWatchList": true,
      "PriceDisplay": "PayAndBenefits",
      "IsDealer": false,
      "IsLeading": false,
      "IsOutbid": false,
      "IsInCart": false,
      "MemberBidShippingOption": 0
    }
  ]
}
{% endhighlight %}

## Add to Watchlist
**Path:** POST /watchlist/:listingId

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/my-trade-me-methods/add-a-listing-to-your-watchlist/) 

**Description:** Adds a listing to the logged-in member watchlist.   

**Request**
{% highlight curl %}
curl --request POST \
  --url /watchlist/:listingId \
  --header 'authorization: Bearer {{bearer}}'
{% endhighlight %}

**Response**

{% highlight javascript %}
{
  "Success": true,
  "Description": "Success"
}
{% endhighlight %}

## Remove a Listing from Watchlist
**Path:** DELETE /watchlist/:listingId

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/my-trade-me-methods/remove-a-listing-from-your-watchlist/) 

**Description:** Removes a listing from the logged-in member watchlist.   

**Request**
{% highlight curl %}
curl --request DELETE \
  --url /watchlist/:listingId \
  --header 'authorization: Bearer {{bearer}}'
{% endhighlight %}

**Response**

{% highlight javascript %}
{
  "Success": true,
  "Description": "Success"
}
{% endhighlight %}