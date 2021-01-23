const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const postRoute = require('./routes/Post');

mongoose.connect(
  `mongodb://localhost:27017/mern_crud_app`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(`error in connecting database ${err}`);

    console.log(`Database Connected...`);
  }
);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/v1', postRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
