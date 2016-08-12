---
title: Category
layout: document
---
# Category
Category service is acting as a catalogue to provide information about different job categories.

## Retrieve General Categories
**Path:** GET /category/:categoryId

**Authentication:** Anonymouse

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/catalogue-methods/retrieve-general-categories/) 

**Description:** This method returns general information about a specific category. Jobs categories starts from `5000`.   

**Request**
{% highlight curl %}
curl --request GET \
  --url /category/5000 
{% endhighlight %}

**Response**

{% highlight javascript %}
{
  "Name": "Trade Me Jobs",
  "Number": "5000-",
  "Path": "/Trade-Me-Jobs",
  "Subcategories": [
    {
      "Name": "Accounting",
      "Number": "5000-5001-",
      "Path": "/Trade-Me-Jobs/Accounting",
      "Subcategories": [
        {
          "Name": "Accountants",
          "Number": "5000-5001-5002-",
          "Path": "/Trade-Me-Jobs/Accounting/Accountants",
          "Subcategories": [
            {
              "Name": "Assistant accountants",
              "Number": "5000-5001-5002-6882-",
              "Path": "/Trade-Me-Jobs/Accounting/Accountants/Assistant-accountants",
              "HasClassifieds": true
          }]
      }]
    }
}
{% endhighlight %}

## Retrieve Category Details
**Path:** GET /category/:categoryId/detail

**Authentication:** Anonymouse

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/catalogue-methods/retrieve-detailed-information-about-a-single-category/) 

**Description:** This method returns detail information about a specific category. Jobs categories starts from `5000`.   

**Request**
{% highlight curl %}
curl --request GET \
  --url /category/5000/detail 
{% endhighlight %}

**Response**

{% highlight javascript %}
{
  "CategoryId": 5007,
  "Name": "Accounts administrators",
  "Path": "/Trade-Me-Jobs/Accounting/Accounts-administrators",
  "CanListAuctions": false,
  "CanListClassifieds": true,
  "CanRelist": false,
  "DefaultDuration": 30,
  "AllowedDurations": [
    30
  ],
  "Fees": {
    "Feature": 99,
    "Homepage": 0,
    "Listing": 178,
    "ListingFeeTiers": [
      {
        "MinimumTierPrice": 0,
        "FixedFee": 178
      }
    ],
    "Branding": 34.5
  },
  "FreePhotoCount": 20,
  "MaximumPhotoCount": 20,
  "Attributes": [
    {
      "Name": "Company",
      "DisplayName": "Name of employer",
      "Value": null,
      "Type": 4,
      "MaxStringLength": 50
    },
    {
      "Name": "JobType",
      "DisplayName": "Type",
      "Value": null,
      "Type": 4,
      "Options": [
        {
          "Value": "FT",
          "Display": "Full time"
        },
        {
          "Value": "PT",
          "Display": "Part time"
        }
      ],
      "IsRequiredForSell": true
    }
  ],
  "EmbeddedContentOptions": [
    {
      "Value": "YouTube"
    }
  ]
}
{% endhighlight %}

## Retrieve Job Categories
**Path:** GET /category/

**Authentication:** Anonymouse

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/catalogue-methods/retrieve-jobs-categories/) 

**Description:** This method returns all Job categories.   

**Request**
{% highlight curl %}
curl --request GET \
  --url /category/
{% endhighlight %}

**Response**
{% highlight javascript %}
[
  {
    "Name": "Accounting",
    "Code": "5001",
    "SubCategories": [
      {
        "Name": "Accountants",
        "Code": "5002",
        "SubCategories": null
      }
    ]
  }
]
{% endhighlight %}