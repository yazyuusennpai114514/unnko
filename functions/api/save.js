export async function onRequestPost(context) {
  const data = await context.request.json();
  const email = data.email;
  const password = data.password;

  // ここで保存処理もできる（DBやスプレッドシートなど）
  return new Response(`メール: ${email}\nパスワード: ${password}`);
}

