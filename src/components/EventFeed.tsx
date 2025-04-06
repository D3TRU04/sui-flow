import { Event } from '@/types/event';
import { format } from 'date-fns';
import Image from 'next/image';

interface EventFeedProps {
  events: Event[];
}

export const EventFeed = ({ events }: EventFeedProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 overflow-y-auto h-full">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={event.user.image_url}
                alt={event.user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{event.user.name}</span>
                <span className="text-gray-500 text-sm">@{event.user.username}</span>
                <span className="text-gray-400 text-sm">
                  {format(new Date(event.timestamp), 'MMM d, h:mm a')}
                </span>
              </div>
              <p className="mt-1 text-gray-800">{event.message}</p>
              {event.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
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
  );
}; 