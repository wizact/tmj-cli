---
title: Attributes
layout: document
---
# Attributes
Most of Job listing information is stored as attributes. Below is the short explaination of them.

List of all these are available in [Category Detail](../cat/index.html#retrieve-category-details) service and they should not be hardcoded to avoid breaking your application. 

## District
The district of the listing. The value should be a valid integer from localities service. The region of the listing get inferred upon submission of request.

**Name:** District

**Type:** Number

**Required** 

## Company
The Job listing company name.

**Name:** Company

**Type:** String

**Max Length** 50

## Job Type
The advertised job type.

**Name:** JobType

**Type:** String

**Accepted Values**: `FT` for full time jobs, `PT` for Part time jobs. 

**Required** 

## Contract Duration
The contract duration.

**Name:** ContractDuration

**Type:** String

**Accepted Values:** `PER` for permanent jobs, `CT` for contract jobs. 

**Required** 

## Pay and Benefits
Explaination of pay and benefits of the advertised job.

**Name:** PayAndBenefits

**Type:** String

**Max Length** 50



## Salary Information
Salary information is formed by five different attributes. 

* Pay type (PayType)
* Hourly Salary higher bound (HourlyRateRangeUpper)
* Hourly Salary lower bound (HourlyRateRangeLower) 
* Yearly Salary higher bound (ApproximatePayRangeHigh)
* Yearly Salary lower bound (ApproximatePay)

There are some rules around salary information:

* If the `Pay Type` is set to `HOURLY` the payload should contain hourly salary. The yearly will be calculated based on hourly upon submission to make job search easier. 
* If the `Pay Type` is set to `SALARY` the payload should contain yearly salary. The hourly will be calculated based on yearly upon submission to make job search easier.
* The minimum and maximum salary should be only half 10K difference.
* Pay type and accordingly the other minimum and maximum salary ranges are required.
* For voluntary jobs both minimum and maximum salary should set to 0.

### Pay Type

**Name:** PayType

**Type:** String

**Accepted Values:** `SALARY` for yearly, `HOURLY` for hourly jobs.

**Required** 

### Hourly Salary Range

**Name:** HourlyRateRangeUpper, HourlyRateRangeLower

**Type:** Number

**Accepted Values:** `0` for voluntary, `150` for minimum wage, `175`, `200`, `250`, `300`, `350`, `400`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1200`, `1400`, `1500` for $150+

The values are available in category details endpoint.

**Required** 

### Yearly Salary Range

**Name:** ApproximatePayRangeHigh, ApproximatePay

**Type:** Number

**Accepted Values:** `0` for voluntary, `20000`, `250000`, `30000`, `35000`, `40000`, `50000`, `60000`, `70000`, `80000`, `90000`, `100000`, `110000`, `120000`, `130000`, `140000`, `150000`, `160000`, `170000`, `180000`, `190000`, `200000`

**Required** 

## Visa Status
Checks if this job requires work permit.

**Name:** IsWorkPermitNeeded

**Type:** Boolean

## Reference Number
Your reference number. It can be any value up to 20 characters.

**Name:** YourReference

**Type:** String

**Max Length:** 20

## Application Detail
Application details value is consist of the following attributes:

### Contact Name 
The contact name responsible for handling applications. This name may be shown in the job listing as contact name.

**Name:** ContactName

**Type:** String

**Max Length:** 50

### Application Mode
Preferred application mode. By setting this field you can change the behaviour of `Apply button` on the web site.

**Name:** PreferredApplicationMode

**Type:** String

**Accepted Values:** `E` for Email, `O` for Online, `N` for Not Accept

### Email Address
A valid email address to be used by Trade Me to send applications to. This attribute is mandatory if Application mode is set to `E` as email.

**Name:** EmailAddress

**Type:** String

**Max Length:** 50

### Application Url
A valid url to redirect the applicants upon applying for the job. This attribute is mandatory if Application mode is set to `O` as online. 

**Name:** ApplicationUrl

**Type:** String

**Max Length:** 250

### Phone Numbers
A valid New Zealand or Australian phone number. At least one of the attributes is mandatory if application mode is set to `N` as Not Accept. The phone number will be shown in the job listing.

**Name:** Phone1Number, Phone2Number

**Type:** String

**Max Length:** 10

### Phone Numbers Prefix
A valid New Zealand phone prefix or `0061` for Australian application. At least one of the attributes is mandatory if application mode is set to `N` as Not Accept. 

**Name:** Phone1Prefix, Phone2Prefix

**Type:** String

**Max Length:** 10

## Application Instruction
A text message to show to applicants containing general information regarding application process. Something like `Please apply with CV & cover letter before 1 Jan. We'll respond as soon as we've processed your application.`

**Name:** ApplicationInstructions

**Type:** String

**Max Length:** 500

## General Management Flag
A flag indicating this is a general management job.

**Name:** GeneralManagement

**Type:** Boolean

## Branding Flag
A flag indicating this listing should show company branding. In the [Create Listing](../listing/index.html#create-a-listing) service, if this flag is set, the `IsBranded` extras flag should be set as true as well. Moreover, setting `IsBranded` extras requires that you already have at least one branding image uploaded.  

**Name:** Branding

**Type:** Boolean

## Listing Branding
By default branding is set to the last or default branding image you have uploaded. By using these two attributes you can set the specific branding logo or banner. Please note that using any of these two requires that you send the `branding` flag as well.

**Name:** BrandingBanner, BrandingLogo

**Type:** Number