'use client'

import { ContactHeading } from '@/components/contact/ContactHeading'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ContactFormInputs {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  postCode: string
  message: string
  terms: boolean
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>()

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log('Form submitted:', data)
    // Optional: Send data to an API endpoint
    reset()
  }

  return (
    <section className="container">
      <div className="py-32">
        <ContactHeading />
        <div className="grid gap-10 md:grid-cols-2">
          <ContactInfo />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-full flex-col gap-6 rounded-lg bg-gray-100 p-10 md:max-w-[564px]">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="firstName" className="text-dark-black text-sm leading-none font-medium">
                  First Name<sup className="ml-0.5 text-red-500">*</sup>
                </label>
                <input
                  id="firstName"
                  placeholder="Your First Name"
                  {...register('firstName', { required: 'First name is required' })}
                  className="border-dark-black/20 placeholder:text-dark-black/30 text-dark-black h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition outline-none placeholder:text-base focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
                />
                {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
              </div>

              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="lastName" className="text-dark-black text-sm leading-none font-medium">
                  Last Name<sup className="ml-0.5 text-red-500">*</sup>
                </label>
                <input
                  id="lastName"
                  placeholder="Your Last Name"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition outline-none placeholder:text-base focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
                />
                {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label
                htmlFor="email"
                className="text-dark-black flex items-center gap-2 text-sm leading-none font-medium">
                Email Address<sup className="-ml-1.5 text-red-500">*</sup>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition outline-none placeholder:text-base focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label
                htmlFor="phoneNumber"
                className="text-dark-black flex items-center gap-2 text-sm leading-none font-medium">
                Phone number<sup className="-ml-1.5 text-red-500">*</sup>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Your phone number"
                {...register('phoneNumber', { required: 'Phone number is required' })}
                className="border-dark-black/20 placeholder:text-dark-black/30 text-dark-black flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition outline-none placeholder:text-base focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
              />
              {errors.phoneNumber && <span className="text-xs text-red-500">{errors.phoneNumber.message}</span>}
            </div>

            <div className="grid w-full items-center gap-1.5">
              <label
                htmlFor="postCode"
                className="text-dark-black flex items-center gap-2 text-sm leading-none font-medium">
                Post code<sup className="-ml-1.5 text-red-500">*</sup>
              </label>
              <input
                type="text"
                id="postCode"
                placeholder="Your post code"
                {...register('postCode', { required: 'Post code is required' })}
                className="border-dark-black/20 placeholder:text-dark-black/30 text-dark-black flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition outline-none placeholder:text-base focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
              />
              {errors.postCode && <span className="text-xs text-red-500">{errors.postCode.message}</span>}
            </div>

            <div className="grid w-full gap-1.5">
              <label
                htmlFor="message"
                className="text-dark-black flex items-center gap-2 text-sm leading-none font-medium">
                Your Message<sup className="-ml-1.5 text-red-500">*</sup>
              </label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                {...register('message', { required: 'Message is required' })}
                className="border-dark-black/20 text-dark-black flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition outline-none placeholder:text-base placeholder:text-black/30 focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
              />
              {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                {...register('terms', { required: 'You must agree to the privacy policy' })}
                className="peer border-input text-dark-black size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-gray-500/50"
              />
              <label htmlFor="terms" className="text-sm leading-none font-medium text-black/30">
                I agree to the <span className="text-dark-black ml-1 underline">privacy policy</span>
              </label>
            </div>
            {errors.terms && <span className="-mt-4 text-xs text-red-500">{errors.terms.message}</span>}

            <button
              type="submit"
              className="hover:bg-opacity-90 bg-dark-black mt-4 h-10 w-full rounded-md text-base font-medium text-white transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
