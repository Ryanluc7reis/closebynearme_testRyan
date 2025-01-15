#!/bin/sh
path_default_setting="domain-default-setting/default-setting.txt"
path_testing="/home/denial/nginx"
path_real="/etc/nginx"
target_path="$path_real"

echo "insert name of the domain you want to add in nginx settings"

read -p 'Domain: ' your_domain
read -p 'Port: ' INTERNAL_PORT

echo "this is correct $your_domain?"
read -p "Confirm Y/n: " answer
answer="${answer:-1}"
echo "installing..."

if [ "$answer" -eq 1 ] ; then
domain_path="$target_path/sites-available/$your_domain"
enabled_path="$target_path/sites-enabled/"

touch $domain_path & cat $path_default_setting > $domain_path.temp_1

# cat resin.conf | sed -e 's/ABC/XYZ/' > resin.conf
cat $domain_path.temp_1 | sed -e "s/YOUR_DOMAIN/$your_domain/" > $domain_path.temp_2
cat $domain_path.temp_2 | sed -e "s/INTERNAL_PORT/$INTERNAL_PORT/" > $domain_path
rm $target_path/sites-available/*.temp_*


echo "linking..."

ln -s $domain_path $enabled_path
echo "Done!!"
echo ""
echo "installation path: $domain_path"

sudo nginx -t
sudo systemctl restart nginx

echo "please run this command to install ssl certified"
echo "sudo certbot --nginx -d $your_domain"

exit 1
else
    exit 1
fi