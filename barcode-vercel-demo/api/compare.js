export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstCode, secondCode } = req.body;

  if (!firstCode || !secondCode) {
    return res.status(400).json({
      success: false,
      message: "缺少條碼資料"
    });
  }

  const matched = firstCode === secondCode;

  res.status(200).json({
    success: matched,
    message: matched
      ? "✅ 兩組條碼一致"
      : "❌ 兩組條碼不一致",
    firstCode,
    secondCode
  });
}
