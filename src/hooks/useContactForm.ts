import { useState } from 'react';
import { ContactForm } from '../types';

interface UseContactFormResult {
  form: ContactForm;
  errors: Partial<ContactForm>;
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: (field: keyof ContactForm, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const useContactForm = (): UseContactFormResult => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: keyof ContactForm, value: string): string | undefined => {
    switch (field) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : undefined;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : undefined;
      
      case 'phone':
        const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return value && !phoneRegex.test(value) ? 'Phone format: 123-456-7890' : undefined;
      
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : undefined;
      
      default:
        return undefined;
    }
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    
    Object.keys(form).forEach(field => {
      const fieldKey = field as keyof ContactForm;
      const error = validateField(fieldKey, form[fieldKey]);
      if (error) {
        newErrors[fieldKey] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValid = form.name.trim().length >= 2 && 
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
                  form.message.trim().length >= 10 &&
                  (!form.phone || /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(form.phone));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      alert('Thank you for your message! I\'ll get back to you soon.');
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors,
    isValid,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};