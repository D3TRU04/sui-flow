import { Event } from '@/types/event';
import { format } from 'date-fns';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiPause, FiPlay, FiRefreshCw } from 'react-icons/fi';

interface EventFeedProps {
  events: Event[];
  isPaused: boolean;
  onPauseChange: (isPaused: boolean) => void;
  onReset: () => void;
}

export const EventFeed = ({ events, isPaused, onPauseChange, onReset }: EventFeedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when new events arrive
    if (containerRef.current && !isPaused) {
      containerRef.current.scrollTop = 0;
    }
  }, [events, isPaused]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800">Live Feed</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPauseChange(!isPaused)}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            {isPaused ? (
              <>
                <FiPlay className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700">Resume</span>
              </>
            ) : (
              <>
                <FiPause className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-700">Pause</span>
              </>
            )}
          </button>
          <button
            onClick={onReset}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <FiRefreshCw className="h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">Reset</span>
          </button>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="flex flex-col gap-3 px-4 pt-0 pb-4 overflow-y-auto flex-1 scroll-smooth"
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-300 transform animate-fade-in-up"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both',
            }}
          >
            <div className="flex items-start gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110">
                <Image
                  src={event.user.image_url}
                  alt={event.user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold hover:text-blue-600 transition-colors duration-200">
                    {event.user.name}
                  </span>
                  <span className="text-gray-500 text-sm">@{event.user.username}</span>
                  <span className="text-gray-400 text-sm">
                    {format(new Date(event.timestamp), 'MMM d, h:mm a')}
                  </span>
                </div>
                <p className="mt-1 text-gray-800 transition-colors duration-200 hover:text-gray-900">
                  {event.message}
                </p>
                {event.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs transition-all duration-200 hover:bg-gray-200 hover:text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 