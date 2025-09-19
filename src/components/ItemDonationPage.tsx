import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"; // ✅ import toast

const Donation = () => {
  const [itemForm, setItemForm] = useState({
    name: "",
    email: "",
    contact: "",
    itemType: "",
    deliveryMode: "",
    deliveryTime: "",
    description: "",
  });
  const [loading, setLoading] = useState(false); // ✅ button disable state
  const { toast } = useToast();

  const handleItemChange = (field: string, value: string) => {
    setItemForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleItemSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://back-end.brittlebones-sa.org.za/item-donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemForm),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "✅ Donation Sent",
          description:
            "Thank you for your item donation! We’ll be in touch soon.",
          duration: 4000,
        });

        setItemForm({
          name: "",
          email: "",
          contact: "",
          itemType: "",
          deliveryMode: "",
          deliveryTime: "",
          description: "",
        });
      } else {
        toast({
          title: "⚠️ Error",
          description: data.message || "Failed to send donation request.",
          variant: "destructive",
          duration: 4000,
        });
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      toast({
        title: "⚠️ Server Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Show delivery fields only for certain donation types
  const showDeliveryOptions = ["medical", "educational", "care"].includes(
    itemForm.itemType
  );

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

      {/* Item Donation Section */}
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
                {/* Full Name */}
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

                {/* Email */}
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

                {/* Contact */}
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

                {/* Item Type */}
                <div className="space-y-2">
                  <Label htmlFor="itemType">Type of Donation</Label>
                  <Select
                    value={itemForm.itemType}
                    onValueChange={(value) =>
                      handleItemChange("itemType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select item type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="medical">
                        Medical & Mobility Support
                      </SelectItem>
                      <SelectItem value="educational">
                        Educational Support
                      </SelectItem>
                      <SelectItem value="care">Event & Care Packages</SelectItem>
                      <SelectItem value="skills">Professional Skills</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Delivery Mode + Time (only for certain item types) */}
                {showDeliveryOptions && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryMode">Delivery Mode</Label>
                      <Select
                        value={itemForm.deliveryMode}
                        onValueChange={(value) =>
                          handleItemChange("deliveryMode", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DELIVER">Deliver to us</SelectItem>
                          <SelectItem value="PICKUP">Request pickup</SelectItem>
                          <SelectItem value="NOT_APPLICABLE">N/A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deliveryTime">Preferred Time</Label>
                      <Input
                        id="deliveryTime"
                        type="datetime-local"
                        value={itemForm.deliveryTime}
                        onChange={(e) =>
                          handleItemChange("deliveryTime", e.target.value)
                        }
                        required={itemForm.deliveryMode !== "NOT_APPLICABLE"}
                      />
                    </div>
                  </>
                )}

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Donation Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide details about your donation"
                    value={itemForm.description}
                    onChange={(e) =>
                      handleItemChange("description", e.target.value)
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover:bg-blue-500 hover:text-white"
                  disabled={loading} // ✅ disable button while sending
                >
                  {loading ? "Sending..." : "Submit Donation"}
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
