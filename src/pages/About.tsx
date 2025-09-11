import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Heart, Target } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      description: "A passionate leader with over 10 years of experience driving community-focused initiatives."
    },
    {
      name: "Michael Chen",
      role: "Program Manager", 
      description: "Dedicated to coordinating impactful volunteer programs and maximizing community reach."
    },
    {
      name: "Emily Rodriguez",
      role: "Outreach Coordinator",
      description: "Building partnerships and expanding our network to support more families."
    },
    {
      name: "David Thompson",
      role: "Finance Director",
      description: "Committed to transparent financial stewardship and sustainable organizational growth."
    }
  ];

  const achievements = [
    { number: "15,000+", label: "Lives touched with care and hope" },
    { number: "500+", label: "Hearts that power our mission" },
    { number: "25", label: "Initiatives that make a difference" },
    { number: "10", label: "Years of dedication and impact" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Support and Community",
      description: "Bringing families together through monthly meetups, online circles, and awareness drives."
    },
    {
      icon: Users,
      title: "Give and Gain Gifting",
      description: "Turning creativity into care through custom gift boxes and baked goods that directly fund meaningful projects."
    },
    {
      icon: Target,
      title: "Events and Fundraisers",
      description: "Pop-up markets and community campaigns that inspire joy while supporting our mission."
    },
    {
      icon: Award,
      title: "Awareness Campaigns",
      description: "Educating and inspiring through school visits, awareness days, and local partnerships."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">About Brittle Bones</h1>
          <p className="text-xl text-primary-foreground/90">
            At Brittle Bones SA, every child with Osteogenesis Imperfecta (brittle bone disease) is more than their condition—they are superheroes. 
            Our mission is to uplift families, raise awareness, and build a community where children with fragile bones are celebrated and supported. 
            Through heartfelt events, fundraisers, and strong partnerships, we bring hope, strength, and opportunities to those living with this rare condition. 
            <strong> Together, we are Unbreakable in Spirit.</strong>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began close to home, inspired by the challenges faced by families in our community. 
                Real change doesn’t come from quick fixes—it comes from building strong, connected communities where families can lean on one another and thrive together.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm px-3 py-1">Founded 2025</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">NPC 184-120 | Company Reg. 2025/546510/08</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Community Focused</Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted to-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We support, advocate for, and empower individuals and families affected by Osteogenesis Imperfecta (OI) and other rare bone conditions across South Africa. 
                Through awareness, education, and practical support, we are building a foundation of inclusion, empowerment, and lasting change.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                We dream of a South Africa where every child and family facing OI has access to resources, compassion, and opportunities—a future where hope transforms lives and communities grow stronger together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <h2 className="text-4xl font-bold text-foreground mb-6 text-center">What We Do</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                We focus on creating real impact for children and families living with brittle bone disease. 
                Our programs bring people together, raise awareness, and provide support where it matters most.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                <li>Support programs for children and families</li>
                <li>Awareness campaigns to educate and inspire</li>
                <li>Fundraising initiatives that drive change</li>
                <li>Community events that connect and uplift</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
              <p className="text-muted-foreground">
                Every program has a story of resilience and hope. From children finding confidence to families discovering strength in community, 
                these stories remind us why our work matters. Together, we turn challenges into victories.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every action we take.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The People Behind Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals giving their time, energy, and love to make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="outline" className="mb-2">{member.role}</Badge>
                  <CardDescription>{member.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">The Difference We’ve Made</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Every milestone reflects the love, effort, and resilience of our community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-primary-foreground/90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
