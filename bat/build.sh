cd app

if [ $1 = "en" ]; then
  echo "========en build started========"
  npm run build--en
else
  echo "========ja build started========"
  npm run build
fi

echo '========build ended========'

cd ..
rm -r ./www
ln -s app/build/ www
cordova build
