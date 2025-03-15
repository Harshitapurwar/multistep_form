# Multi-Step Form (JavaScript)

## Project Overview
This is a **3-step dynamic multi-step form** built with **JavaScript**, HTML, and CSS. It includes navigation between steps, validation, a progress indicator, and a summary view before submission.

## Features
✅ **Step-based navigation** with Back and Next buttons  
✅ **Form validation** for required fields and correct input formats  
✅ **Progress bar** that updates dynamically as users proceed  
✅ **Summary page** before final submission  
✅ **Smooth animations** for transitions  
✅ **JavaScript for state management**  

## Folder Structure
```
/multi-step-form
│── public/
│   ├── index.html  # Main entry file
│   ├── styles.css  # Global styles
│── src/
│   ├── components/
│   │   ├── Step1.js
│   │   ├── Step2.js
│   │   ├── Step3.js
│   │   ├── Progress.js
│   ├── utils/
│   │   ├── validation.js
│   ├── app.js   # Main entry script
│── README.md   # Setup and usage instructions
│── ONE-PAGER.md # Design decisions and scalability improvements
```

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/multi-step-form.git
   cd multi-step-form
   ```

2. **Run the Project**
   Open `index.html` in a browser to start the form.

## How It Works
1. **Step 1**: Basic Details (Name, Date of Birth, Gender)
2. **Step 2**: Contact Information (Email, Phone, Address)
3. **Step 3**: Summary & Confirmation (Review and Submit)

## Technologies Used
- **JavaScript** for interactivity
- **CSS Animations** for smooth step transitions
- **Local State Management** for storing form data

---
