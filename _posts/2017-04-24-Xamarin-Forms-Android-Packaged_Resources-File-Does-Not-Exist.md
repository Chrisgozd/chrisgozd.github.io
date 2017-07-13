---
layout: post
title: Xamarin Forms Android - The file packaged_resources does not exist.
---

Recently, I was working on the Android version of my Xamarin Forms application.  I had already built and deployed a few times when I ran into the error, _The file "obj\Debug\android\bin\packaged_resources" does not exist._

With a little help from Google, common solutions to the problem were:
1. Remove all spaces, -, and _ from Android drawables.
2. Remove all nuget packages and reinstall them.
3. Make sure to add android styles correctly to xml files (style="" instead of android:style="").

Trouble was, I hadn't touched my drawables today, nor had I edited any Android XML files, and I certainly didn't want to waste precious megabytes reinstalling nuget packages on my slow internet connection.

Here is the solution that I found worked for me. (**Try solution #1 first to save yourself some time and data**)

<!--more-->

### Error Message

The file "obj\Debug\android\bin\packaged_resources" does not exist.

[![File packaged_resources does not exist]({{ site.contenturl }}file_packaged_resources_not_exist.png)]({{ site.contenturl }}file_packaged_resources_not_exist.png)

### Solution #1 (Quick - Visual Studio won't redownload the zips, just decompress and unzip the current ones)

1. Go to the Xamarin cache, located here: C:\Users\\_YourUsername_\\AppData\Local\Xamarin.
2. Delete everything inside the folder, Except for the **zips** folder.
3. Rebuild the project in Xamarin Studio.

### Solution #2 (Longer - Visual Studio redownloads the cache zips)

1. Go to the Xamarin cache, located here: C:\Users\\_YourUsername_\\AppData\Local\Xamarin.
2. Delete everything inside the folder.
3. Rebuild the project in Xamarin Studio.

### Relevant Platform Information
- Windows 10 x64
- Visual Studio Community 2017
- Xamarin Forms 2.3.3.193
- Xamarin Visual Studio 4.4.0