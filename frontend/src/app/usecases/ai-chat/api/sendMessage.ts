import { api } from "@/app/lib/axios";

interface SendQuestionParams {
  message?: string;
  image?: Blob;
  challengeName?: string;
}

export async function sendMessageToApi({
  message,
  image,
  challengeName,
}: SendQuestionParams) {
  const formData = new FormData();

  if (message) formData.append("message", message);
  if (challengeName) formData.append("challengeName", challengeName);
  if (image) formData.append("image", image, "screenshot.png");

  const response = await api.post("/ask", formData);

  return response.data.data;
}
