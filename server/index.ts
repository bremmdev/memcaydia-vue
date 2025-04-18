export interface Env {
  DB: D1Database;
}

export default {
  async fetch(request, env: Env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/games") {
      try {
        const { results } = await env.DB.prepare("SELECT * FROM games").all();
        return Response.json(results);
      }
      catch (error) {
        return new Response("Internal Server Error", { status: 500 });
      }
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
