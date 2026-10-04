import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBanner } from './TopBanner';
import { AppHeader } from './AppHeader';
import { BottomNav } from './BottomNav';
import { ContextFab } from './ContextFab';
import { GlobalModals } from './GlobalModals';

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E2D24]">
      <TopBanner />
      <AppHeader />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 pt-4 pb-28">
        <Outlet />
      </main>
      <ContextFab />
      <BottomNav />
      <GlobalModals />
    </div>
  );
}
