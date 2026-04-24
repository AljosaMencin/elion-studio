
$apiKey = "fc-fac5992e21954a3ba5d0a88099bd580c"
$headers = @{
    "Authorization" = "Bearer $apiKey"
    "Content-Type" = "application/json"
}

$sites = @(
    @{ name = "Huge Inc"; url = "https://www.hugeinc.com" },
    @{ name = "Fantasy"; url = "https://www.fantasy.co" },
    @{ name = "Clay Global"; url = "https://clay.global" },
    @{ name = "Work & Co"; url = "https://www.work.co" },
    @{ name = "Instrument"; url = "https://www.instrument.com" }
)

$results = @{}

foreach ($site in $sites) {
    Write-Host "=== SCRAPING: $($site.name) ===" -ForegroundColor Cyan
    $body = @{
        url = $site.url
        formats = @("markdown")
    } | ConvertTo-Json

    try {
        $response = Invoke-RestMethod -Uri "https://api.firecrawl.dev/v1/scrape" -Method POST -Headers $headers -Body $body -TimeoutSec 40
        $content = $response.data.markdown
        if ($content) {
            $snippet = $content.Substring(0, [Math]::Min(3000, $content.Length))
            Write-Host $snippet
            $results[$site.name] = $snippet
        } else {
            Write-Host "No content returned"
        }
    } catch {
        Write-Host "ERROR for $($site.name): $($_.Exception.Message)"
    }
    Write-Host "--- END $($site.name) ---`n"
}

# Save full results to file
$results | ConvertTo-Json -Depth 5 | Out-File -FilePath "e:\Designs New\Elion\AG Elion\research_results.json" -Encoding UTF8
Write-Host "Results saved to research_results.json" -ForegroundColor Green
