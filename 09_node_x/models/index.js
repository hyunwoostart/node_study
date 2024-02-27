const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');
const Post = require('./post');
const Hastag = require('./hashtag');

const db = {};
const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;

db.Hastag = Hastag;

User.init(sequelize);
Post.init(sequelize);
Hastag.init(sequelize);

User.associate(db);
Post.associate(db);
Hastag.associate(db);

module.exports = db;