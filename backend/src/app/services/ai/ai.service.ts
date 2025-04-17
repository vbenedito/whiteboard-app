import { openai } from '../../config/openai';
import { buildPrompt } from '../../shared/buildPrompt';

export async function askWithVision({
  message,
  challengeName,
  imageBuffer,
}: {
  message: string;
  challengeName: string;
  imageBuffer?: Buffer;
}) {
  const prompt = buildPrompt({
    challengeName,
    userMessages: [message],
    imageDescriptionPrompt: imageBuffer
      ? 'Leve em consideração o que está representado na imagem ao avaliar a resposta.'
      : undefined,
  });

  const messages: any[] = [
    {
      role: 'system',
      content: prompt,
    },
    {
      role: 'user',
      content: [
        ...(message ? [{ type: 'text', text: message }] : []),
        ...(imageBuffer
          ? [
              {
                type: 'image_url',
                image_url: {
                  detail: 'high',
                  url: `data:image/jpeg;base64,${imageBuffer.toString('base64')}`,
                },
              },
            ]
          : []),
      ],
    },
  ];

  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1',
    messages,
    max_tokens: 1000,
  });

  return completion.choices[0].message.content;
}
