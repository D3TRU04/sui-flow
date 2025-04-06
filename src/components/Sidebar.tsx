import { Event, EventSummary } from '@/types/event';
import { format } from 'date-fns';
import { FiActivity, FiDatabase, FiClock } from 'react-icons/fi';

interface SidebarProps {
  totalEvents: number;
  eventsPerMinute: number;
  isConnected: boolean;
  summary: EventSummary | null;
}

export const Sidebar = ({
  totalEvents,
  eventsPerMinute,
  isConnected,
  summary,
}: SidebarProps) => {
  return (
    <div className="w-80 bg-gray-50 p-6 flex flex-col gap-6 h-full">
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
        <span className="text-sm text-gray-600">
          {isConnected ? 'Connected' : 'Disconnected'}
        </span>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Statistics</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FiDatabase className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Total Events</p>
              <p className="text-2xl font-semibold">{totalEvents}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiActivity className="text-gray-500" />
            <div>
              <p className="text-sm text-gray-500">Events/Minute</p>
              <p className="text-2xl font-semibold">{eventsPerMinute}</p>
            </div>
          </div>
        </div>
      </div>

      {summary && (
        <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
          <div className="flex items-center gap-2 mb-3">
            <FiClock className="text-gray-500" />
            <span className="text-sm text-gray-500">
              {format(new Date(summary.timestamp), 'h:mm a')}
            </span>
          </div>
          <h3 className="font-semibold mb-2">AI Summary</h3>
          <p className="text-gray-700 text-sm">{summary.summary}</p>
        </div>
      )}
    </div>
  );
}; 