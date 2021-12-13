// -----> own module
const app = require(`./app.js`);

app.listen(100, () => {
  console.log(`server is running boss, on port 100`);
});
