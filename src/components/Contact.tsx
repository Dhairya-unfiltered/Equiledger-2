import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    comments: '',
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: formData.name,
          number: formData.number,
          email: formData.email,
          comments: formData.comments,
        },
      ]);

    if (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Message sent!',
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      number: '',
      email: '',
      comments: '',
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Want to continue the <span className="gradient-text">conversation</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Your company can be set up within days. We help with all the paperwork.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="rounded-full py-6 px-6 border-2 border-border focus:border-cyan bg-card"
              required
            />

            <Input
              type="tel"
              placeholder="Number"
              value={formData.number}
              onChange={(e) =>
                setFormData({ ...formData, number: e.target.value })
              }
              className="rounded-full py-6 px-6 border-2 border-border focus:border-cyan bg-card"
              required
            />

            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="rounded-full py-6 px-6 border-2 border-border focus:border-cyan bg-card"
              required
            />

            <Textarea
              placeholder="Comments"
              value={formData.comments}
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
              className="rounded-2xl px-6 py-4 border-2 border-border focus:border-cyan bg-card resize-none"
              rows={4}
              required
            />

            <div className="relative">
              <Button
                type="submit"
                className="w-full rounded-full py-6 gradient-bg hover:opacity-90 border-0 flex items-center justify-center gap-2"
              >
                Submit
                <ArrowRight className="w-5 h-5 text-white" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
