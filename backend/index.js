const express = require("express");
const cors = require("cors");
const axios = require('axios')

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // Get or create user on Chat Engine!
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "2bc1ae8d-c6cf-4c40-bb77-c36a1d8b2afb" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
        if (e.response) {
            return res.status(e.response.status).json(e.response.data);
          }
          // Otherwise, send a generic error message
          return res.status(500).json({ message: 'An error occurred', error: e.message });
        
    }
  });
app.listen(3001);

