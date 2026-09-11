import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'contact-api-dev-handler',
      configureServer(server) {
        server.middlewares.use('/api/contact', (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: 'Method not allowed' }));
            return;
          }

          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const { name, email, message } = JSON.parse(body || '{}');
              if (!name || !email || !message) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: false,
                    message: 'Please fill in all fields.',
                  })
                );
                return;
              }

              const response = await fetch(
                'https://formsubmit.co/ajax/shubhameilish@gmail.com',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Origin: 'https://www.jvke.in',
                    Referer: 'https://www.jvke.in/',
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    message,
                    _subject: `New Contact Message from ${name} (Portfolio)`,
                    _replyto: email,
                    _captcha: 'false',
                    _template: 'table',
                  }),
                }
              );

              const data = await response.json();
              if (data.success === 'false' || data.success === false) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: data.message || 'FormSubmit delivery error.' }));
                return;
              }

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: data.message || 'Message sent successfully!' }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: err.message }));
            }
          });
        });
      },
    },
  ],
})
