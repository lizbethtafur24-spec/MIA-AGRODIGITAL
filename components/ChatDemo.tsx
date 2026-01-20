
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, MessageRole, MessageType, AdResult } from '../types';
import { generateAdDesign } from '../services/geminiService';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    role: 'mia',
    type: 'text',
    content: '¡Hola! Soy MIA. ✨ Envíame una foto de tu producto y cuéntame qué quieres vender.',
    timestamp: '10:00 AM'
  }
];

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if (!inputText && !selectedImage) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsgId = Date.now().toString();

    const newUserMessages: ChatMessage[] = [];

    if (selectedImage) {
      newUserMessages.push({
        id: userMsgId + '-img',
        role: 'user',
        type: 'image',
        imageData: selectedImage,
        timestamp: userTime
      });
    }

    if (inputText) {
      newUserMessages.push({
        id: userMsgId + '-text',
        role: 'user',
        type: 'text',
        content: inputText,
        timestamp: userTime
      });
    }

    setMessages(prev => [...prev, ...newUserMessages]);
    setInputText('');
    const currentImage = selectedImage;
    const currentText = inputText;
    setSelectedImage(null);
    setIsProcessing(true);

    // Show loading from MIA
    const loadingId = 'loading-' + Date.now();
    setMessages(prev => [...prev, {
      id: loadingId,
      role: 'mia',
      type: 'loading',
      timestamp: userTime
    }]);

    try {
      const adResult = await generateAdDesign(currentText || "Producto sin descripción", currentImage || undefined);
      
      setMessages(prev => prev.filter(m => m.id !== loadingId).concat([
        {
          id: 'mia-' + Date.now(),
          role: 'mia',
          type: 'ad',
          adData: adResult,
          imageData: currentImage || undefined,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          id: 'mia-prompt-' + Date.now(),
          role: 'mia',
          type: 'text',
          content: '¿Te gusta este diseño? Si es así, escribe "PUBLICAR" para subirlo a tus redes.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]));
    } catch (error) {
      setMessages(prev => prev.filter(m => m.id !== loadingId).concat([{
        id: 'error-' + Date.now(),
        role: 'mia',
        type: 'text',
        content: 'Lo siento, tuve un pequeño problema. ¿Podemos intentar de nuevo?',
        timestamp: userTime
      }]));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-[360px] mx-auto lg:mx-0">
      <div className="phone-container bg-slate-100 h-[640px] w-full relative overflow-hidden chat-shadow border-slate-800 flex flex-col">
        {/* WhatsApp Header */}
        <div className="bg-green-800 p-4 text-white flex items-center gap-3 shrink-0">
          <i className="fas fa-arrow-left text-sm opacity-70"></i>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-800 shadow-sm">
            <i className="fas fa-magic"></i>
          </div>
          <div className="text-left flex-grow">
            <p className="text-sm font-bold leading-none">MIA Asistente</p>
            <p className="text-[10px] opacity-70 mt-0.5">En línea</p>
          </div>
          <div className="flex gap-4 opacity-70">
            <i className="fas fa-video text-sm"></i>
            <i className="fas fa-phone text-sm"></i>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-[#e5ddd5] custom-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`p-3 rounded-xl shadow-sm max-w-[85%] relative ${
                msg.role === 'user' 
                  ? 'bg-white rounded-tr-none' 
                  : 'bg-[#dcf8c6] rounded-tl-none'
              }`}>
                {msg.role === 'mia' && <p className="font-bold text-green-800 mb-1 text-[10px] uppercase">MIA ✨</p>}
                
                {msg.type === 'text' && (
                  <p className="text-[13px] leading-relaxed text-slate-800">{msg.content}</p>
                )}

                {msg.type === 'image' && (
                  <div className="rounded-lg overflow-hidden mb-1">
                    <img src={msg.imageData} className="w-full object-cover max-h-48" alt="Upload" />
                  </div>
                )}

                {msg.type === 'loading' && (
                  <div className="flex items-center gap-2 py-1">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce delay-150"></div>
                  </div>
                )}

                {msg.type === 'ad' && msg.adData && (
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border-2 border-orange-400 shadow-inner">
                      <div className="text-center mb-2">
                        <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Premium Quality</span>
                      </div>
                      {msg.imageData && (
                        <div className="relative mb-3 group">
                           <img src={msg.imageData} className="rounded-lg w-full h-32 object-cover border border-stone-100" alt="Product" />
                           <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                              <span className="text-white text-[10px] font-bold">Preview Ad</span>
                           </div>
                        </div>
                      )}
                      <h4 className="text-[14px] font-black text-slate-900 mb-1">{msg.adData.headline}</h4>
                      <p className="text-[11px] text-stone-600 mb-2 italic">"{msg.adData.description}"</p>
                      <div className="flex justify-between items-center bg-stone-50 p-2 rounded border border-stone-100">
                        <span className="text-[10px] font-bold text-green-700">{msg.adData.suggestedPrice}</span>
                        <span className="text-[10px] font-black bg-green-800 text-white px-2 py-0.5 rounded">{msg.adData.callToAction}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-700 mt-2 font-medium">
                      🎨 <span className="text-[9px] uppercase font-bold text-slate-500">Nota de diseño:</span> {msg.adData.aestheticDescription}
                    </p>
                  </div>
                )}

                <p className="text-[9px] text-right opacity-50 mt-1">
                  {msg.timestamp} {msg.role === 'user' && '✓✓'}
                </p>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-3 bg-[#f0f2f5] flex items-end gap-2 shrink-0">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-green-600 transition"
          >
            {selectedImage ? (
              <img src={selectedImage} className="w-8 h-8 rounded-md object-cover border-2 border-green-500" alt="Preview" />
            ) : (
              <i className="fas fa-camera text-xl"></i>
            )}
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleImageSelect}
          />
          <div className="flex-grow relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe aquí..."
              className="w-full bg-white rounded-2xl py-2 px-4 text-sm focus:outline-none border-none resize-none max-h-24 shadow-sm"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </div>
          <button 
            disabled={isProcessing || (!inputText && !selectedImage)}
            onClick={handleSend}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition shadow-lg ${
              isProcessing || (!inputText && !selectedImage) 
                ? 'bg-slate-300' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            <i className="fas fa-paper-plane text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;
