const express = require("express");
const mongoose = require("mongoose");
const enq = require("./modals/Enquiry.modal");
const app = express();
const port = 6565;

app.use(express.json());

app.post("/enquiries", async (req, res) => {
  const enquiryData = req.body;
  // Check if the request body contains data
  if (!enquiryData) {
    console.log("inside if");
    return res.status(400).json({ error: "No enquiry data provided." });
  }

  // You can perform additional validations on enquiryData here if needed

  console.log(enquiryData);

  const data = await enq.create(enquiryData);

  return res.json(data);
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://tarun:4Pw7Xf0w0Bdg2p9A@cluster1.kcb3u5s.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
});
