// course-service/src/server.js

const app = require('./app'); // Importa o arquivo app.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

