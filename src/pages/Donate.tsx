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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-center text-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference Today</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your donation helps us change lives and support communities. Every contribution counts!
        </p>
      </section>

      {/* Donation Form */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Card className="shadow-xl border-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Heart className="text-red-500" />
              Donate Now
            </CardTitle>
            <CardDescription>
              Choose an amount and payment method to make your secure donation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDonationSubmit} className="space-y-6">
              {/* Donation Amount */}
              <div>
                <Label className="font-semibold text-lg">Donation Amount</Label>
                <RadioGroup
                  value={donationAmount}
                  onValueChange={setDonationAmount}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3"
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
                        className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 cursor-pointer hover:bg-primary hover:text-white transition peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white peer-data-[state=checked]:border-primary"
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
                      className="flex flex-col items-start rounded-lg border-2 border-gray-200 bg-white p-4 cursor-pointer hover:bg-primary hover:text-black transition peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      <span>Custom Amount</span>
                      {donationAmount === "custom" && (
                        <div className="relative w-full mt-4">
                          <span className="absolute left-4 top-3 text-gray-500">R</span>
                          <Input
                            type="number"
                            className="pl-7"
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
              <div className="flex items-center gap-2">
                <Checkbox
                  id="recurring"
                  checked={isRecurring}
                  onCheckedChange={(checked) => setIsRecurring(checked === true)}
                />
                <Label htmlFor="recurring" className="text-sm">
                  Make this a monthly donation
                </Label>
              </div>

              <Separator />

              {/* Payment Method */}
              <div>
                <Label className="font-semibold text-lg">Payment Method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-2 gap-4 mt-3"
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
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 cursor-pointer hover:bg-primary hover:text-black transition peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      <CreditCard className="w-6 h-6 mb-1" />
                      PayFast
                    </Label>
                  </div>

                  {/* SnapScan */}
                  <div className="relative">
                    <RadioGroupItem
                      value="snapscan"
                      id="snapscan"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="snapscan"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 cursor-pointer hover:bg-primary hover:text-black transition peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      <Smartphone className="w-6 h-6 mb-1" />
                      SnapScan
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Donate Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-lg text-lg font-semibold"
              >
                {paymentMethod === "snapscan" ? (
                  <Smartphone className="mr-2 h-5 w-5" />
                ) : (
                  <CreditCard className="mr-2 h-5 w-5" />
                )}
                Donate R{donationAmount === "custom" ? customAmount || "0" : donationAmount}
                {isRecurring && "/month"}
              </Button>

              {/* Security Info */}
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-2">
                <Lock className="h-4 w-4" />
                Secure payment powered by SSL encryption
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;
