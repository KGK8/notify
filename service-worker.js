// service-worker.js

self.addEventListener("push", (event) => {
  console.log(event);
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "path/to/icon.png",
  });
});
  