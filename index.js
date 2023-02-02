const express = require("express");
const cors = require('cors');
const { check, validationResult } = require("express-validator");

const app = express();
// const allowedOrigins = ['http://localhost:3000'];
// const options = {
//   origin: allowedOrigins
// };

app.use(cors());
app.use(express.json());

// Middleware for validating the request payload
const validatePayload = [
  check("payload")
    .exists()
    .withMessage("Payload is required")
    .isString()
    .withMessage("Payload must be a string")
];



// Route for transforming the payload
app.post("/transform", validatePayload, (req, res) => {
  // Check if the request payload is valid
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Transform the payload
  const { payload } = req.body;
  const transformedPayload = payload
    .split("")
    .reverse()
    .join("");

  // Respond with the transformed payload
  res.status(200).json({ transformedPayload });
});

const port = process.env.PORT || 3006;
app.listen(port, () => console.log(`Server running on port ${port}`));
