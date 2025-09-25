import { file } from "bun";

Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // Serve the single page for root
    if (url.pathname === "/") {
      return new Response(file("./public/index.html"));
    }

    // Serve static files (CSS, JS, images)
    if (url.pathname.startsWith("/static/")) {
      return new Response(file(`./public${url.pathname}`));
    }

    return new Response("Page not found", { status: 404 });
  },
});

console.log("🚀 Server running at http://localhost:3000");
