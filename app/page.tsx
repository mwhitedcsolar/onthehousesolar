"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    property_address: "",
    pepco_customer: "",
    property_owner: "",
    best_contact_time: "",
    additional_notes: "",
    contact_consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mqerokzv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New On The House Solar Lead",
          source: "On The House Solar Website",
        }),
      });

      if (!response.ok) {
        throw new Error("The form could not be submitted.");
      }

      router.push("/thank-you");
    } catch {
      setErrorMessage(
        "Your request could not be submitted. Please check your information and try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" aria-label="On The House Solar homepage">
            <Image
              src="/logo.png"
              alt="On The House Solar"
              width={88}
              height={88}
              className="h-16 w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <a href="#how-it-works" className="font-semibold text-slate-700 transition hover:text-green-700">
              How It Works
            </a>
            <a href="#why-choose-us" className="font-semibold text-slate-700 transition hover:text-green-700">
              Why Choose Us
            </a>
            <a href="#faq" className="font-semibold text-slate-700 transition hover:text-green-700">
              FAQ
            </a>
            <a href="#contact" className="font-semibold text-slate-700 transition hover:text-green-700">
              Contact
            </a>
            <a
              href="#qualify"
              className="rounded-full bg-green-700 px-6 py-3 font-bold text-white shadow-md transition hover:bg-green-800"
            >
              See If I Qualify
            </a>
          </div>

          <a
            href="#qualify"
            className="rounded-full bg-green-700 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-green-800 lg:hidden"
          >
            See If I Qualify
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-green-800">
              Serving Washington, DC
            </p>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              See If Your DC Home Qualifies for{" "}
              <span className="text-green-700">Free Solar Installation</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Qualified homeowners may receive a professionally installed solar
              energy system with no installation charge through a provider-owned
              Power Purchase Agreement.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#qualify"
                className="rounded-full bg-green-700 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-800"
              >
                See If I Qualify
              </a>

              <a
                href="tel:+12027135518"
                className="rounded-full border-2 border-green-700 bg-white px-8 py-4 text-center text-lg font-bold text-green-800 transition hover:bg-green-50"
              >
                Call (202) 713-5518
              </a>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-500">
              Final approval depends on utility eligibility, property ownership,
              required documentation, roof and electrical conditions, and a
              successful site survey.
            </p>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/90 p-7 shadow-2xl backdrop-blur sm:p-10">
            <Image
              src="/logo.png"
              alt="On The House Solar logo"
              width={320}
              height={320}
              className="mx-auto h-auto w-full max-w-[260px]"
              priority
            />

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-green-50 p-5">
                <p className="font-bold text-green-900">
                  No installation charge for approved homes
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  The solar provider covers the approved system installation cost.
                </p>
              </div>

              <div className="rounded-2xl bg-yellow-50 p-5">
                <p className="font-bold text-yellow-900">
                  Provider-owned and maintained system
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  The provider generally owns the equipment and handles covered maintenance.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-bold text-slate-900">
                  Local guidance from start to finish
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Get help understanding the steps, documents, and review process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 px-5 py-8 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">Free Installation for Approved Homes</p>
            <p className="mt-1 text-sm text-slate-300">
              No installation charge when all program requirements are met.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">Pepco Service Area</p>
            <p className="mt-1 text-sm text-slate-300">
              Serving eligible Washington, DC properties.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">Site Survey Required</p>
            <p className="mt-1 text-sm text-slate-300">
              Roof and electrical conditions must be reviewed.
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">Provider-Owned System</p>
            <p className="mt-1 text-sm text-slate-300">
              Ownership and maintenance are handled by the solar provider.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-green-700">
              The Process
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              How Free Solar Installation Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Your online submission starts the review process. Final approval
              comes after documents and property conditions are verified.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "1",
                title: "Submit Basic Information",
                text: "Share your name, contact information, property address, and whether the property receives a Pepco bill.",
              },
              {
                number: "2",
                title: "Speak With a Solar Consultant",
                text: "We contact you to explain the program, answer questions, and discuss whether the property may be a good fit.",
              },
              {
                number: "3",
                title: "Complete Documents",
                text: "Qualified applicants may need to provide a recent Pepco bill, government-issued ID, ownership information, breaker panel photos, and signed agreements.",
              },
              {
                number: "4",
                title: "Site Survey and Final Approval",
                text: "A professional inspection reviews the roof, electrical system, access, and project requirements before final approval.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-xl font-extrabold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-choose-us"
        className="scroll-mt-28 bg-green-950 px-5 py-20 text-white sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-300">
              Why Choose On The House Solar
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              A Clear, Local, Customer-Focused Process
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Local DC Support",
                text: "Work with a solar consultant focused on Washington, DC homeowners and Pepco-served properties.",
              },
              {
                title: "Straightforward Explanations",
                text: "Get clear information about the PPA, provider ownership, documents, site survey, and next steps.",
              },
              {
                title: "No Installation Charge for Approved Homes",
                text: "When the property and customer meet all requirements, the provider covers the approved installation cost.",
              },
              {
                title: "Guided Documentation",
                text: "Receive help understanding what is needed before documents are submitted through the proper process.",
              },
              {
                title: "Professional Property Review",
                text: "Roof condition, available space, electrical setup, shading, and access are reviewed before final approval.",
              },
              {
                title: "No Pressure Consultation",
                text: "Start with a conversation and decide whether the program makes sense for your property.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/15">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-green-50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-green-700">
              Potential Benefits
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Why Homeowners Consider Solar
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Actual savings and energy results vary by property, system production,
              electricity usage, utility rates, and agreement terms.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["☀️", "Renewable Energy", "Solar panels convert sunlight into electricity for use at the property."],
              ["⚡", "Potential Electric Cost Reduction", "Solar may reduce electricity costs depending on usage, production, and agreement terms."],
              ["🛠️", "Provider Maintenance", "Covered maintenance is generally handled by the provider during the agreement."],
              ["🌱", "Lower Environmental Impact", "Solar energy can reduce reliance on electricity generated from fossil fuels."],
              ["🏠", "Energy Produced at Home", "The property can use electricity produced by the installed solar system."],
              ["📋", "Guided Project Process", "Approved projects move through design, permitting, utility review, inspection, and installation."],
            ].map(([icon, title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 p-7 shadow-sm">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="qualify"
        className="scroll-mt-28 bg-slate-100 px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-green-700">
              Begin Here
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              See If Your Home Qualifies
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Complete the form and Malin White will contact you to discuss the
              property, program, and possible next steps.
            </p>

            <div className="mt-9 space-y-5">
              <a
                href="tel:+12027135518"
                className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-green-500"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Phone
                </p>
                <p className="mt-2 text-xl font-extrabold">(202) 713-5518</p>
              </a>

              <a
                href="mailto:mwhitedcsolar@gmail.com"
                className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-green-500"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Email
                </p>
                <p className="mt-2 break-all text-lg font-extrabold">
                  mwhitedcsolar@gmail.com
                </p>
              </a>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Service Area
                </p>
                <p className="mt-2 text-lg font-extrabold">Washington, DC</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-2xl sm:p-10">
            <h3 className="text-3xl font-extrabold">Request a Free Consultation</h3>

            <p className="mt-4 leading-7 text-slate-600">
              This form begins an initial review only. Do not upload your ID,
              Pepco bill, or other sensitive documents here.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="full-name" className="mb-2 block font-bold text-slate-800">
                  Full Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.full_name}
                  onChange={(event) =>
                    setFormData({ ...formData, full_name: event.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block font-bold text-slate-800">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-bold text-slate-800">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(202) 555-1234"
                    value={formData.phone_number}
                    onChange={(event) =>
                      setFormData({ ...formData, phone_number: event.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="mb-2 block font-bold text-slate-800">
                  Property Address
                </label>
                <input
                  id="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder="Enter the Washington, DC property address"
                  value={formData.property_address}
                  onChange={(event) =>
                    setFormData({ ...formData, property_address: event.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="pepco" className="mb-2 block font-bold text-slate-800">
                    Does the property receive a Pepco bill?
                  </label>
                  <select
                    id="pepco"
                    required
                    value={formData.pepco_customer}
                    onChange={(event) =>
                      setFormData({ ...formData, pepco_customer: event.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">Select an answer</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="owner" className="mb-2 block font-bold text-slate-800">
                    Are you the property owner?
                  </label>
                  <select
                    id="owner"
                    required
                    value={formData.property_owner}
                    onChange={(event) =>
                      setFormData({ ...formData, property_owner: event.target.value })
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                  >
                    <option value="">Select an answer</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Joint owner or authorized representative">
                      Joint owner or authorized representative
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-time" className="mb-2 block font-bold text-slate-800">
                  Best Time to Contact You
                </label>
                <select
                  id="contact-time"
                  required
                  value={formData.best_contact_time}
                  onChange={(event) =>
                    setFormData({ ...formData, best_contact_time: event.target.value })
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                >
                  <option value="">Select a time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Any time">Any time</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="mb-2 block font-bold text-slate-800">
                  Questions or Additional Information{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Tell us anything helpful about the property or your questions."
                  value={formData.additional_notes}
                  onChange={(event) =>
                    setFormData({ ...formData, additional_notes: event.target.value })
                  }
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
                />
              </div>

              <label className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <input
                  type="checkbox"
                  required
                  checked={formData.contact_consent}
                  onChange={(event) =>
                    setFormData({ ...formData, contact_consent: event.target.checked })
                  }
                  className="mt-1 h-5 w-5 accent-green-700"
                />
                <span className="text-sm leading-6 text-slate-600">
                  I agree to be contacted by phone, text, or email regarding my
                  solar consultation request. Consent is not a guarantee of
                  eligibility or final approval.
                </span>
              </label>

              {errorMessage && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-green-700 px-6 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "See If I Qualify"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="scroll-mt-28 bg-white px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-green-700">
              Common Questions
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-5">
            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Is the solar installation really free?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Yes, for homeowners who qualify for the provider-owned PPA program.
                When the property meets the program requirements, including Pepco
                eligibility, ownership verification, suitable roof conditions,
                electrical compatibility, and a successful site survey, there is
                no installation charge to the homeowner. The solar provider pays
                for the installation and owns the system during the agreement.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                What makes a home eligible?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Eligibility can depend on Pepco service, property ownership, roof
                quality, usable roof space, electrical system compatibility,
                shading, access, required documentation, and the results of the
                site survey.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Does solar guarantee that my electric bill will be zero?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                No. Solar may reduce electricity costs, but results vary based on
                energy usage, solar production, utility charges, system design,
                and agreement terms.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                What documents may be needed later?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Continuing applicants may be asked for a recent Pepco bill,
                government-issued ID, ownership information, breaker panel photos,
                signed documents, and other project information through the proper process.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Why is a site survey required?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                The site survey allows professionals to examine roof, structural,
                electrical, access, and installation conditions before final project approval.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <summary className="cursor-pointer list-none text-lg font-bold">
                Is On The House Solar part of Pepco or the government?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                No. On The House Solar is an independent solar consultation and
                lead-generation business. It is not Pepco and is not a government agency.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 bg-yellow-300 px-5 py-16 sm:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-900">
              Questions About the Process?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Contact Malin White
            </h2>
            <p className="mt-3 text-lg text-slate-800">
              Washington, DC Solar Consultant
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+12027135518"
              className="rounded-full bg-slate-950 px-7 py-4 font-extrabold text-white shadow-lg transition hover:bg-slate-800"
            >
              Call (202) 713-5518
            </a>
            <a
              href="mailto:mwhitedcsolar@gmail.com"
              className="rounded-full border-2 border-slate-950 bg-white px-7 py-4 font-extrabold text-slate-950 transition hover:bg-slate-100"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="On The House Solar"
              width={120}
              height={120}
              className="h-24 w-auto rounded-xl bg-white object-contain p-2"
            />
            <p className="mt-5 max-w-sm leading-7 text-slate-300">
              Helping Washington, DC property owners begin the solar eligibility review process.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>
                <a href="tel:+12027135518" className="transition hover:text-white">
                  (202) 713-5518
                </a>
              </p>
              <p>
                <a
                  href="mailto:mwhitedcsolar@gmail.com"
                  className="break-all transition hover:text-white"
                >
                  mwhitedcsolar@gmail.com
                </a>
              </p>
              <p>Washington, DC</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Important Information</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              On The House Solar is an independent solar consultation and
              lead-generation business. It is not Pepco or a government agency.
              Free installation is available only for approved properties and
              customers who meet all provider and program requirements.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-7 text-center text-sm leading-6 text-slate-500">
          <p>© {new Date().getFullYear()} On The House Solar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
