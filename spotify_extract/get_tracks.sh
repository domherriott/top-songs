#!/bin/bash

echo Starting Spotify extract...

cd /Users/dherriott/Documents/top-songs/spotify_extract

git checkout main
git fetch origin main

python3 get_tracks.py

git add ../src/tracks/*
git commit -m "$DATE - Spotify extract"

git push origin main

echo Spotify extract complete!

cd ~