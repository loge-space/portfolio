$env:Path = "C:\Program Files\nodejs;" + $env:Path
Write-Host "Installing dependencies..." -ForegroundColor Cyan
& "C:\Program Files\nodejs\npm.cmd" install
Write-Host "Starting Next.js Server..." -ForegroundColor Green
& "C:\Program Files\nodejs\npm.cmd" run dev
