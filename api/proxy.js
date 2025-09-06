export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbw5wuOdgZYSvaLi-q0_kHXgU1ZtQwQGSYN32kjPhDaua241i32Oz8ayV7a2KLVRwT0xKQ/exec", {
     .json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar dados para o Apps Script" });
  }
}
