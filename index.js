export default {
    async fetch(request) {
        const url = new URL(request.url);

        // Basic HTML Page to show the link
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TOpNeTWeb App</title>
        </head>
        <body>
            <h2>Click the link below:</h2>
            <a href="https://sublink.bmkg.xyz/" target="_blank">Go to Website</a>
        </body>
        </html>
        `;

        return new Response(html, {
            headers: { "Content-Type": "text/html" },
        });
    }
};
