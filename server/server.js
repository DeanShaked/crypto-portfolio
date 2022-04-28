const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes/authRoutes');
const tradeRoutes = require('./routes/tradeRoutes/tradeRoutes');
const URI = `mongodb+srv://idoadar:239738416@cluster0.sky9z.mongodb.net/`;
const PORT = 5000;

const app = express();
app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);

app.use('/api/trade', tradeRoutes);

mongoose.connect(URI).then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
