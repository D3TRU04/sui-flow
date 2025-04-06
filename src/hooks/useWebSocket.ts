import { useEffect, useRef, useState, useCallback } from 'react';
import { Event } from '@/types/event';

export const useWebSocket = (url: string) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [eventsPerMinute, setEventsPerMinute] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef<WebSocket | null>(null);
  const eventsInLastMinute = useRef<Event[]>([]);
  const lastMinuteTimer = useRef<NodeJS.Timeout | null>(null);

  const updateEventsPerMinute = useCallback(() => {
    const now = Date.now();
    eventsInLastMinute.current = eventsInLastMinute.current.filter(
      (event) => now - event.timestamp < 60000
    );
    setEventsPerMinute(eventsInLastMinute.current.length);
  }, []);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      setIsConnected(true);
    };

    ws.current.onclose = () => {
      setIsConnected(false);
    };

    ws.current.onmessage = (event) => {
      try {
        const newEvent: Event = JSON.parse(event.data);
        setEvents((prevEvents) => [newEvent, ...prevEvents]);
        setTotalEvents((prev) => prev + 1);
        eventsInLastMinute.current.push(newEvent);
        updateEventsPerMinute();
      } catch (error) {
        console.error('Error parsing websocket message:', error);
      }
    };

    // Set up timer to update events per minute
    lastMinuteTimer.current = setInterval(updateEventsPerMinute, 1000);

    return () => {
      if (ws.current) {
        ws.current.close();
      }
      if (lastMinuteTimer.current) {
        clearInterval(lastMinuteTimer.current);
      }
    };
  }, [url, updateEventsPerMinute]);

  return {
    events,
    totalEvents,
    eventsPerMinute,
    isConnected,
  };
}; 