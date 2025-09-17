import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart } from "lucide-react";
// ... (your other imports)

const Donation = () => {
  // your existing donate states + logic...

  const [itemForm, setItemForm] = useState({
    name: "",
    email: "",
    contact: "",
    itemType: "",
    description: "",
  });

  const handleItemChange = (field, value) => {
    setItemForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    console.log("Item Donation Submitted:", itemForm);
    alert("Thank you for your item donation! We’ll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
         {/* Hero Section */}
      <section className="relative bg-primary py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="relative z-10 px-4">
          <Heart className="mx-auto mb-6 w-16 h-16 text-white/90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Make a Difference Today
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/90">
            Your donation helps us change lives and support communities. Every
            contribution counts and makes a real impact.
          </p>
        </div>
      </section>

      {/* --- New Item Donation Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Item Donation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleItemSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={itemForm.name}
                    onChange={(e) => handleItemChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={itemForm.email}
                    onChange={(e) => handleItemChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={itemForm.contact}
                    onChange={(e) => handleItemChange("contact", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="itemType">Type of Donation</Label>
                  <Select
                    value={itemForm.itemType}
                    onValueChange={(value) => handleItemChange("itemType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select item type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">Medical & Mobility Support</SelectItem>
                      <SelectItem value="educational">Educational Support</SelectItem>
                      <SelectItem value="care">Event & Care Packages</SelectItem>
                      <SelectItem value="skills">Professional Skills</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Donation Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide details about your donation"
                    value={itemForm.description}
                    onChange={(e) => handleItemChange("description", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full hover:bg-blue-500 hover:text-white">
                  Submit Donation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Donation;
