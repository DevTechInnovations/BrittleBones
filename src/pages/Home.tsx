import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Calendar, Handshake, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/IMG_2159.jpeg";
// import heroImage from "@/assets/hero-community.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building Hope, <span className="text-accent">Together</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Join our mission to create lasting positive change in communities worldwide. 
            Every action, no matter how small, makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta" asChild>
              <Link to="/donate" className="text-lg px-8 py-6">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Link to="/get-involved" className="text-lg px-8 py-6">
                <Users className="mr-2 h-5 w-5" />
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in the power of community to transform lives and create lasting positive change. 
              Through compassion, action, and hope, we work together to build a better tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Compassion</CardTitle>
                <CardDescription>
                  We approach every challenge with empathy and understanding, 
                  ensuring that dignity and respect are at the heart of everything we do.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Action</CardTitle>
                <CardDescription>
                  We turn compassion into concrete action, implementing sustainable solutions 
                  that address root causes and create lasting impact.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  We believe in the strength of community, bringing people together 
                  to support one another and create positive change from within.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Join us in making a difference. Every event is an opportunity to connect and contribute.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">March 15, 2024</span>
                </div>
                <CardTitle>Community Food Drive</CardTitle>
                <CardDescription>
                  Help us collect food donations for local families in need. 
                  Every contribution makes a difference.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/events">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">March 22, 2024</span>
                </div>
                <CardTitle>Volunteer Training Workshop</CardTitle>
                <CardDescription>
                  New to volunteering? Join our comprehensive training session 
                  to learn how you can make the biggest impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/events">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">April 5, 2024</span>
                </div>
                <CardTitle>Annual Fundraising Gala</CardTitle>
                <CardDescription>
                  Join us for an evening of celebration and giving as we raise funds 
                  for our ongoing community programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/events">
                    Get Tickets <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Whether through volunteering, donating, or spreading awareness, 
            there are many ways you can help create positive change in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta" asChild>
              <Link to="/donate" className="text-lg px-8 py-6">
                <Handshake className="mr-2 h-5 w-5" />
                Donate Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Link to="/get-involved" className="text-lg px-8 py-6">
                <Users className="mr-2 h-5 w-5" />
                Volunteer With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;