import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background via-background to-muted">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-sparkle">
          <Icon name="Sparkles" size={32} className="text-primary" />
        </div>
        <div className="absolute top-40 right-32 animate-sparkle delay-700">
          <Icon name="Sparkles" size={24} className="text-primary" />
        </div>
        <div className="absolute bottom-32 left-40 animate-sparkle delay-1000">
          <Icon name="Sparkles" size={28} className="text-primary" />
        </div>
        <div className="absolute top-1/2 right-20 animate-float">
          <Icon name="Gift" size={40} className="text-primary" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-float delay-500">
          <Icon name="Wine" size={36} className="text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
              С Праздником!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Особенное видеопоздравление для особенного человека
            </p>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-card rounded-2xl p-2 border-4 border-primary shadow-2xl">
              <div className="absolute -top-6 -left-6 w-12 h-12 border-l-4 border-t-4 border-primary rounded-tl-xl"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 border-r-4 border-t-4 border-primary rounded-tr-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-4 border-b-4 border-primary rounded-bl-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-4 border-b-4 border-primary rounded-br-xl"></div>

              <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  poster="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=675&fit=crop"
                >
                  <source src="" type="video/mp4" />
                  Ваш браузер не поддерживает видео
                </video>

                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <Button
                      size="lg"
                      onClick={handlePlayPause}
                      className="w-24 h-24 rounded-full bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-2xl"
                    >
                      <Icon name="Play" size={40} className="text-primary-foreground ml-1" />
                    </Button>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePlayPause}
                      className="text-white hover:text-primary hover:bg-white/20"
                    >
                      <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} />
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.muted = !videoRef.current.muted;
                          }
                        }}
                        className="text-white hover:text-primary hover:bg-white/20"
                      >
                        <Icon name="Volume2" size={24} />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.requestFullscreen();
                          }
                        }}
                        className="text-white hover:text-primary hover:bg-white/20"
                      >
                        <Icon name="Maximize" size={24} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in delay-600">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-full border border-primary/30">
              <Icon name="Heart" size={24} className="text-primary animate-pulse" />
              <p className="text-lg text-muted-foreground">
                Загрузите своё видео, чтобы заменить заглушку
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
