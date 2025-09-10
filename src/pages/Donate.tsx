import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Heart, Smartphone, CreditCard, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<string>("500");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("payfast");
  const [isRecurring, setIsRecurring] = useState<boolean>(false);

  const presetAmounts = ["250", "500", "1000", "2500", "5000"];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use custom amount if selected, otherwise preset amount
    const amount = donationAmount === "custom" ? customAmount : donationAmount;

    // Validate entered amount
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    // ✅ Always convert to cents for SnapScan
    const amountInCents = Math.round(Number(amount) * 100);

    if (paymentMethod === "snapscan") {
      // Redirect to SnapScan with correct cents value
      window.location.href = `https://pos.snapscan.io/qr/6Cm8s6C8?amount=${amountInCents}`;
    } else {
      toast({
        title: "Redirecting to PayFast...",
        description: `Processing your donation of R${amount}`,
      });
      // Add PayFast integration here if needed
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <div className="relative z-10">
          <Heart className="mx-auto mb-6 w-16 h-16 text-white/90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Make a Difference Today</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
            Your donation helps us change lives and support communities. Every contribution counts and makes a real impact.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="text-primary w-6 h-6" />
                  </div>
                  Donate Now
                </CardTitle>
                <CardDescription className="text-base">
                  Choose an amount and payment method to make your secure donation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleDonationSubmit} className="space-y-8">
                  {/* Donation Amount */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-foreground">Select Amount (ZAR)</Label>
                    <RadioGroup
                      value={donationAmount}
                      onValueChange={setDonationAmount}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-3"
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
                            className="flex items-center justify-center rounded-xl border-2 border-border bg-background p-4 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200 peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary font-semibold"
                          >
                            R{amount}
                          </Label>
                        </div>
                      ))}

                      {/* Custom Amount */}
                      <div className="relative col-span-2 sm:col-span-3">
                        <RadioGroupItem
                          value="custom"
                          id="custom"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="custom"
                          className="flex flex-col items-start rounded-xl border-2 border-border bg-background p-4 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                        >
                          <span className="font-semibold">Custom Amount</span>
                          {donationAmount === "custom" && (
                            <div className="relative w-full mt-3">
                              <span className="absolute left-4 top-3 text-muted-foreground font-medium">R</span>
                              <Input
                                type="number"
                                className="pl-8 h-12 text-base border-border"
                                placeholder="Enter amount"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                              />
                            </div>
                          )}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Recurring Option */}
                  <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                    <Checkbox
                      id="recurring"
                      checked={isRecurring}
                      onCheckedChange={(checked) => setIsRecurring(checked === true)}
                    />
                    <Label htmlFor="recurring" className="text-base font-medium">
                      Make this a monthly recurring donation
                    </Label>
                  </div>

                  {isRecurring && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-sm text-blue-700">
                        <strong>Note:</strong> Monthly donations are processed through PayFast only. SnapScan option will be disabled.
                      </p>
                    </div>
                  )}

                  <Separator className="my-6" />

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-foreground">Payment Method</Label>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-2 gap-4"
                    >
                      {/* PayFast */}
                      <div className="relative">
                        <RadioGroupItem
                          value="payfast"
                          id="payfast"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="payfast"
                          className="flex flex-col items-center justify-center rounded-xl border-2 border-border bg-background p-6 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 min-h-[120px]"
                        >
                          <CreditCard className="w-8 h-8 mb-2 text-primary" />
                          <span className="font-semibold">PayFast</span>
                          <span className="text-xs text-muted-foreground mt-1">Card & EFT</span>
                        </Label>
                      </div>

                      {/* SnapScan */}
                      <div className="relative">
                        <RadioGroupItem
                          value="snapscan"
                          id="snapscan"
                          className="peer sr-only"
                          disabled={isRecurring}
                        />
                        <Label
                          htmlFor="snapscan"
                          className={`flex flex-col items-center justify-center rounded-xl border-2 border-border bg-background p-6 transition-all duration-200 min-h-[120px] ${
                            isRecurring 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'cursor-pointer hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5'
                          }`}
                        >
                          <Smartphone className="w-8 h-8 mb-2 text-primary" />
                          <span className="font-semibold">SnapScan</span>
                          <span className="text-xs text-muted-foreground mt-1">QR Code</span>
                          {isRecurring && (
                            <span className="text-xs text-red-500 mt-1">Not available for monthly</span>
                          )}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Donate Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {paymentMethod === "snapscan" ? (
                      <Smartphone className="mr-3 h-6 w-6" />
                    ) : (
                      <CreditCard className="mr-3 h-6 w-6" />
                    )}
                    Donate R{donationAmount === "custom" ? customAmount || "0" : donationAmount}
                    {isRecurring && "/month"}
                  </Button>

                  {/* Security Info */}
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                    <Lock className="h-4 w-4" />
                    <span>Secure payment powered by SSL encryption</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Banking Details Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CreditCard className="text-green-600 w-5 h-5" />
                  </div>
                  Direct Bank Transfer
                </CardTitle>
                <CardDescription>
                  Transfer directly to our bank account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-muted-foreground">Bank:</span>
                    <p className="font-medium">First National Bank (FNB)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Account Name:</span>
                    <p className="font-medium">Your Organization Name</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Account Number:</span>
                    <p className="font-medium">62XXXXXXXX</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Branch Code:</span>
                    <p className="font-medium">250655</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Reference:</span>
                    <p className="font-medium">Donation + Your Name</p>
                  </div>
                </div>
                <Separator />
                <p className="text-xs text-muted-foreground">
                  Please email proof of payment to donations@yourorg.org.za
                </p>
              </CardContent>
            </Card>

            {/* Impact Stats */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="text-primary w-5 h-5" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>R250</span>
                    <span className="text-muted-foreground">Feeds 5 families</span>
                  </div>
                  <div className="flex justify-between">
                    <span>R500</span>
                    <span className="text-muted-foreground">School supplies for 2 children</span>
                  </div>
                  <div className="flex justify-between">
                    <span>R1000</span>
                    <span className="text-muted-foreground">Medical aid for 1 month</span>
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
