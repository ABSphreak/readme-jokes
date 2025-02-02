export const runtime = 'edge'; // Ensures this runs in Edge environment

export async function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><text x="10" y="20">Hello, SVG!</text></svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
