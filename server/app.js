const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3001;

app.get("/", (request, response, next) => {
  const src = fs.createReadStream(
    path.resolve(__dirname, "./Victor_Obumere_Resume.pdf")
  );
  response.writeHead(200, {
    "Content-Type": "application/blob",
    "Content-Disposition": "attachment; filename=VICTOR'S_resume.pdf",
    "Content-Transfer-Encoding": "Binary",
    "Access-Control-Allow-Origin": "https://victor-obumere-dev.onrender.com/",
  });

  src.pipe(response);
});

app.listen(port, console.log(`App is listening on ${port}`));
