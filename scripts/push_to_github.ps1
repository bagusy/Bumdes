param(
  [string]$RepoUrl = 'https://github.com/bagusy/Bumdes.git',
  [string]$Branch = 'main'
)

if (-not $env:GIT_TOKEN) {
  Write-Error "GIT_TOKEN environment variable not set. Create a personal access token and set GIT_TOKEN before running."
  exit 1
}

$authUrl = ($RepoUrl -replace 'https://', "https://$($env:GIT_TOKEN)@")

if (-not (git rev-parse --is-inside-work-tree 2>$null)) {
  Write-Error "Not a git repository. Initialize git and run this script from the repo root."
  exit 1
}


git add -A
git commit -m "chore: add docker, backend, and CI configuration" 2>$null
if ($LASTEXITCODE -ne 0) { Write-Output "Nothing to commit" }

try {
  git remote remove origin 2>$null
} catch {}

git remote add origin $authUrl

git push -u origin $Branch

Write-Output "Push finished. If auth failed, verify your token and permissions."
