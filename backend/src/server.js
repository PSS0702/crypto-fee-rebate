const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 라우트 설정
const exchangeRoutes = require('./routes/exchangeRoutes');
const userRoutes = require('./routes/userRoutes');
const rebateRoutes = require('./routes/rebateRoutes');

app.use('/api/exchanges', exchangeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rebates', rebateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
