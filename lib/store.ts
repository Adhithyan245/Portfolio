'use client';

import { create } from 'zustand';

interface AppState {
  currentZone: string;
  isPlaying: boolean;
  showChatbot: boolean;
  visitedZones: string[];
  setCurrentZone: (zone: string) => void;
  togglePlay: () => void;
  toggleChatbot: () => void;
  addVisitedZone: (zone: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentZone: 'landing',
  isPlaying: false,
  showChatbot: false,
  visitedZones: [],
  setCurrentZone: (zone) => set({ currentZone: zone }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  toggleChatbot: () => set((state) => ({ showChatbot: !state.showChatbot })),
  addVisitedZone: (zone) => set((state) => ({ 
    visitedZones: [...new Set([...state.visitedZones, zone])] 
  })),
}));

