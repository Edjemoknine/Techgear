import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 max-w-7xl mx-auto  px-8">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Get in touch with our team for support, inquiries, or custom
            solutions
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-gray-900 border-zinc-800">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send Us a Message
              </h2>
              <form className="space-y-4">
                <div className="grid gap-2 text-white">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="grid gap-2 text-white">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Your email"
                    type="email"
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="grid gap-2 text-white">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Message subject"
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div className="grid gap-2 text-white">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px] bg-gray-800 border-gray-700"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-zinc-800">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="text-muted-foreground">
                        123 Gaming Street, Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-muted-foreground">
                        support@techgear.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-white">Hours</h3>
                      <p className="text-muted-foreground">
                        24/7 Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-zinc-800">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white">
                      What are your support hours?
                    </h3>
                    <p className="text-muted-foreground">
                      Our technical support team is available 24/7.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      How long does repair usually take?
                    </h3>
                    <p className="text-muted-foreground">
                      Standard repairs are completed within 3-5 business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
