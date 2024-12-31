"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "../schema/contactSchema";

const ContactForm = forwardRef(function ContactForm(_, ref) {
	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	// Use `useImperativeHandle` to expose the `submit` function to the parent.
	useImperativeHandle(ref, () => ({
		submit: () => form.handleSubmit((values) => console.log(values))(),
	}));

	return (
		<Form {...form}>
			<form className="space-y-4 w-[90%] mt-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="relative">
							<FormControl>
								<Input
									placeholder="Name"
									className="rounded-full text-white/90 border-none bg-zinc-800 px-5"
									{...field}
								/>
							</FormControl>
							{!form.formState.errors.name && form.watch("name") && (
								<span className="absolute right-3 top-0">👋</span>
							)}
							<FormMessage className="pl-2" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="relative">
							<FormControl>
								<Input
									placeholder="Email"
									className="rounded-full text-white/90 border-none bg-zinc-800 px-5"
									{...field}
								/>
							</FormControl>
							<FormMessage className="pl-2" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem className="relative">
							<FormControl>
								<Input
									placeholder="Phone Number"
									className="rounded-full text-white/90 border-none bg-zinc-800 px-5"
									type="number"
									{...field}
								/>
							</FormControl>

							<FormMessage className="pl-2" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder="Your Message"
									className="rounded-t-xl rounded-bl-xl text-primary border-none bg-zinc-800 px-5"
									{...field}
								/>
							</FormControl>
							<FormMessage className="pl-2" />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
});

export default ContactForm;
