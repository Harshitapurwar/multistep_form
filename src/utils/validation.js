function validateStep1(formData) {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.dob) errors.dob = "Date of Birth is required.";
    return errors;
}

function validateStep2(formData) {
    const errors = {};
    if (!formData.email) errors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Invalid email format.";

    if (!formData.phone) errors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone must be 10 digits.";

    if (!formData.address) errors.address = "Address is required.";
    return errors;
}

export { validateStep1, validateStep2 };
