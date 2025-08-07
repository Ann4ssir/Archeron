// api/cards.js

export default async function handler(req, res) {
  const apiKey = process.env.TRELLO_API_KEY;
  const token = process.env.TRELLO_TOKEN;
  const boardId = '67d1e4ab0147c7637f5ae0e4';

  const url = `https://api.trello.com/1/boards/${boardId}/cards?key=${apiKey}&token=${token}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(500).json({ error: 'Error fetching Trello cards' });
    }

    const cards = await response.json();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
