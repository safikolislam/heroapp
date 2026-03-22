Hero Apps: HeroApp is a responsive  web application designed to help users discover,search and manage their favourite application.Built with a focus on performance and seamless user experience, it features a live search engine, data visualization for app reviews, and a robust installation management system powered by local storage.


Technologies Used

Frontend: React.js (or Next.js)

Styling: Tailwind CSS / Styled Components (Responsive Design)

State Management: React Hooks (useState, useEffect)

Data Visualization: Recharts

Routing: React Router DOM

Notifications: React-Toastify / Hot Toast

Storage: Browser LocalStorage

Icons: Lucide-React / FontAwesome

 Features
1. Dynamic Home Page
Interactive Banner: Direct links to Global App Store and Play Store.

State Overview: Statistical cards showing platform growth.

Top Apps: A curated grid of the top 8 performing applications with quick navigation.

2. Advanced App Catalog
Live Search: Case-insensitive search functionality that filters the app list in real-time.

Sorting Engine: Sort apps by download volume (High-to-Low or Low-to-High).

Empty States: Helpful "No App Found" messages when search results are empty.

3. Deep-Dive App Details
Data Visualization: Custom review charts built with Recharts to visualize star ratings.

Smart Installation: An "Install" logic that persists data to LocalStorage and prevents duplicate installs.

Success Feedback: Instant toast notifications upon successful installation.

4. My Installations (Personal Dashboard)
Management: View all apps you have installed.

Uninstall Logic: Remove apps from your local library with a single click, synced instantly with LocalStorage.

5. Performance & UX
Fully Responsive: Optimized for Mobile, Tablet, and Desktop.

Loading States: Smooth animations during navigation and search operations.

Error Handling: Custom 404 page and "Not Found" handling for invalid app IDs.