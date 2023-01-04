const qrcode = require("qrcode");

const generateQR = async (req, res) => {
  types = ["svg", "terminal", "png"];
  if (!req.query.str)
    return res
      .status(400)
      .send({ error: "please enter a query to generate qr code" });

  qrcode.toString(
    req.query.str,
    {
      errorCorrectionLevel: "H",
      quality: 0.3,
      color: {
        dark: "#FFFFFF",
        light: "#NONE",
      },
      type: types.includes(req.query?.type?.toLowerCase())
        ? req.query?.type?.toLowerCase()
        : "svg",
    },
    function (err, url) {
      if (err) return res.status(400).send({ error: err });
      return res.send({ qrCode: url });
    }
  );
};

module.exports = {
  generateQR,
};
