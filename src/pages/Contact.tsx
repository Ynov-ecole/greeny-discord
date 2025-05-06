
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Send, Mail, MessageSquare, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// Schema de validation pour le formulaire
const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  sujet: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      email: "",
      sujet: "",
      message: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-greeny-50">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="hover:bg-greeny-100">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 text-greeny-600" />
              <span className="text-greeny-600">Retour à l'accueil</span>
            </Link>
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
            Contactez-nous
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-greeny-100 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <div className="w-12 h-12 bg-greeny-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-greeny-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-center">contact@greeny-bot.fr</p>
              </CardContent>
            </Card>
            
            <Card className="border-greeny-100 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <div className="w-12 h-12 bg-greeny-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-greeny-600" />
                </div>
                <h3 className="font-semibold mb-2">Discord</h3>
                <p className="text-gray-600 text-center">discord.gg/greeny</p>
              </CardContent>
            </Card>
            
            <Card className="border-greeny-100 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <div className="w-12 h-12 bg-greeny-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-greeny-600" />
                </div>
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-gray-600 text-center">+33 1 23 45 67 89</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-greeny-100 shadow-lg bg-white">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-greeny-700 mb-6">Envoyez-nous un message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="votre.email@exemple.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="sujet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sujet</FormLabel>
                        <FormControl>
                          <Input placeholder="Sujet de votre message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Votre message..." 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-greeny-500 hover:bg-greeny-600 text-white px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      Envoyer
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
