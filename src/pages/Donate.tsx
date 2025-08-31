import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Shield, 
  Users, 
  Home, 
  GraduationCap, 
  Utensils,
  CreditCard,
  Lock,
  Gift,
  Calendar,
  Smartphone,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<string>("500");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("payfast");
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    isAnonymous: false
  });

  const presetAmounts = ["250", "500", "1000", "2500", "5000"];

  const impactAreas = [
    {
      icon: Utensils,
      title: "Food Security",
      description: "Provide meals and groceries to families facing food insecurity",
      example: "R250 provides 50 meals through our food bank"
    },
    {
      icon: Home,
      title: "Housing Support", 
      description: "Help with rent assistance and home repairs for vulnerable families",
      example: "R1000 helps cover utility bills for a family in crisis"
    },
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Support tutoring, mentorship, and educational resources for youth",
      example: "R500 provides school supplies for 5 students"
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Fund community events and support services that bring people together",
      example: "R2500 sponsors a community workshop or event"
    }
  ];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    toast({
      title: "Donation Processing...",
      description: `Thank you for your ${isRecurring ? "monthly" : "one-time"} donation of R${amount}. You'll be redirected to ${paymentMethod === 'payfast' ? 'PayFast' : 'SnapScan'}.`,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setDonorInfo(prev => ({ ...prev, [field]: value }));
  };

  const getImpactMessage = (amount: string) => {
    const num = parseInt(amount);
    if (num >= 2500) return "Your generosity can sponsor community workshops and provide comprehensive family support!";
    if (num >= 1000) return "Your donation can help with utility assistance and feed multiple families!";
    if (num >= 500) return "Your contribution can provide school supplies and nutritious meals!";
    if (num >= 250) return "Your gift can provide dozens of meals through our food bank!";
    return "Every rand makes a difference in someone's life!";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">Make a Donation</h1>
          <p className="text-xl text-primary-foreground/90">
            Your generosity powers our mission to create lasting positive change in communities. 
            Every donation, no matter the size, makes a meaningful difference.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Secure Donation Form</span>
                </CardTitle>
                <CardDescription>
                  Complete the form below to make your donation. All transactions are secure and encrypted.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  {/* Donation Amount */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Donation Amount</Label>
                    <RadioGroup 
                      value={donationAmount} 
                      onValueChange={setDonationAmount}
                      className="grid grid-cols-3 sm:grid-cols-5 gap-3"
                    >
                      {presetAmounts.map((amount) => (
                        <div key={amount} className="relative">
                          <RadioGroupItem 
                            value={amount} 
                            id={amount} 
                            className="peer sr-only" 
                          />
                          <Label
                            htmlFor={amount}
                            className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                          >
                            R{amount}
                          </Label>
                        </div>
                      ))}
                      <div className="relative sm:col-span-2">
                        <RadioGroupItem 
                          value="custom" 
                          id="custom" 
                          className="peer sr-only" 
                        />
                        <Label
                          htmlFor="custom"
                          className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          Custom Amount
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {donationAmount === "custom" && (
                      <div className="space-y-2">
                        <Label htmlFor="customAmount">Enter Custom Amount (ZAR)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-sm text-muted-foreground">R</span>
                          <Input
                            id="customAmount"
                            type="number"
                            placeholder="0.00"
                            className="pl-8"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            min="1"
                          />
                        </div>
                      </div>
                    )}

                    {/* Impact Message */}
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <p className="text-sm text-accent-foreground font-medium">
                        💝 {getImpactMessage(donationAmount === "custom" ? customAmount : donationAmount)}
                      </p>
                    </div>
                  </div>

                  {/* Recurring Donation */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="recurring" 
                      checked={isRecurring}
                      onCheckedChange={(checked) => setIsRecurring(checked === true)}
                    />
                    <Label htmlFor="recurring" className="text-sm">
                      Make this a monthly recurring donation
                    </Label>
                  </div>

                  <Separator />

                  {/* Payment Method Selection */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Payment Method</Label>
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div className="relative">
                        <RadioGroupItem 
                          value="payfast" 
                          id="payfast" 
                          className="peer sr-only" 
                        />
                        <Label
                          htmlFor="payfast"
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <div className="w-16 h-10 bg-blue-600 rounded flex items-center justify-center mb-2">
                            <span className="text-white font-bold text-sm">PayFast</span>
                          </div>
                          <span className="text-sm font-medium">PayFast</span>
                          <span className="text-xs text-muted-foreground">Cards, EFT, Instant EFT</span>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem 
                          value="snapscan" 
                          id="snapscan" 
                          className="peer sr-only" 
                        />
                        <Label
                          htmlFor="snapscan"
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <Smartphone className="w-8 h-8 text-green-600 mb-2" />
                          <span className="text-sm font-medium">SnapScan</span>
                          <span className="text-xs text-muted-foreground">QR Code Payment</span>
                        </Label>
                      </div>
                    </RadioGroup>

                    {/* Payment Method Logos */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                        <span>Accepted:</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">VISA</span>
                          </div>
                          <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">MC</span>
                          </div>
                          <div className="w-8 h-5 bg-green-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">EFT</span>
                          </div>
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-xs">Instant EFT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Donor Information</Label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={donorInfo.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={donorInfo.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={donorInfo.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={donorInfo.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={donorInfo.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={donorInfo.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="anonymous" 
                        checked={donorInfo.isAnonymous}
                        onCheckedChange={(checked) => handleInputChange("isAnonymous", checked === true)}
                      />
                      <Label htmlFor="anonymous" className="text-sm">
                        Make this donation anonymous
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full" variant="cta">
                    {paymentMethod === 'payfast' ? <CreditCard className="mr-2 h-5 w-5" /> : <Smartphone className="mr-2 h-5 w-5" />}
                    Donate R{donationAmount === "custom" ? customAmount || "0" : donationAmount}
                    {isRecurring && "/month"}
                  </Button>

                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Secured by 256-bit SSL encryption</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <span>Where Your Donation Goes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {impactAreas.map((area, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <area.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{area.title}</h4>
                        <p className="text-xs text-muted-foreground">{area.description}</p>
                        <p className="text-xs text-primary font-medium mt-1">{area.example}</p>
                      </div>
                    </div>
                    {index < impactAreas.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Security & Trust */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Secure & Trusted</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>501(c)(3) tax-deductible</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Instant tax receipt via email</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Cancel recurring donations anytime</span>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Giving */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-accent">
                  <Calendar className="h-5 w-5" />
                  <span>Monthly Giving</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our monthly giving program and provide consistent support that helps us plan and sustain our programs year-round.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Predictable support for our programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Exclusive monthly impact updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Special recognition as a sustainer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;