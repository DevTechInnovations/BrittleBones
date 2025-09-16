import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Calendar, Handshake, ArrowRight, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/IMG_2159.jpeg";
import UpcomingEvents from "@/components/UpcomingEvents";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
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
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stronger <span className="text-accent">Together</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-5xl mx-auto">
            At <strong>Brittle Bones South Africa</strong>, we believe every child with Osteogenesis Imperfecta is a
            superhero. Together, we are building awareness, offering support, and creating a community where they are
            celebrated because we are <strong>Unbreakable in Spirit</strong>.
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

      {/* Blue Divider Line */}
      <div className="w-full h-px bg-blue-300"></div>

      {/* Mission Overview */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4">Our Mission</h2>
      <p className="text-lg text-muted-foreground max-w-full mx-auto">
        Supporting families with brittle bone disease through care, awareness, and community so no one faces OI alone.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="text-center hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-yellow-500" />
          </div>
          <CardTitle>Support</CardTitle>
          <CardDescription>
            Helping families navigate daily challenges with OI through advice, resources, and emotional support.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="text-center hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-yellow-500" />
          </div>
          <CardTitle>Awareness</CardTitle>
          <CardDescription>
            Educating schools, medical professionals, and the public about Osteogenesis Imperfecta and its impact.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="text-center hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-yellow-500" />
          </div>
          <CardTitle>Community</CardTitle>
          <CardDescription>
            Creating safe spaces — online and offline — where families can connect, share, and support each other.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  </div>
</section>

      {/* Blue Divider Line */}
      <div className="w-full h-px bg-blue-300"></div>

      {/* Event Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Join us in making a difference. Every event is an opportunity to connect and contribute.
            </p>
          </div>

          <UpcomingEvents />
        </div>
      </section>

      {/* Blue Divider Line */}
      <div className="w-full h-px bg-blue-300"></div>

      {/* CTA Section - Kept Blue */}
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