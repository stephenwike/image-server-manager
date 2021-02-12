# Image Server Manager

Image Server Manager is a service that contains a node express Web API for managing uploaded images from the public internet.

## Environment Variables

Environment variables can be used with a file `.env`.  The variables are newline delimited **KEY** = **VALUE** pairs.

Variable|Description|Default|Required
---|---|---|---
ROOT_IMAGES_FOLDER|Root folder where all images are stored. (Approved and unapproved)|/images|false
PORT|The port where the Web API can be reached.|5000|false

## APIs

### GET http://*host*/api/images/*:folder*

Retrieves all images from all folders inside the "unapproved" directory.

### POST http://*host*/api/upload/*:folder*

Uploads a single image to a file storage under the "unapproved" directory.