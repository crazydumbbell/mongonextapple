"use server";

export async function handleSubmit(formData) {
  "use server";
  console.log(formData.get("title"));
}
