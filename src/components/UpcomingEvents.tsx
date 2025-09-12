// src/components/UpcomingEvents.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  capacity: number;
  attendees: number;
  featured: boolean;
}

const UpcomingEvents = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;

      const currentDate = new Date();
      const upcoming = (data || []).filter(
        (event) => new Date(event.date) >= currentDate
      );

      setEvents(upcoming.slice(0, 3)); // limit to 3 events for homepage
    } catch (error) {
      console.error("Error fetching events:", error);
      toast({
        title: "Error",
        description: "Failed to load upcoming events.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-10">
        No upcoming events at the moment. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <Card key={event.id} className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center space-x-2 text-primary mb-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">
                {new Date(event.date).toLocaleDateString()}
              </span>
            </div>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-muted-foreground mb-4">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground mb-4">
              <Users className="h-4 w-4" />
              <span>
                {event.attendees}/{event.capacity} registered
              </span>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link to="/events">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UpcomingEvents;
