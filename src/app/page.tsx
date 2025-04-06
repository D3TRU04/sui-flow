'use client';

import { useEffect, useState } from 'react';
import { useWebSocket } from '@/hooks/useWebSocket';
import { EventFeed } from '@/components/EventFeed';
import { Sidebar } from '@/components/Sidebar';
import { Event, EventSummary } from '@/types/event';
import { generateSummary } from '@/services/summaryService';

export default function Home() {
  const { events, totalEvents, eventsPerMinute, isConnected } = useWebSocket(
    'ws://beeps.gg/stream'
  );
  const [summary, setSummary] = useState<EventSummary | null>(null);

  useEffect(() => {
    const generateNewSummary = async () => {
      if (events.length > 0) {
        const summaryText = await generateSummary(events);
        setSummary({
          summary: summaryText,
          timestamp: Date.now(),
        });
      }
    };

    // Generate initial summary
    generateNewSummary();

    // Set up interval to generate new summaries every minute
    const interval = setInterval(generateNewSummary, 60000);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar
        totalEvents={totalEvents}
        eventsPerMinute={eventsPerMinute}
        isConnected={isConnected}
        summary={summary}
      />
      <div className="flex-1 overflow-hidden">
        <EventFeed events={events} />
      </div>
    </main>
  );
} 