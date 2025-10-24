"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  List,
  Heart,
  Clock,
} from "lucide-react";

export function DemoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showChannels, setShowChannels] = useState(false);
  const [currentChannel, setCurrentChannel] = useState(0);

  const demoChannels = [
    { name: "ESPN HD", category: "Sports", quality: "4K", viewers: "2.4M" },
    { name: "HBO Max", category: "Movies", quality: "4K", viewers: "1.8M" },
    { name: "CNN International", category: "News", quality: "HD", viewers: "987K" },
    { name: "Discovery 4K", category: "Documentary", quality: "4K", viewers: "654K" },
    { name: "Comedy Central", category: "Entertainment", quality: "HD", viewers: "1.2M" },
    { name: "Cartoon Network", category: "Kids", quality: "HD", viewers: "890K" },
  ];

  const currentChannelData = demoChannels[currentChannel];

  const changeChannel = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentChannel((prev) => (prev + 1) % demoChannels.length);
    } else {
      setCurrentChannel((prev) => (prev - 1 + demoChannels.length) % demoChannels.length);
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
      {/* Video Player Area */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Simulated Video Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {!isPlaying ? (
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <Play className="h-10 w-10 text-[var(--color-primary)] ml-1" />
                </div>
                <p className="text-white/60">Click play to start demo</p>
              </div>
            ) : (
              <div className="space-y-6 animate-pulse">
                <div className="text-6xl md:text-8xl font-bold text-white/10">
                  {currentChannelData.name}
                </div>
                <Badge variant="default" className="text-lg px-4 py-2">
                  ● LIVE
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="default" className="bg-red-600">● LIVE</Badge>
              <div>
                <h3 className="text-white font-semibold">{currentChannelData.name}</h3>
                <p className="text-white/60 text-sm">{currentChannelData.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{currentChannelData.quality}</Badge>
              <Badge variant="outline" className="text-white border-white/20">
                {currentChannelData.viewers} watching
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-[var(--color-primary)]" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => changeChannel("prev")}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => changeChannel("next")}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>

              <span className="text-white text-sm ml-2">Channel {currentChannel + 1}/{demoChannels.length}</span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Heart className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Clock className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => setShowChannels(!showChannels)}
              >
                {showChannels ? <List className="h-5 w-5" /> : <Grid3x3 className="h-5 w-5" />}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Settings className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Channel List Sidebar */}
      {showChannels && (
        <div className="border-t border-white/10 bg-[var(--color-surface)]">
          <div className="p-4">
            <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">Channel List</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
              {demoChannels.map((channel, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChannel(index)}
                  className={`p-3 rounded-lg text-left transition-all ${
                    currentChannel === index
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-white/5 hover:bg-white/10 text-[var(--color-muted)]"
                  }`}
                >
                  <div className="text-sm font-medium">{channel.name}</div>
                  <div className="text-xs opacity-60">{channel.category}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Demo Notice */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
          <p className="text-white/80 text-xs">Interactive Demo</p>
        </div>
      </div>
    </div>
  );
}
