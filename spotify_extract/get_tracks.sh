#!/bin/zsh

alias python='/usr/local/bin/python3.11'

echo "Setting up python env..."
echo -e "\n"

python -m venv venv
source venv/bin/activate
python -m pip install -r requirements.txt

echo -e "\nStarting Spotify extract...\n"
echo Date:
date

echo -e "\n"
git checkout main

echo -e "\n"
git fetch origin main

echo -e "\n"
python get_tracks.py

echo -e "\n"
git add ../src/tracks/*

echo -e "\n"
git commit -m "$DATE - Spotify extract"

echo -e "\n"
git push origin main

cd ~

echo -e "\nSpotify extract complete!\n"
