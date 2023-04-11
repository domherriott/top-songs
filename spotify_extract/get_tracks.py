import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from spotipy.oauth2 import SpotifyOAuth
import urllib.request
import json
from datetime import date
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

scope = "user-top-read"

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

results = sp.current_user_top_tracks(limit=20, offset=0, time_range='short_term')
track_info = {}

for idx, item in enumerate(results['items']):

    artists = ''
    for jdx, artist in enumerate(item['artists']):
        if jdx == 0:
            artists = artist['name']
        else:
            artists += ' & ' + artist['name']

    track_number = 'track_' + str(idx + 1)
    folder_name = '../src/tracks/' + track_number

    track_info[track_number] = {
        'name':item['name'],
        'artist':artists
    }
    print(folder_name)
    image_url = item['album']['images'][0]['url']
    # print(item['name'], '-', artists)
    #print(idx, track['artists'][0]['name'], " – ", track['name'])

    urllib.request.urlretrieve(image_url, folder_name + "/image.jpeg")

# Textual month, day and year	
today = date.today()
d = today.strftime("%d %B %Y")
track_info['generated_date'] = d

with open("../src/tracks/track_info.json", "w") as outfile: 
    json.dump(track_info, outfile)