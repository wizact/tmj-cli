---
title: Member
layout: document
---
# Member
Listing service creates, updates, relisti, or clone a job listing.

## Get Member Profile
**Path:** GET /member/:memberId

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/membership-methods/retrieve-member-profile/) 

**Description:** Returns member profile by member Id.

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request GET \
  --url /member/:memberId \
  --header 'authorization: Bearer JWToken' \
  --header 'content-type: application/json' \
  --data <Request Data> 
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "FirstName": "Amir",
  "Occupation": "",
  "Biography": "",
  "Quote": "",
  "Photo": "https://images.tmsandbox.co.nz/images/kiwi130.gif",
  "DateRemoved": "/Date(0)/",
  "IsEnabled": true,
  "Member": {
    "MemberId": 4004251,
    "Nickname": "wizact",
    "DateAddressVerified": "/Date()/",
    "DateJoined": "/Date()/",
    "UniqueNegative": 0,
    "UniquePositive": 0,
    "FeedbackCount": 0,
    "IsAddressVerified": true,
    "Suburb": "Wellington City",
    "IsAuthenticated": true
  }
}
{% endhighlight %}

## Get Member Summary
**Path:** GET /member/summary

**Authentication:** Required

**Ref:** [Here](http://developer.trademe.co.nz/api-reference/my-trade-me-methods/retrieve-your-profile-information/) 

**Description:** Returns logged in member summary. This is tied to the member who logged in and followed the `Auth` flow.

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request GET \
  --url /member/summary \
  --header 'authorization: Bearer JWToken' \
  --header 'content-type: application/json' \
  --data <Request Data> 
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "WonCount": 0,
  "LostCount": 2,
  "SellingCount": 12,
  "SoldCount": 0,
  "UnsoldCount": 2,
  "PositiveFeedback": 0,
  "NegativeFeedback": 0,
  "TotalFeedback": 0,
  "MemberId": 4004251,
  "Nickname": "wizact",
  "DateJoined": "/Date()/",
  "DateAddressVerified": "/Date()/",
  "IsAddressVerified": true,
  "Balance": 1262,
  "FirstName": "Amir",
  "LastName": "",
  "FixedPriceOffers": 1,
  "Email": "email@example.com",
  "ClosestLocality": "Wellington",
  "ClosestDistrict": "Wellington City",
  "IsAuthenticated": true,
  "FavouriteSearchCount": 0,
  "FavouriteCategoryCount": 0,
  "FavouriteSellerCount": 0,
  "RecentSearchesEnabled": false,
  "HighVolumeListingCount": 12,
  "HighVolumeThreshold": 50,
  "CanRemoveBids": false,
  "CanUseShoppingCart": true,
  "ShoppingCartCount": 0,
  "MemberProfile": {
    "Photo": "https://images.tmsandbox.co.nz/images/kiwi130.gif"
  },
  "ExternalTrackingToken": "hashcode=",
  "MobilePhoneNumber": "021 021021021"
}
{% endhighlight %}