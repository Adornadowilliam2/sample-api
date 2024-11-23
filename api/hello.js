export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method == "GET") {
    res.status(200).json({ message: "Hello from your Vercel API!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
