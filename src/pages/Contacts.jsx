import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contacts() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a question or ready to start your project? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl dark:text-white">Contact Information</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+254 700 000 000</p>
                    <p className="text-gray-600 dark:text-gray-300">+254 711 111 111</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@bluestrike.co.ke</p>
                    <p className="text-gray-600 dark:text-gray-300">sales@bluestrike.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bluestrike Investments Ltd<br />
                      Nairobi, Kenya<br />
                      P.O. Box 12345-00100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-blue-600 dark:bg-blue-900 text-white border-0">
              <CardHeader>
                <CardTitle className="text-xl">24/7 Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 dark:text-blue-200 mb-3">
                  For urgent maintenance or technical support, call our emergency hotline:
                </p>
                <p className="text-2xl font-bold">+254 722 222 222</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl dark:text-white">Send Us a Message</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="dark:text-gray-200">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="dark:text-gray-200">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      required 
                      className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="dark:text-gray-200">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    required 
                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="dark:text-gray-200">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+254 700 000 000" 
                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="dark:text-gray-200">Subject *</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required 
                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="dark:text-gray-200">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your project or inquiry..." 
                    rows={5}
                    required 
                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
