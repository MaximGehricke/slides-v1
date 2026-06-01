# Start the Slides Next.js dev server (hot reload at http://localhost:3000)
$nodeDir = "$env:LOCALAPPDATA\nodejs"
if (-not (Test-Path "$nodeDir\npm.cmd")) {
  Write-Error "Node.js not found at $nodeDir."
  exit 1
}
$env:PATH = "$nodeDir;$env:PATH"
Set-Location $PSScriptRoot
pnpm dev
