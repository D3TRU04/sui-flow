'use client';

import { useEffect, useState } from 'react';
import { useWebSocket } from '@/hooks/useWebSocket';
import { EventFeed } from '@/components/EventFeed';
import { Sidebar } from '@/components/Sidebar';
import { Event, EventSummary } from '@/types/event';
import { generateSummary } from '@/services/summaryService';

export default function StreamPage() {
  const { 
    events, 
    totalEvents, 
    eventsPerMinute, 
    isConnected,
    isPaused,
    setIsPaused,
    reset
  } = useWebSocket('ws://beeps.gg/stream');
  
  const [summary, setSummary] = useState<EventSummary | null>(null);
  const [pausedData, setPausedData] = useState({
    events: [] as Event[],
    totalEvents: 0,
    eventsPerMinute: 0,
  });

  // Update paused data when pause state changes
  useEffect(() => {
    if (isPaused) {
      setPausedData({
        events,
        totalEvents,
        eventsPerMinute,
      });
    }
  }, [isPaused, events, totalEvents, eventsPerMinute]);

  useEffect(() => {
    const generateNewSummary = async () => {
      if (events.length > 0 && !isPaused) {
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
  }, [events, isPaused]);

  const handleReset = () => {
    reset();
    setSummary(null);
    setPausedData({
      events: [],
      totalEvents: 0,
      eventsPerMinute: 0,
    });
  };

  const displayedEvents = isPaused ? pausedData.events : events;
  const displayedTotalEvents = isPaused ? pausedData.totalEvents : totalEvents;
  const displayedEventsPerMinute = isPaused ? pausedData.eventsPerMinute : eventsPerMinute;

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50">
      <Sidebar
        totalEvents={displayedTotalEvents}
        eventsPerMinute={displayedEventsPerMinute}
        isConnected={isConnected}
        summary={summary}
        isPaused={isPaused}
      />
      <div className="flex-1 overflow-hidden">
        <EventFeed 
          events={displayedEvents} 
          isPaused={isPaused}
          onPauseChange={setIsPaused}
          onReset={handleReset}
        />
      </div>
    </div>
  );
} 