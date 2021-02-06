#!/usr/bin/env pwsh

Push-Location -Path "./devtools"
    docker-compose down -v
    docker-compose up -d
Pop-Location