export async function onRequestPost(context) {
  const data = await context.request.json();
  const email = data.email;
  const password = data.password;

  // ここで処理（保存や返却など）
  return new Response(`メール: ${email}\nパスワード: ${password}`);
}

