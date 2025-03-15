export default function Step2(nextStep, prevStep, formData, updateFormData) {
    const container = document.createElement("div");
    container.innerHTML = `
        <h2>Step 2: Contact Information</h2>
        <label>Email: <input type="email" id="email" value="${formData.email || ""}"></label>
        <label>Phone: <input type="tel" id="phone" value="${formData.phone || ""}"></label>
        <label>Address: <input type="text" id="address" value="${formData.address || ""}"></label>
        <button id="back">Back</button>
        <button id="next">Next</button>
    `;

    container.querySelector("#next").addEventListener("click", () => {
        updateFormData({
            email: container.querySelector("#email").value,
            phone: container.querySelector("#phone").value,
            address: container.querySelector("#address").value,
        });
        nextStep();
    });

    container.querySelector("#back").addEventListener("click", prevStep);

    return container;
}
