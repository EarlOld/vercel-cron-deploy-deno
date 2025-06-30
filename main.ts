const DEPLOY_URL = Deno.env.get("DEPLOY_URL");

Deno.cron("Vervel daily deploy message", "00 00 * * 2-6", async () => {
  if (DEPLOY_URL) {
    const response = await fetch(DEPLOY_URL);
    if (!response.ok) {
      console.error("Failed to send daily report:", response.statusText);
    } else {
      console.log("Daily report sent successfully.");
    }
  } else {
    console.error("DEPLOY_URL is not set.");
  }
});
