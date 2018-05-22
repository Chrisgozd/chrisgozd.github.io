---
layout: post
title:  "I wrote an"
author: "Christopher"
---

Recently, GitHub announced support for HTTPS for custom domains with the help of Let's Encrypt! Before this announcement, the popular route to getting HTTPS configured on your GitHub page was to configure Cloudflare as the DNS.  This meant if you were using Namecheap.com you were unable to use their built-in email forwarding service (because Namecheap required their own DNS to be used instead of Cloudflare).  Today, its possible to remove Cloudflare from your configuration in setting up HTTPS and email forwarding and here is how.

## Set up DNS records in Namecheap
First, log into your Namecheap account and configure 4 A records and 1 CNAME record.

Wait a couple hours. Use dig to check.

## Reconfigure GitHub to Process DNS Changes

## Set up Email Forwarding in Namecheap