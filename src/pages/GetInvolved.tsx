import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  Calendar, 
  Clock, 
  MapPin, 
  HandHeart, 
  Briefcase, 
  GraduationCap,
  Home,
  Utensils,
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  const volunteerOpportunities = [
    {
      icon: Utensils,
      title: "Food Bank Assistant",
      description: "Help sort, pack, and distribute food to families in need at our community food bank.",
      time: "4-6 hours/week",
      location: "Main Office",
      skills: "No experience required",
      badge: "High Impact"
    },
    {
      icon: GraduationCap,
      title: "Tutoring & Mentorship",
      description: "Support local students with homework help and life skills mentorship programs.",
      time: "2-4 hours/week",
      location: "Community Centers",
      skills: "High school education",
      badge: "Ongoing"
    },
    {
      icon: Home,
      title: "Housing Support",
      description: "Assist with home repairs, painting, and maintenance for elderly and disabled residents.",
      time: "8 hours/month",
      location: "Various Locations",
      skills: "Basic handyman skills",
      badge: "Flexible"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Connect with community members, raise awareness, and help identify those in need.",
      time: "6-8 hours/week", 
      location: "Field Work",
      skills: "Communication skills",
      badge: "People-Focused"
    },
    {
      icon: Briefcase,
      title: "Administrative Support",
      description: "Help with office tasks, data entry, event planning, and organizational support.",
      time: "4-6 hours/week",
      location: "Main Office",
      skills: "Computer literacy",
      badge: "Behind-the-Scenes"
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "Plan and execute fundraising events, community gatherings, and awareness campaigns.",
      time: "8-12 hours/month",
      location: "Various Venues",
      skills: "Organization skills",
      badge: "Creative"
    }
  ];

  const supportWays = [
    {
      icon: Heart,
      title: "Monthly Donations",
      description: "Provide consistent support with recurring monthly contributions that help us plan and sustain our programs.",
      action: "Set Up Monthly Giving"
    },
    {
      icon: ShoppingBag,
      title: "Item Donations",
      description: "Donate clothes, food, household items, or school supplies that directly benefit community members.",
      action: "View Wish List"
    },
    {
      icon: Users,
      title: "Corporate Partnership",
      description: "Partner with us through corporate sponsorships, employee volunteer programs, or matching gifts.",
      action: "Explore Partnerships"
    },
    {
      icon: HandHeart,
      title: "Skills-Based Volunteering",
      description: "Use your professional skills in marketing, legal, accounting, or technology to support our mission.",
      action: "Share Your Skills"
    }
  ];

  const membershipBenefits = [
    "Quarterly newsletter with impact updates",
    "Exclusive member-only volunteer events", 
    "Annual appreciation dinner and recognition",
    "Tax-deductible membership fee",
    "Voting rights in annual board elections",
    "Access to member resource library"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">Get Involved</h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            There are many ways to make a difference in your community. Whether you have time, 
            skills, or resources to share, we have opportunities that fit your lifestyle.
          </p>
          <Button size="lg" variant="cta" asChild>
            <Link to="/contact">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect volunteer opportunity that matches your interests, skills, and schedule. 
              Every role makes a meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <opportunity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{opportunity.badge}</Badge>
                  </div>
                  <CardTitle>{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{opportunity.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span>{opportunity.skills}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Other Ways to Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Can't volunteer regularly? There are still many meaningful ways to support our mission 
              and make a positive impact in the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportWays.map((way, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <way.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{way.title}</CardTitle>
                      <CardDescription className="mt-2">{way.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {way.action} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Become a Member</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our community of dedicated supporters and gain deeper involvement in our mission. 
                Membership provides you with exclusive benefits while supporting our ongoing work.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Annual membership fee: <span className="font-semibold text-primary">$50 individual</span> | 
                <span className="font-semibold text-primary"> $75 family</span>
              </p>
              <div className="space-y-2">
                <Button size="lg" variant="cta" className="mr-4">
                  Join Now
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Membership Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {membershipBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-success to-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Every contribution, whether time, skills, or resources, helps us create lasting positive change. 
            Join us today and be part of something bigger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="cta" asChild>
              <Link to="/contact">
                <HandHeart className="mr-2 h-5 w-5" />
                Start Volunteering
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Link to="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Make a Donation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;