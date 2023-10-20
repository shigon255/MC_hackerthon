import requests

url = "https://api.one-stage.kkstream.io/bv/cms/v1/vods"

payload = {
    "metadata": {
        "long_description": "",
        "short_description": ""
    },
    "name": "video.mp4",
    "profile_set_id": "6a2b2ea3-9e35-4216-93c9-da09dee5ab12",
    "pte": { "profile": "PTE_PROFILE_UNSPECIFIED" },
    "queue": "QUEUE_STANDARD",
    "security": {
        "domain_control": {
            "domains": ["https://showroom.one-dev.kkstream.io"],
            "enabled": False
        },
        "geo_control": [],
        "privacy": { "type": "SECURITY_PRIVACY_TYPE_PUBLIC" },
        "watermark": {
            "enabled": False,
            "position": "WATERMARK_POSITION_BOTTOM_RIGHT",
            "type": "WATERMARK_TYPE_IMAGE"
        }
    },
    "source": {
        "library": {
            "subtitles": [
                {
                    "code": "eng",
                    "display": "English",
                    "id": "ff59095c-fd67-4edc-9705-5e56c31b3577",
                    "name": "english.vtt"
                }
            ],
            "video": { "id": "c6f50caa-37ab-4d8c-9b06-e231544d598f" }
        },
        "type": "SOURCE_TYPE_LIBRARY"
    }
}
headers = {
    "x-bv-org-id": "e28bfe29-6bd1-425d-ad31-60b59ecd2028",
    "Content-Type": "application/json",
    "Accept": "application/json",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjMxYWRmZjNjLWYyOTQtNDI0Ny04MzY2LWQ5MzQ0NmIzMWJhMyIsImV4cCI6MTcyOTQzOTk5OSwianRpIjoiM2I2YzhmYTEtYTdjMS00OGViLTk0ZDEtMjA2ZTIzOGZlZjIyIiwidG9rZW5fdXNlIjoiYXBpX2FjY2VzcyIsImVtYWlsIjoicmF5NTIzMzUxMi5jczEwQG55Y3UuZWR1LnR3In0.TlEgJv1ZVSrLTN36iUUAv8zIN2ywS0Qafh3hxkieNyJqAV0o_in8FQyHqfP22yNQ4aQ9326ypwUzLuhnpOHZUrO3gVJQLMXW_05YhR8TMwj3P9TVFo6DXq-SZxJqdujbWnGfo3lYjlcD50Cj8PjzRCUUw8R8BHNvVl1msuiyZo5HNFWKNHXkwgnTn4pCxFxVlvgaGvUrJ1w2u9egjdaiJFCvJf0ID0VfmvQfbq_tDYBpuvyfmRrHEQ9T7vr_U1lZITGDY5_OYut0aHDXYrwptwXBUdbdsbRjOiarVo6m50ZprwxRqdost3DNca3sNCp7ewajcygXJIMbb0_GepDB-L5KsolldhOb66g5RygkzoWYQQFQ2exjCiwGnz7mb5cUQJGYz5CckBQC51OvKQGIM4ZpeeH4U0413FqVRMgJNdr0RTRWeKILkSrjZ2J2osyT01L9TuLzTNTTExLHrYQaE2P9MSuu3KZOung-WKU2fkJF12uTGqzMV9rucBf4Gs93ThqHHI66p2U64py1LAjoQ2u7v4w-cvEKXyNqPoSO_XvQUVqZ7iOAe6zXTHcPZ2LRcZFS8FPyz58f0988sx_z6KaLCSUarks1Vi-8NrBS-osO19jSHEsxXf-H2E7eV6A3Tb5DTZw_7Wn3am8tUrjoJ43J5QOyyZUZdu1eiG5g954"
}

response = requests.post(url, json=payload, headers=headers)

print(response.json())

# url = "https://api.one-stage.kkstream.io/bv/account/v1/accounts"

# headers = {
#     "x-bv-org-id": "e28bfe29-6bd1-425d-ad31-60b59ecd2028",
#     "Accept": "application/json",
#     "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjMxYWRmZjNjLWYyOTQtNDI0Ny04MzY2LWQ5MzQ0NmIzMWJhMyIsImV4cCI6MTcyOTQzOTk5OSwianRpIjoiM2I2YzhmYTEtYTdjMS00OGViLTk0ZDEtMjA2ZTIzOGZlZjIyIiwidG9rZW5fdXNlIjoiYXBpX2FjY2VzcyIsImVtYWlsIjoicmF5NTIzMzUxMi5jczEwQG55Y3UuZWR1LnR3In0.TlEgJv1ZVSrLTN36iUUAv8zIN2ywS0Qafh3hxkieNyJqAV0o_in8FQyHqfP22yNQ4aQ9326ypwUzLuhnpOHZUrO3gVJQLMXW_05YhR8TMwj3P9TVFo6DXq-SZxJqdujbWnGfo3lYjlcD50Cj8PjzRCUUw8R8BHNvVl1msuiyZo5HNFWKNHXkwgnTn4pCxFxVlvgaGvUrJ1w2u9egjdaiJFCvJf0ID0VfmvQfbq_tDYBpuvyfmRrHEQ9T7vr_U1lZITGDY5_OYut0aHDXYrwptwXBUdbdsbRjOiarVo6m50ZprwxRqdost3DNca3sNCp7ewajcygXJIMbb0_GepDB-L5KsolldhOb66g5RygkzoWYQQFQ2exjCiwGnz7mb5cUQJGYz5CckBQC51OvKQGIM4ZpeeH4U0413FqVRMgJNdr0RTRWeKILkSrjZ2J2osyT01L9TuLzTNTTExLHrYQaE2P9MSuu3KZOung-WKU2fkJF12uTGqzMV9rucBf4Gs93ThqHHI66p2U64py1LAjoQ2u7v4w-cvEKXyNqPoSO_XvQUVqZ7iOAe6zXTHcPZ2LRcZFS8FPyz58f0988sx_z6KaLCSUarks1Vi-8NrBS-osO19jSHEsxXf-H2E7eV6A3Tb5DTZw_7Wn3am8tUrjoJ43J5QOyyZUZdu1eiG5g954"
# }


# response = requests.get(url, headers=headers)

# print(response.json())

