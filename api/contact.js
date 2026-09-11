export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }

  try {
    const response = await fetch('https://formsubmit.co/ajax/shubhameilish@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://www.jvke.in',
        'Referer': 'https://www.jvke.in/',
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
    });

    const data = await response.json();
    if (data.success === 'false' || data.success === false) {
      return res.status(400).json({ success: false, message: data.message || 'FormSubmit delivery error.' });
    }

    return res.status(200).json({ success: true, message: data.message || 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
}
