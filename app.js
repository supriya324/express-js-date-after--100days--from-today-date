const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  let addDays = new Date();
  response.send(
    `${addDays.getDate() + 100}-${
      addDays.getMonth() + 1
    }-${addDays.getFullYear()}`
  );
});
module.exports = app;
app.listen(3000);
