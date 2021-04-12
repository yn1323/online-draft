if [ -z $1]; then
  echo 'Please enter <Alias>'
  exit
fi

echo +++++++++++++signing start+++++++++++++

echo removing old apk file...
rm ./apk/android-signed.apk
rm ./apk/android-release.apk

echo copy new apk file
cp ./android/app/build/outputs/apk/release/app-release-unsigned.apk ./apk/

echo signing...
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore ./apk/app-release-unsigned.apk $1

echo zipping...
./zipalign -f -v 4 apk/app-release-unsigned.apk apk/android-release.apk

rm ./apk/app-release-unsigned.apk

echo +++++++++++++signing end+++++++++++++

