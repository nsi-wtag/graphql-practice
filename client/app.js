async function fetchGreeting() {
  const response = await fetch("http://localhost:9000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: "query { greeting }",
    }),
  });

  const body = await response.json();

  return body.data.greeting;
}

fetchGreeting().then((message) => {
  document.getElementById("server-message").textContent = message;
});
