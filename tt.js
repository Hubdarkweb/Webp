export default {
  async fetch(request) {
    const TELEGRAM_BOT_TOKEN = "7702864201:AAGkUv-a9Kmthrk5bEbMZeYJg7RdfHjoNGY";
    const WEB_APP_URL = "https://green-dew-04ca.topplug.workers.dev/";

    if (request.method === "POST") {
      const update = await request.json();

      if (update.message) {
        const chat_id = update.message.chat.id;
        await sendWebAppButton(TELEGRAM_BOT_TOKEN, chat_id, WEB_APP_URL);
      }

      return new Response("ok", { status: 200 });
    }

    return new Response("Invalid request", { status: 400 });
  }
};

async function sendWebAppButton(token, chat_id, webAppUrl) {
  const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const payload = {
    chat_id: chat_id,
    text: "Click the button below to open the web app.",
    reply_markup: {
      inline_keyboard: [[
        { text: "Open Web App", web_app: { url: webAppUrl } }
      ]]
    }
  };

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}
