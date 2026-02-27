"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  motivation: string;
  consent: boolean;
  company: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  motivation: "",
  consent: false,
  company: "",
};

export function MembershipForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const onFieldChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Podaj imię i nazwisko.";
    if (!form.email.trim()) nextErrors.email = "Podaj adres e-mail.";
    if (!form.city.trim()) nextErrors.city = "Podaj miasto.";
    if (!form.consent) nextErrors.consent = "Wymagana jest zgoda na kontakt.";

    const hasErrors = Object.keys(nextErrors).length > 0;
    setErrors(nextErrors);
    return !hasErrors;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);

    if (!validate()) return;
    if (form.company.trim()) return;

    setIsSubmitting(true);
    const endpoint = process.env.NEXT_PUBLIC_MEMBERSHIP_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            city: form.city,
            motivation: form.motivation,
            source: "nowoczesna-website",
          }),
        });

        if (!response.ok) {
          throw new Error("Nie udało się wysłać formularza.");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }

      setIsSuccess(true);
      setMessage("Dziękujemy. Zgłoszenie zostało wysłane.");
      setForm(initialState);
    } catch {
      setIsSuccess(false);
      setMessage("Wystąpił błąd. Spróbuj ponownie za chwilę.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-6 grid gap-3.5 sm:mt-7 sm:grid-cols-2" onSubmit={onSubmit}>
      <input
        className="rounded-xl border border-white/30 bg-white/10 px-4 py-3.5 text-base placeholder:text-white/70 focus:border-white focus:outline-none sm:text-sm"
        type="text"
        placeholder="Imię i nazwisko"
        value={form.fullName}
        onChange={(event) => onFieldChange("fullName", event.target.value)}
      />
      <input
        className="rounded-xl border border-white/30 bg-white/10 px-4 py-3.5 text-base placeholder:text-white/70 focus:border-white focus:outline-none sm:text-sm"
        type="email"
        placeholder="Adres e-mail"
        value={form.email}
        onChange={(event) => onFieldChange("email", event.target.value)}
      />
      <input
        className="rounded-xl border border-white/30 bg-white/10 px-4 py-3.5 text-base placeholder:text-white/70 focus:border-white focus:outline-none sm:text-sm"
        type="tel"
        placeholder="Numer telefonu"
        value={form.phone}
        onChange={(event) => onFieldChange("phone", event.target.value)}
      />
      <input
        className="rounded-xl border border-white/30 bg-white/10 px-4 py-3.5 text-base placeholder:text-white/70 focus:border-white focus:outline-none sm:text-sm"
        type="text"
        placeholder="Miasto"
        value={form.city}
        onChange={(event) => onFieldChange("city", event.target.value)}
      />
      <textarea
        className="rounded-xl border border-white/30 bg-white/10 px-4 py-3.5 text-base placeholder:text-white/70 focus:border-white focus:outline-none sm:col-span-2 sm:text-sm"
        rows={3}
        placeholder="Dlaczego chcesz do nas dołączyć? (opcjonalnie)"
        value={form.motivation}
        onChange={(event) => onFieldChange("motivation", event.target.value)}
      />
      <input
        className="hidden"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(event) => onFieldChange("company", event.target.value)}
      />

      <label className="sm:col-span-2 flex items-start gap-2 text-sm leading-relaxed text-white/85 sm:text-xs">
        <input
          className="mt-1"
          type="checkbox"
          checked={form.consent}
          onChange={(event) => onFieldChange("consent", event.target.checked)}
        />
        Wyrażam zgodę na kontakt w sprawie członkostwa i przetwarzanie danych w
        tym celu.
      </label>

      {(errors.fullName || errors.email || errors.city || errors.consent) && (
        <p className="sm:col-span-2 text-sm text-red-200 sm:text-xs">
          {errors.fullName ?? errors.email ?? errors.city ?? errors.consent}
        </p>
      )}

      {message && (
        <p
          className={`sm:col-span-2 text-sm ${
            isSuccess ? "text-green-100" : "text-red-200"
          }`}
        >
          {message}
        </p>
      )}

      <button
        className="rounded-xl bg-white px-4 py-3.5 text-base font-semibold text-primary-700 transition hover:bg-slate-100 sm:col-span-2 sm:text-sm disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
      </button>
    </form>
  );
}
