"use client"
import { saveContact } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";


saveContact
const Createform = () => {
    const [state, formAction] = useFormState(saveContact, null)
  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
            <label htmlFor="name" className="block text-sm fonnt-medium text-gray-900">Full Name</label>
            <input type="text" name="name" id="name" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="fullname" />
            <div id="name-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
        </div>

        <div className="mb-5">
            <label htmlFor="phone" className="block text-sm fonnt-medium text-gray-900">Phone Number</label>
            <input type="text" name="phone" id="phone" className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="phone number" />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
            <div id="message-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{state?.message}</p>
            </div>
        </div>
        <SubmitButton label="save"/>
      </form>
    </div>
  );
};

export default Createform;
