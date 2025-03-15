## Design Decisions
1. **JavaScript for Simplicity**  
   Using plain JavaScript ensures compatibility across all browsers without the need for transpilation.

2. **Component-Based Architecture**  
   The form is broken into reusable components (`Step1.js`, `Step2.js`, `Step3.js`) making it modular and scalable.

3. **Dynamic Progress Indicator**  
   The progress bar dynamically updates as users move through the steps, providing a clear visual cue.

4. **Validation & Error Handling**  
   - Real-time validation is implemented to prevent incorrect input.
   - A `validation.js` utility centralizes validation logic for reusability.

## Scalability & Production Improvements
✅ **Persist Data**: Store progress in `localStorage` to allow users to resume later.  
✅ **API Integration**: Send collected data to a backend API for processing.  
✅ **Styling Enhancements**: Improve UI with a design framework like Tailwind CSS.  
✅ **Accessibility**: Ensure keyboard navigation and screen-reader compatibility.

---

## Contribution
Feel free to open a pull request or raise issues to improve this project. 🚀

## License
MIT License
