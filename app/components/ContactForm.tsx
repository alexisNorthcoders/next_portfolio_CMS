"use client";

import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactFormData } from "../lib/interface";
import { useState } from "react";

export function ContactForm() {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const form = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setButtonText("Sending...");
    let response = await fetch("https://alexisraspberry.duckdns.org/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    setButtonText("Send");
    let result = await response.json();
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
      form.reset();
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          rules={{
            pattern: {
              value: /^\+?[0-9]*$/,
              message: "Invalid phone number.",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address.",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              {error && <FormMessage>{error.message}</FormMessage>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          rules={{
            required: "Message is required",
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row">
          <Button type="submit">{buttonText}</Button>
          {status && (
            <p
              className={`ml-3 mt-2 text-sm ${status.success ? "text-green-500" : "text-red-500"}`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
