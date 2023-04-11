#!/bin/zsh

echo "Setting up python env..."
echo -e "\n"
cd /root/documents/top-songs/spotify_extract

python -m venv venv
source myvenv/bin/activate
python -m pip install -r requirements.txt


echo -e "\nStarting Spotify extract...\n"
echo Date:
date

echo -e "\n"
git checkout main

echo -e "\n"
git fetch origin main

echo -e "\n"
python3 get_tracks.py

echo -e "\n"
git add ../src/tracks/*

echo -e "\n"
git commit -m "$DATE - Spotify extract"

echo -e "\n"
git push origin main

cd ~

echo -e "\nSpotify extract complete!\n"
