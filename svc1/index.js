import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      const responseData = response.data;
      console.log("Data fetched from external API:", responseData);
      return res.status(200).json({
        success: true,
        message: "Get Data Successfully",
        data: responseData,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        success: false,
        message: "Error fetching data",
        data: null,
      });
    });
});

app.listen(port, () => {
  console.log(`Service 1 is running on http://localhost:${port}`);
});
