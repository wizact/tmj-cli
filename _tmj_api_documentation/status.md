---
title: Status
layout: document
---
# Status Service
This is a loopback service. It can be used for health check purposes. 

**Status Codes:**
200, 400, 401

**Request**
{% highlight curl %}
curl --request GET \
  --url /status/testvalue \
  --header 'authorization: Bearer JWToken'
{% endhighlight %}

**Response**
{% highlight javascript %}
{
  "status": "Sat Aug 13 2016 14:19:57 GMT+1200 (NZST) testvalue"
}
{% endhighlight %}