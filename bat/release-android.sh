if [ -z $1 ]; then
  echo 'Please enter ja or en'
  exit
fi

echo +++++++++++++release build start+++++++++++++

echo remove old platform file
rm -r ./.gradle
rm -r ./android


echo change capacitor.config.json language
# change config.xml language
node ./helper/config.js --lang $1

echo add platform
ionic capacitor add android

ionic cap copy

ionic cap sync

# edit ANdroidManifest.xml permission
node ./helper/editAndroidManifest.js

echo open android studio
echo please build in android studio
ionic capacitor open android

echo +++++++++++++release build end+++++++++++++
