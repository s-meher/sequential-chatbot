async function sendMessage() {
  const input = document.getElementById("user-input").value.trim();
  const chatBox = document.getElementById("chat-box");

  if (!input) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    chatBox.innerHTML += `<p><strong>Bot:</strong> Sorry! Server issue.</p>`;
  }

  document.getElementById("user-input").value = "";
}