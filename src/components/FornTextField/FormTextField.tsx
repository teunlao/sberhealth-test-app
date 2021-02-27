import React from 'react';

interface FormInputProps {
  label: string
  type?: string
  errors: Record<string, string>
}

const FormTextField: React.FC<FormInputProps> = ({ label, type = 'text', errors }) => (
    <label htmlFor="email">
      <span>{label}</span>
      <input type={type} name="email" defaultValue="10" />
      {errors.email && <span>The email field is required</span>}
    </label>
  );

export default FormTextField
