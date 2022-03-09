#!/bin/bash

# Current user
who

# Load PATH, profiles, and other bash settings
echo "Loading bash profile and settings"
export PATH=~/.nvm/versions/node/v16.14.0/bin:$PATH
source ~/.bashrc
source ~/.profile
echo "PATH:"
echo "$PATH"

# Navigate to temp dir and pull changes
cd ~/services/3js-playaround
git pull origin main

# Install node_modules
echo "Node version"
node -v
rm -rf node_modules
npm install

## Build project
echo "Building..."
npm run  build

# Copy build files if build was a success
if [ -f "index.js" ];
then
rm -rf /var/www/html/3js-playaround.michaelymbong.art
cp -r build /var/www/html/3js-playaround.michaelymbong.art
else
echo "FAIL: index.js does not exist"
fi

echo "DONE!"
