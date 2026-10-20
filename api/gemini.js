const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/';
const primaryModel = 'gemini-3.5-flash-lite';
const fallbackModel = 'gemini-3.5-flash';

function getText(data) {
  return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
}

async function requestGemini(model, payload, apiKey) {
  const response = await fetch(
    `${endpoint}${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );

  const data = await response.json().catch(() => ({}));
  return { response, data };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on Vercel.' });
  }

  if (!req.body || typeof req.body !== 'object' || !Array.isArray(req.body.contents)) {
    return res.status(400).json({ error: 'Request must include a contents array.' });
  }

  try {
    let result = await requestGemini(primaryModel, req.body, apiKey);

    if (!result.response.ok) {
      result = await requestGemini(fallbackModel, req.body, apiKey);
    }

    if (!result.response.ok) {
      const message = result.data.error?.message || `Gemini request failed with status ${result.response.status}`;
      return res.status(result.response.status).json({ error: message });
    }

    const text = getText(result.data);
    if (!text) {
      return res.status(502).json({ error: 'Gemini returned an empty response.' });
    }

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Gemini serverless function error:', error);
    return res.status(502).json({ error: 'Unable to reach Gemini.' });
  }
};
