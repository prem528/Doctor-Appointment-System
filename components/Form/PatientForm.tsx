"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormFIeld from "../CustomFormFIeld";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/router";
 

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneinput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELCET = "select",
  SKELETON = "skeleton",
}


const PatientForm = () => {
 // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
     setIsLoading(true);

     try {
      // const userData = {name, email,phone,}
      // const user = await createUser(userData)
      // if(user) Router.push(`/patients/${user.$id}/register`)
     } catch (error){
      console.log(error);
     }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment. </p>
        </section>

        <CustomFormFIeld
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormFIeld
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder=" johndeo@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormFIeld
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(+91) 12345-67890"
           
           
        />

         <SubmitButton isLoading={isLoading}> Get Started </SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
