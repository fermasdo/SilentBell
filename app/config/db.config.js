const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

module.exports = {
  //url: `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_LOCAL_PORT}/${MONGODB_DATABASE}?authSource=admin`
  // AuthSource --> colecció d'usuaris en BD admin
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
  //url: `mongodb://127.0.0.1:27017/SilentBell`
};