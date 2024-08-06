const botToken = "1892278675:AAF6YGMEjztE2doRLG2IP3IzOMvTuC0DuuE";

async function sendMessage(to_chatId, text) {
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const params = new URLSearchParams({
    chat_id: to_chatId,
    text: text,
    parse_mode: "Markdown",
  });

  try {
    const response = await fetch(`${apiUrl}?${params.toString()}`);
    if (!response.ok) {
      console.log(`Error sending message: ${await response.text()}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}

// Usage:
const chatId = 5017982019;
const delayTime = 5000;
await sendMessagesWithDelay(chatId, delayTime);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendMessagesWithDelay(chatId, delay) {
  for (let i = 0; i < 1000; i++) {
    await sendMessage(chatId, `Message No. ${i + 1}`);
    await sleep(delay);
  }
}
