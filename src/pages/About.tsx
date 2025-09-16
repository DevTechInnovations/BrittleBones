import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Heart, Target, Calendar, Megaphone } from "lucide-react";
import storyImg from "@/assets/IMG_2159.jpeg";
import missionImg from "@/assets/IMG_2159.jpeg";
import visionImg from "@/assets/IMG_2159.jpeg";

const About = () => {
  const teamMembers = [
{
    name: "Rageema Livingstone",
    role: "Founder and Chairperson",
    description: "Leads Brittle Bones SA with years of experience in community development and advocacy.",
  },
  {
    name: "Ishrat Casker",
    role: "Treasurer",
    description: "Manages finances with a focus on transparency and ensuring resources make the greatest impact.",
  },
  {
    name: "Aziza Abrahams",
    role: "Secretary",
    description: "Keeps operations running smoothly and builds partnerships to strengthen community support.",
  },
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
            At Brittle Bones SA, every child with Osteogenesis Imperfecta is a superhero. We support families, raise awareness, and build a community where they are celebrated and never alone. <strong>Together, we are Unbreakable in Spirit.</strong>
          </p>
        </div>
      </section>

      {/* Story Section */}
<section className="py-20 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-foreground text-center mb-4">About Us</h2>
<p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
  Supporting children and families with brittle bones through awareness, community, and care.
</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Story Card */}
      <div className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img src={storyImg} alt="Our Story" className="w-full h-48 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Our Story</h3>
          <p className="text-muted-foreground flex-1">
            Brittle Bones SA began close to home, inspired by families living with Osteogenesis Imperfecta.
            We build communities where families can lean on each other and thrive together.
          </p>
        </div>
      </div>

      {/* Mission Card */}
      <div className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img src={missionImg} alt="Our Mission" className="w-full h-48 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Our Mission</h3>
          <p className="text-muted-foreground flex-1">
            To support, advocate for, and empower families affected by brittle bone disease through
            awareness, education, and practical support.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col">
        <img src={visionImg} alt="Our Vision" className="w-full h-48 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Our Vision</h3>
          <p className="text-muted-foreground flex-1">
            A South Africa where every child with brittle bones has access to resources, compassion, and opportunity
            a future where hope transforms lives and communities grow <strong>Stronger Together</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* What We Do Section */}
<section className="py-20 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
   <h2 className="text-4xl font-bold text-foreground text-center mb-4">What We Do</h2>
<p className="text-lg text-muted-foreground text-center mb-12 max-w-full mx-auto">
  Making a difference through programs, awareness, and community events.
</p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Support Card */}
      <div className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4 hover:shadow-glow transition">
        <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
          <Users className="text-primary w-7 h-7" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">Support</h3>
        <p className="text-muted-foreground text-center">
          We provide programs and resources to help children and families living with brittle bone disease thrive.
        </p>
      </div>

      {/* Awareness Card */}
      <div className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4 hover:shadow-glow transition">
        <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full">
          <Megaphone className="text-accent w-7 h-7" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">Awareness</h3>
        <p className="text-muted-foreground text-center">
          We educate communities, schools, and medical professionals about Osteogenesis Imperfecta and rare bone conditions.
        </p>
      </div>

      {/* Events Card */}
      <div className="bg-card p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4 hover:shadow-glow transition">
        <div className="flex items-center justify-center w-14 h-14 bg-success/10 rounded-full">
          <Calendar className="text-success w-7 h-7" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">Events</h3>
        <p className="text-muted-foreground text-center">
          From community gatherings to fundraising initiatives, our events connect families, donors, and volunteers.
        </p>
      </div>
    </div>
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

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="w-72 text-center hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <CardTitle>{member.name}</CardTitle>
                <Badge variant="outline" className="mb-2 mx-auto">{member.role}</Badge>
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
