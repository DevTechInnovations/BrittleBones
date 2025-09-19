import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart } from "lucide-react";

const VolunteerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    availability: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const roles = [
    "Food Bank Assistant",
    "Tutoring & Mentorship",
    "Housing Support",
    "Community Outreach",
    "Administrative Support",
    "Event Coordination",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.role) {
      toast({ title: "Select a role", description: "Please choose a volunteer role.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://back-end.brittlebones-sa.org.za/volunteer-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        toast({ title: "Form Submitted!", description: "Thank you for signing up to volunteer." });
        setFormData({ name: "", email: "", phone: "", role: "", availability: "", message: "" });
      } else {
        toast({ title: "Error", description: data.message, variant: "destructive" });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="relative z-10 px-4">
          {/* <Heart className="mx-auto mb-6 w-16 h-16 text-white/90" /> */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Help Us Make a Difference
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/90">
            There are many ways to make a difference in your community. Whether you have time, skills, or resources to share,
             we have opportunities that fit your lifestyle.
          </p>
        </div>
      </section>

      {/* Centered Form */}
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <Card className="w-full max-w-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Volunteer Sign-Up</CardTitle>
            <CardDescription className="text-center">
              Fill out the form below to join one of our volunteer opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="064 123 4567"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Volunteer Role</Label>
                <Select onValueChange={handleRoleChange} value={formData.role}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map(role => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="e.g., 4-6 hours/week"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any questions or information you'd like to share"
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Sign Up"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolunteerForm;
