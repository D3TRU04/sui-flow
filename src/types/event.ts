export interface User {
  id: number;
  image_url: string;
  name: string;
  username: string;
}

export interface Event {
  id: string;
  timestamp: number;
  user: User;
  message: string;
  tags: string[];
}

export interface EventSummary {
  summary: string;
  timestamp: number;
} 