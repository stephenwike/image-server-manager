
docker stop image-server-manager
docker rm image-server-manager

Push-Location -Path "./src/image-server-manager"
    docker build --no-cache -t local-image-server-manager .
    docker run --network devtools_default --rm -d -p 11224:5000 --name image-server-manager local-image-server-manager
    docker ps
Pop-Location
