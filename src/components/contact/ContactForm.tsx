'use client'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface ContactFormInputs {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  postCode: string
  address: string
  message: string
  terms: boolean
}

interface PropsType {
  spacing?: boolean
}

const ContactForm = ({ spacing }: PropsType) => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>()

  const onSubmit: SubmitHandler<ContactFormInputs> = () => {
    if (!formRef.current) return

    const emailPromise = emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    )

    setIsSubmitted(true)
    toast.promise(emailPromise, {
      loading: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    })

    emailPromise.then(() => {
      setIsSubmitted(false)
      reset()
    })
  }

  return (
    <section
      className={`${
        spacing ? 'pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]' : ''
      }`}
      id="contact-form"
      data-aos="fade-up"
      data-aos-duration="1000">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-full flex-col gap-6 rounded-lg bg-gray-100 p-10 md:max-w-[564px]">
        {/* Name Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* First Name */}
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="firstName" className="text-sm font-medium text-black">
              First Name<sup className="ml-0.5 text-red-500">*</sup>
            </label>
            <input
              id="firstName"
              {...register('firstName', { required: 'First name is required' })}
              name="firstName"
              placeholder="Your First Name"
              className="border-dark-black/20 placeholder:text-dark-black/30 text-dark-black h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs outline-none focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
            />
            {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
          </div>

          {/* Last Name */}
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="lastName" className="text-sm font-medium text-black">
              Last Name<sup className="ml-0.5 text-red-500">*</sup>
            </label>
            <input
              id="lastName"
              {...register('lastName', { required: 'Last name is required' })}
              name="lastName"
              placeholder="Your Last Name"
              className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs outline-none focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
            />
            {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
          </div>
        </div>

        {/* Email */}
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-black">
            Email Address<sup className="ml-1 text-red-500">*</sup>
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
            })}
            name="email"
            placeholder="Your Email"
            className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs outline-none focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </div>

        {/* Phone */}
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="phoneNumber" className="text-sm font-medium text-black">
            Phone Number<sup className="ml-1 text-red-500">*</sup>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber', { required: 'Phone number is required' })}
            name="phoneNumber"
            placeholder="Your Phone Number"
            className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs outline-none focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
          />
          {errors.phoneNumber && <span className="text-xs text-red-500">{errors.phoneNumber.message}</span>}
        </div>

        {/* Postcode */}
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="postCode" className="text-sm font-medium text-black">
            Post Code<sup className="ml-1 text-red-500">*</sup>
          </label>
          <input
            id="postCode"
            {...register('postCode', { required: 'Post code is required' })}
            name="postCode"
            placeholder="Your Post Code"
            className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs outline-none focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
          />
          {errors.postCode && <span className="text-xs text-red-500">{errors.postCode.message}</span>}
        </div>

        {/* Address */}
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="address" className="text-sm font-medium text-black">
            Address<sup className="ml-1 text-red-500">*</sup>
          </label>
          <input
            id="address"
            {...register('address', { required: 'Address is required' })}
            name="address"
            placeholder="Your Address"
            className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs outline-none focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
          />
          {errors.address && <span className="text-xs text-red-500">{errors.address.message}</span>}
        </div>

        {/* Message */}
        <div className="grid w-full gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-black">
            Your Message<sup className="ml-1 text-red-500">*</sup>
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            name="message"
            placeholder="How can we help you?"
            className="border-dark-black/20 text-dark-black placeholder:text-dark-black/30 min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs outline-none focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
          />
          {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            {...register('terms', { required: 'You must agree to the privacy policy' })}
            className="size-4 rounded border border-gray-400 shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-gray-500/50"
          />
          <label htmlFor="terms" className="text-sm text-black">
            I agree to the <span className="text-red-600 underline">privacy policy</span>
          </label>
        </div>
        {errors.terms && <span className="-mt-4 text-xs text-red-500">{errors.terms.message}</span>}

        {/* Button */}
        <button
          className={`rv-button rv-button-sm rv-button-secondary " type="submit ${isSubmitted ? 'disabled cursor-not-allowed' : 'cursor-pointer'} `}>
          <div className="rv-button-top w-full">
            <span>{isSubmitted ? 'Sending...' : 'Get Quote'}</span>
          </div>
          <div className="rv-button-bottom">
            <span>{isSubmitted ? 'Sending...' : 'Get Quote'}</span>
          </div>
        </button>
      </form>
    </section>
  )
}

export default ContactForm
