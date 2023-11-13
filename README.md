# marvel

## Description
We are creating a website that allows users to view details about their favorite Marvel characters and interact with them in different ways.

## API
We will utilize the marvel API (https://developer.marvel.com/). Example:

{
  "code": "int",
  "status": "string",
  "copyright": "string",
  "attributionText": "string",
  "attributionHTML": "string",
  "data": {
    "offset": "int",
    "limit": "int",
    "total": "int",
    "count": "int",
    "results": [
      {
        "id": "int",
        "name": "string",
        "description": "string",
        "modified": "Date",
        "resourceURI": "string",
        "urls": [
          {
            "type": "string",
            "url": "string"
          }
        ],
        "thumbnail": {
          "path": "string",
          "extension": "string"
        },
        "comics": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        },
        "stories": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string",
              "type": "string"
            }
          ]
        },
        "events": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        },
        "series": {
          "available": "int",
          "returned": "int",
          "collectionURI": "string",
          "items": [
            {
              "resourceURI": "string",
              "name": "string"
            }
          ]
        }
      }
    ]
  },
  "etag": "string"
}

## Trello Board
https://trello.com/b/55SLtuhD/marvel-project

## Wireframe
![image](https://github.com/tyjsmith1/marvel/assets/95344047/d3e6c0cc-2b4d-4b09-86db-fff8fa88f32d)


## Style Guide
![image](https://github.com/tyjsmith1/marvel/assets/95344047/ff797fdb-6b2a-4c5b-b703-d3cbfba9343d)

1) Red - FF0000
2) Black - 000000
3) White - FFFFFF
4) Gold - FAC42E
5) Light Blue - A9C4EB

## Stretch Deliverables
1) simulate battle between 2 characters
2) Users can like specific characters
3) 
