const Customer = require("../models/Customer")

const insertcustomer = async (request, response) => {
    try 
    {
      const input = request.body;
      const customer = new Customer(input);
      customer.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checkcustomerlogin = async (request, response) => 
 {
    try 
    {
      const input = request.body
      const customer = await Customer.findOne(input)
      response.json(customer)
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const viewevents = async (req, res) => 
{
  try 
  {
    const events = await Event.find();
    res.status(200).json(events);
  } 
  catch (error) 
  {
    res.status(500).send(error.message);
  }
};

const eventaudio = async (req, res) => 
{
  const filename = req.params.fileName;
  const filepath = path.join(__dirname, '../media', filename);
  console.log(filepath);

  fs.readFile(filepath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading audio file');
    }

    const ext = path.extname(filename).toLowerCase();
    let contentType = 'audio/mpeg'; // Set content type to audio/mpeg for mp3 files

    if (ext === '.mp3') {
      contentType = 'audio/mpeg';
    } else if (ext === '.wav') {
      contentType = 'audio/wav';
    } else if (ext === '.ogg') {
      contentType = 'audio/ogg';
    }else if (ext === '.m4a') {
      contentType = 'audio/mp4';
    }
    else {
      return res.status(400).send('Invalid audio file format');
    }

    res.setHeader('Content-Type', contentType);
    res.send(data); 
  });
}

  module.exports = {insertcustomer,eventaudio,viewevents,checkcustomerlogin}