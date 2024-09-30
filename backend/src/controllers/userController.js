const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      username,
      email,
      password
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Create and return JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Create and return JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    // 여기에서 사용자의 거래 데이터를 가져오는 로직을 구현해야 합니다.
    // 이 예제에서는 가상의 데이터를 사용합니다.
    const dashboardData = {
      username: user.username,
      totalTrades: 50,
      totalVolume: 100000,
      totalRebates: 500,
      recentTrades: [
        { date: new Date(), exchange: 'Binance', volume: 1000, rebate: 5 },
        { date: new Date(), exchange: 'Coinbase', volume: 2000, rebate: 10 },
        { date: new Date(), exchange: 'Kraken', volume: 1500, rebate: 7.5 },
      ]
    };
    res.json(dashboardData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { username, email } = req.body;
    
    // Build user object
    const userFields = {};
    if (username) userFields.username = username;
    if (email) userFields.email = email;

    // Update user
    let user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: userFields },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
