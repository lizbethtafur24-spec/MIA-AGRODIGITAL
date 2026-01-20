
export interface AdResult {
  headline: string;
  description: string;
  callToAction: string;
  aestheticDescription: string;
  suggestedPrice: string;
}

export type MessageRole = 'user' | 'mia';
export type MessageType = 'text' | 'image' | 'ad' | 'loading';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  type: MessageType;
  content?: string;
  imageData?: string;
  adData?: AdResult;
  timestamp: string;
}
