#!/bin/zsh

echo -e "\nStarting Spotify extract...\n"
echo Date:
date

echo -e "\n"
cd /Users/dherriott/Documents/top-songs/spotify_extract

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