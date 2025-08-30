import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Heart, 
  Utensils, 
  Music,
  GraduationCap,
  Gift,
  Camera,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();
  const [registeredEvents, setRegisteredEvents] = useState<Set<string>>(new Set());

  const handleRSVP = (eventId: string, eventTitle: string) => {
    setRegisteredEvents(prev => new Set(prev.add(eventId)));
    toast({
      title: "Registration Confirmed!",
      description: `You've successfully registered for ${eventTitle}. We'll send you a confirmation email shortly.`,
    });
  };

  const upcomingEvents = [
    {
      id: "1",
      title: "Community Food Drive",
      description: "Help us collect food donations for local families in need. We'll be accepting non-perishable items, fresh produce, and monetary donations.",
      date: "March 15, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Community Center - Main Hall",
      category: "Community Service",
      icon: Utensils,
      attendees: 45,
      capacity: 100,
      featured: true
    },
    {
      id: "2", 
      title: "Volunteer Training Workshop",
      description: "New to volunteering? Join our comprehensive training session to learn about our programs and how you can make the biggest impact.",
      date: "March 22, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Main Office - Conference Room",
      category: "Training",
      icon: GraduationCap,
      attendees: 23,
      capacity: 30,
      featured: false
    },
    {
      id: "3",
      title: "Annual Fundraising Gala",
      description: "Join us for an evening of celebration and giving as we raise funds for our ongoing community programs. Dinner, entertainment, and silent auction included.",
      date: "April 5, 2024", 
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom - Downtown Hotel",
      category: "Fundraising",
      icon: Heart,
      attendees: 87,
      capacity: 200,
      featured: true
    },
    {
      id: "4",
      title: "Youth Mentorship Program Launch",
      description: "Celebrate the launch of our new youth mentorship program connecting local students with community leaders and professionals.",
      date: "April 12, 2024",
      time: "4:00 PM - 6:00 PM", 
      location: "Youth Center - Auditorium",
      category: "Program Launch",
      icon: Users,
      attendees: 34,
      capacity: 75,
      featured: false
    },
    {
      id: "5",
      title: "Community Garden Project",
      description: "Join us for a hands-on gardening day as we plant vegetables and flowers in our new community garden space.",
      date: "April 20, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Community Garden - Maple Street",
      category: "Community Service", 
      icon: Gift,
      attendees: 28,
      capacity: 50,
      featured: false
    },
    {
      id: "6",
      title: "Spring Charity Concert",
      description: "Enjoy an evening of music featuring local artists performing to raise funds for our music therapy programs.",
      date: "May 3, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "City Park Amphitheater",
      category: "Fundraising",
      icon: Music,
      attendees: 156,
      capacity: 300,
      featured: true
    }
  ];

  const pastEvents = [
    {
      title: "Winter Clothing Drive",
      date: "February 10, 2024",
      description: "Successfully collected over 500 pieces of winter clothing for families in need.",
      attendees: 78,
      impact: "500+ items collected"
    },
    {
      title: "Holiday Gift Wrapping", 
      date: "December 20, 2023",
      description: "Volunteers wrapped gifts for 150 families during our holiday assistance program.",
      attendees: 45,
      impact: "150 families served"
    },
    {
      title: "Community Clean-Up Day",
      date: "October 14, 2023", 
      description: "Neighborhood beautification project removing litter and planting flowers in local parks.",
      attendees: 92,
      impact: "3 parks cleaned"
    },
    {
      title: "Back-to-School Supply Drive",
      date: "August 15, 2023",
      description: "Collected school supplies for students from low-income families starting the new school year.",
      attendees: 67,
      impact: "200 students helped"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Community Service": return "bg-success/10 text-success border-success/20";
      case "Training": return "bg-primary/10 text-primary border-primary/20";
      case "Fundraising": return "bg-accent/10 text-accent border-accent/20";
      case "Program Launch": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">Events</h1>
          <p className="text-xl text-primary-foreground/90">
            Join us for meaningful events that bring our community together and create positive change. 
            Every event is an opportunity to connect, contribute, and make a difference.
          </p>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              {/* Featured Events */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Featured Events</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {upcomingEvents.filter(event => event.featured).map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <event.icon className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{event.title}</CardTitle>
                              <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="mt-4 text-base">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground sm:col-span-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees}/{event.capacity} registered</span>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                          />
                        </div>
                        <Button 
                          className="w-full" 
                          variant={registeredEvents.has(event.id) ? "outline" : "default"}
                          onClick={() => handleRSVP(event.id, event.title)}
                          disabled={registeredEvents.has(event.id)}
                        >
                          {registeredEvents.has(event.id) ? "Registered ✓" : "Register Now"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Upcoming Events */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">All Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <event.icon className="h-5 w-5 text-primary" />
                          </div>
                          <Badge className={getCategoryColor(event.category)} variant="outline">
                            {event.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees}/{event.capacity}</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full" 
                          variant={registeredEvents.has(event.id) ? "outline" : "outline"}
                          size="sm"
                          onClick={() => handleRSVP(event.id, event.title)}
                          disabled={registeredEvents.has(event.id)}
                        >
                          {registeredEvents.has(event.id) ? "Registered ✓" : "Register"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Past Event Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                            <Camera className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <CardTitle>{event.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                            <CardDescription>{event.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees} attendees</span>
                          </div>
                          <Badge variant="outline" className="bg-success/10 text-success">
                            {event.impact}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-accent-foreground mb-6">
            Don't Miss Out!
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Stay updated on all our upcoming events and be the first to register. 
            Follow us on social media or contact us to get added to our event mailing list.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-accent">
              <Calendar className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-accent">
              <ExternalLink className="mr-2 h-5 w-5" />
              Follow Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;