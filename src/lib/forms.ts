// Single module wrapping whichever static-friendly form service is
// configured via `site.formEndpoint` (Web3Forms, Formspree — both accept a
// POSTed FormData body and multipart file uploads at a plain URL). Swapping
// providers means changing `site.formEndpoint`, not this function or any
// page that calls it.
import { site } from "@/config/site";

export interface FormSubmitResult {
  ok: boolean;
  message: string;
}

export async function submitForm(formData: FormData): Promise<FormSubmitResult> {
  if (!site.formEndpoint) {
    return {
      ok: false,
      message:
        "This form isn't connected to a submission service yet. Please email us directly instead.",
    };
  }

  try {
    const response = await fetch(site.formEndpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return { ok: false, message: "The submission didn't go through. Please try again or email us directly." };
    }

    return { ok: true, message: "Thanks — we've got it and will be in touch." };
  } catch {
    return { ok: false, message: "The submission didn't go through. Please check your connection and try again." };
  }
}
