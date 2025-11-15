// SignupForm.tsx
import { useState } from "react";
import React from "react";
// import React from "react"; // Uncomment if your setup requires it

function useForm(initialValues, validate, onSubmit) {
  // 1. Create state for form values and errors
  //   const [values, setValues] =useState(initialValues)
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>(
    {}
  );
//   const setFieldValue = <K extends keyof Values>(name: K, value: Values[K]) =>
//     setValues((prev) => ({ ...prev, [name]: value }));

  // 2. Create handleChange - updates the right field as the user types
  function setFieldValue<K extends keyof Values>(name: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const t = e.target as HTMLInputElement;
    const value = t.type === "checkbox" ? t.checked : t.value;
    setFieldValue(t.name as keyof Values, value as any);

    // 3. Create handleSubmit - prevents default, runs validation, and calls onSubmit if valid
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {e.preventDefault();
      // Run validation (if validate function is provided)
      const nextErrors = validate ? validate(values) : {};
      // Set errors if there are any
      setErrors(nextErrors);
      // If there are no errors, call onSubmit(values)
      if (Object.keys(nextErrors).length === 0 && onSubmit) {
        void onSubmit(values); // works for sync or async onSubmit
  }
}
    }

    // 4. Create resetForm - resets form to initial values
    function resetForm() {}

    // 5. Return everything needed by the component
    return { values, handleChange, handleSubmit, resetForm };
  }

  export default useForm;

  interface UseFormOptions {
    initialValues: FormValues;
    validate?: ValidateFn;
    onSubmit?: SubmitFn;
  }

  interface UseFormReturn {
    values: FormValues;
    errors: FormErrors;
    handleChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
  }

  function useForm({
    initialValues,
    validate,
    onSubmit,
  }: UseFormOptions): UseFormReturn {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
  }

  type FormValues = Record<string, any>;
  type FormErrors = Record<string, string>;

  type ValidateFn = (values: FormValues) => FormErrors;
  type SubmitFn = (values: FormValues) => void | Promise<void>;

//   const handleChange: UseFormReturn["handleChange"] = (e) => {
//     const { name, type } = e.target;
//     const value =
//       type === "checkbox"
//         ? (e.target as HTMLInputElement).checked
//         : (
//             e.target as
//               | HTMLInputElement
//               | HTMLTextAreaElement
//               | HTMLSelectElement
//           ).value;
//     setValues((prev) => ({ ...prev, [name]: value }));
//   };

  const handleSubmit: UseFormReturn["handleSubmit"] = (e) => {
    e.preventDefault();
    const nextErrors = validate ? validate(values) : {};
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0 && onSubmit) {
      void onSubmit(values);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, handleSubmit, resetForm };
}

export default function SignupForm() {
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm({
    initialValues: { name: "", email: "", password: "", agreeToTerms: false },
    validate: (v) => {
      const errs: Record<string, string> = {};
      if (!v.name.trim()) errs.name = "Name is required";
      if (!v.email.trim()) errs.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
        errs.email = "Enter a valid email";
      if (!v.password) errs.password = "Password is required";
      else if (v.password.length < 6) errs.password = "Min 6 characters";
      if (!v.agreeToTerms) errs.agreeToTerms = "You must agree to continue";
      return errs;
    },
    onSubmit: (v) => alert(`Submitted:\n${JSON.stringify(v, null, 2)}`),
  });

//   return (
//     <form onSubmit={handleSubmit} noValidate>
//       <div>
//         <label>
//           Name
//           <input
//             name="name"
//             value={values.name}
//             onChange={handleChange}
//             aria-invalid={!!errors.name}
//             aria-describedby="name-error"
//           />
//         </label>
//         {errors.name && <div id="name-error">{errors.name}</div>}
//       </div>

//       <div>
//         <label>
//           Email
//           <input
//             name="email"
//             type="email"
//             value={values.email}
//             onChange={handleChange}
//             aria-invalid={!!errors.email}
//             aria-describedby="email-error"
//           />
//         </label>
//         {errors.email && <div id="email-error">{errors.email}</div>}
//       </div>

//       <div>
//         <label>
//           Password
//           <input
//             name="password"
//             type="password"
//             value={values.password}
//             onChange={handleChange}
//             aria-invalid={!!errors.password}
//             aria-describedby="password-error"
//           />
//         </label>
//         {errors.password && <div id="password-error">{errors.password}</div>}
//       </div>

//       <div>
//         <label>
//           <input
//             name="agreeToTerms"
//             type="checkbox"
//             checked={values.agreeToTerms}
//             onChange={handleChange}
//             aria-invalid={!!errors.agreeToTerms}
//             aria-describedby="terms-error"
//           />
//           I agree to the Terms
//         </label>
//         {errors.agreeToTerms && (
//           <div id="terms-error">{errors.agreeToTerms}</div>
//         )}
//       </div>

//       <button type="submit">Create account</button>
//       <button type="button" onClick={resetForm}>
//         Reset
//       </button>
//     </form>
//   );
// }
