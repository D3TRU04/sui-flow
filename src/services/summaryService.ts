import Anthropic from '@anthropic-ai/sdk';
import { Event } from '@/types/event';

const anthropic = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
});

export const generateSummary = async (events: Event[]): Promise<string> => {
  try {
    const recentEvents = events.slice(0, 10);
    const messages = recentEvents.map(
      (event) => `${event.user.name}: ${event.message}`
    );

    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: `Please provide a concise summary of the following recent messages, highlighting key themes and interesting patterns:\n\n${messages.join(
            '\n'
          )}`,
        },
      ],
    });

    return response.content[0].text;
  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Unable to generate summary at this time.';
  }
}; 