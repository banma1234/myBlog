export default async function accessAdmin(pw: string | null) {
  let response = await fetch("api/auth/login", {
    method: "POST",
    body: pw,
  });
  let data = await response.json();

  if (data.success) {
    alert(data.message);
  } else {
    alert(data.message);
  }
}
