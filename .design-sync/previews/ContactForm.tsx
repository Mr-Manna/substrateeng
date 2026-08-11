import { ContactForm } from 'substrate';

// ContactForm takes no props and owns all of its own state. It is the widest
// single view of Substrate's form language: labels, inputs, selects, textarea
// with counter, checkboxes, and the primary submit button.
//
// The success and error states are only reachable by POSTing to /api/contact, so
// they are not rendered here — see .design-sync/NOTES.md.

/** The full inquiry form as it appears on /contact. */
export const Default = () => (
  <div className="bg-paper px-8 py-10 text-ink">
    <div className="mx-auto max-w-3xl">
      <p className="kicker text-accent">Start a conversation</p>
      <h2 className="display mt-3 text-3xl">Tell us about your systems</h2>
      <p className="mt-4 max-w-xl text-ink-2">
        Share the shape of the problem and an engineer will follow up within two working days.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  </div>
);
