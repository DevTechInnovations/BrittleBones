import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Calendar, Eye, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
}

interface EventPhoto {
  id: string;
  event_id: string;
  photo_url: string;
  caption: string | null;
  created_at: string;
}

interface EventWithPhotos extends Event {
  event_photos: EventPhoto[];
}

const Gallery = () => {
  const { toast } = useToast();
  const [eventsWithPhotos, setEventsWithPhotos] = useState<EventWithPhotos[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<EventPhoto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventsWithPhotos();
  }, []);

  const fetchEventsWithPhotos = async () => {
    try {
      const { data: events, error } = await supabase
        .from("events")
        .select(`
          id,
          title,
          date,
          category,
          event_photos (
            id,
            event_id,
            photo_url,
            caption,
            created_at
          )
        `)
        .order("date", { ascending: false });

      if (error) throw error;

      // Filter out events with no photos
      const eventsWithPhotosData = (events || []).filter(
        (event: any) => event.event_photos && event.event_photos.length > 0
      );

      setEventsWithPhotos(eventsWithPhotosData);
    } catch (error) {
      console.error("Error fetching events with photos:", error);
      toast({
        title: "Error",
        description: "Failed to load gallery photos. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Community Service": return "bg-success/10 text-success border-success/20";
      case "Training": return "bg-primary/10 text-primary border-primary/20";
      case "Fundraising": return "bg-accent/10 text-accent border-accent/20";
      case "Program Launch": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const allPhotos = eventsWithPhotos.flatMap(event => 
    event.event_photos.map(photo => ({
      ...photo,
      event_title: event.title,
      event_date: event.date,
      event_category: event.category
    }))
  ).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-r from-primary to-primary-light py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-primary-foreground mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/90">
              Loading our community moments...
            </p>
          </div>
        </section>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">Gallery</h1>
          <p className="text-xl text-primary-foreground/90">
            Celebrating our community through captured moments of joy, service, and togetherness. 
            Each photo tells a story of positive impact and shared experiences.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {eventsWithPhotos.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">No Photos Yet</h2>
              <p className="text-muted-foreground">
                We're working on capturing amazing moments from our events. Check back soon!
              </p>
            </div>
          ) : (
            <Tabs defaultValue="by-event" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="by-event">By Event</TabsTrigger>
                <TabsTrigger value="all-photos">All Photos</TabsTrigger>
              </TabsList>

              <TabsContent value="by-event" className="space-y-12">
                {eventsWithPhotos.map((event) => (
                  <div key={event.id} className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{event.title}</h2>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <Badge className={getCategoryColor(event.category)} variant="outline">
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Camera className="h-4 w-4" />
                        <span>{event.event_photos.length} photos</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {event.event_photos.map((photo) => (
                        <Card 
                          key={photo.id} 
                          className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                          onClick={() => setSelectedPhoto(photo)}
                        >
                          <div className="aspect-square relative overflow-hidden">
                            <img
                              src={photo.photo_url}
                              alt={photo.caption || event.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                          {photo.caption && (
                            <CardContent className="p-3">
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {photo.caption}
                              </p>
                            </CardContent>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="all-photos" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">All Photos</h2>
                  <p className="text-muted-foreground">
                    Browse all {allPhotos.length} photos from our events
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {allPhotos.map((photo) => (
                    <Card 
                      key={photo.id} 
                      className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={photo.photo_url}
                          alt={photo.caption || photo.event_title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <p className="text-xs font-medium text-foreground line-clamp-1">
                          {photo.event_title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(photo.event_date)}
                        </p>
                        {photo.caption && (
                          <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                            {photo.caption}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="max-w-4xl max-h-full bg-background rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedPhoto.photo_url}
                alt={selectedPhoto.caption || "Event photo"}
                className="w-full max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            {selectedPhoto.caption && (
              <div className="p-6">
                <p className="text-foreground">{selectedPhoto.caption}</p>
                <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                  <span>{(selectedPhoto as any).event_title}</span>
                  <span>{formatDate((selectedPhoto as any).event_date)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Join us at our next event and help create more beautiful moments like these. 
            Every gathering is an opportunity to make new memories and lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white/10 border border-white/30 text-white rounded-lg hover:bg-white hover:text-accent transition-colors duration-300 flex items-center justify-center">
              <Heart className="mr-2 h-5 w-5" />
              View Upcoming Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;