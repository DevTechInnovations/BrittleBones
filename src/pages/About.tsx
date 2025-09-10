import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Heart, Target, Calendar } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      description: "Leading community initiatives for over 10 years with passion for social change."
    },
    {
      name: "Michael Chen",
      role: "Program Manager", 
      description: "Coordinating volunteer programs and ensuring maximum impact in our communities."
    },
    {
      name: "Emily Rodriguez",
      role: "Outreach Coordinator",
      description: "Building partnerships and expanding our reach to serve more families in need."
    },
    {
      name: "David Thompson",
      role: "Finance Director",
      description: "Ensuring transparent financial management and sustainable growth."
    }
  ];

  const achievements = [
    { number: "15,000+", label: "Lives Impacted" },
    { number: "500+", label: "Volunteers" },
    { number: "25", label: "Community Programs" },
    { number: "10", label: "Years of Service" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy and understanding, recognizing the dignity in every person we serve."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of community to create lasting change and support one another through challenges."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Each project we run is built on community, compassion, and action. From celebrating milestones to creating pathways for advocacy, our work is powered by donations, volunteers, and partnerships that believe in building a more inclusive future for rare disease families."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, continuously improving our programs and services."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">About Community Hope</h1>
          <p className="text-xl text-primary-foreground/90">
            Building bridges of hope and creating lasting positive change in communities worldwide since 2014.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Community Hope was founded in 2014 by a group of passionate individuals who believed that 
                every person deserves access to basic necessities and opportunities for growth. What started 
                as a small local initiative has grown into a comprehensive organization serving communities 
                across multiple regions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began when we witnessed the struggles faced by families in our own neighborhood. 
                We realized that sustainable change requires more than temporary solutions – it requires 
                building strong communities where people can support one another and thrive together.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm px-3 py-1">Founded 2014</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">NPC 184-120 | Company Reg. 2025/546510/08</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Community Focused</Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted to-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                At Brittle Bones SA, our mission is to support, advocate, and empower individuals and families affected by Osteogenesis Imperfecta (OI) and other rare bone conditions across South Africa. Through our growing initiatives, we aim to raise awareness, provide practical support, and create opportunities for inclusion and empowerment.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                A world where every community has the resources and support needed to thrive, 
                where compassion drives action, and where hope transforms lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every action we take.
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

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated individuals working tirelessly to make a positive impact in our communities.
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

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">Our Impact</h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Together, we've achieved remarkable milestones in our mission to create positive change.
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