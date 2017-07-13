---
layout: post
title: How to Backup a MySQL Database in a Docker Container Nightly and upload it to Dropbox
---

As developers we've all been in a situation where we've accidently truncated a table in a production MySQL database. Wait, you haven't? Is that only me? Well, follow along with this tutorial to save yourself from mistakes i've made.

For this tutorial, i'm going to assume you have a MySQL database running in a Docker container somewhere on the internet.  Now, you want to backup the MySQL database everynight from the Docker host and upload the backup to Dropbox.

Firstly, you should go remote into and login to your Docker host.  Once you finish this, you can continue reading below.

### Setup environment and Dropbox Upload Script

Create a directory to house scripts

{% highlight shell %}
mkdir /etc/backupMySql
cd /etc/backupMySql
{% endhighlight %}

Download the Dropbox script

{% highlight shell %}
curl "https://raw.githubusercontent.com/andreafabrizi/Dropbox-Uploader/master/dropbox_uploader.sh" -o dropbox_uploader.sh
{% endhighlight %}

Give permission to the script and run it

{% highlight shell %}
chmod +x dropbox_uploader.sh
.\dropbox_uploader.sh
{% endhighlight %}

The first time you run the script, you will be guided through instructions on how to create a Dropbox API key that will be used each time you upload the MySql backup to Dropbox.

### Create script to backup the MySql database and upload it to Dropbox

{% highlight shell %}
filename="backup_$(date +"%Y_%m_%d_%I_%M_%p").sql"
docker exec db ~/usr/bin/mysqldump -uroot -p$MYSQL_ROOT_PASSWORD pebblesofhope > ~/etc/pebbles-of-hope-docker/backupDb/$filename
~/etc/pebbles-of-hope-docker/backupDb/dropbox_uploader.sh upload ~/etc/pebbles-of-hope-docker/backupDb/$filename $filename
rm $filename
{% endhighlight %}

### Setup the script to run nightly using Cron

In the Docker host, enter the following line to edit the current Cron jobs.

{% highlight shell %}
crontab -e
{% endhighlight %}

The following cron job will run at 2:30am every day.

{% highlight shell %}
30 2 * * * /etc/backupMySql/backupMySql.sh
{% endhighlight %}