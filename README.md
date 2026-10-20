Emergency Home Services (EHS) Auto-Dispatch System

About the Project

Emergency Home Services (EHS) is a frontend web application designed to help customers request emergency home services such as plumbing, electrical repairs, AC repair, and other household services.

The application allows customers to submit service requests, assigns available technicians based on service requirements, and provides a dashboard where technicians can manage requests and update their service status.

Features

Customer Features

- Customer registration and login.
- Browse available home services.
- View individual service details.
- Submit emergency service requests.
- Automatic technician assignment based on service type and availability.
- View personal service request history.
- Track service request status.
- Manage profile and account.

Technician Features

- Technician registration and login.
- Role-based dashboard.
- View assigned service requests.
- Access customer and service details.
- Update request status:
  - Technician on the way
  - In Progress
  - Completed

Other Features

- Role-based navigation.
- Form validation.
- Responsive user interface.
- LocalStorage for storing user and service request data.

Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- React Router
- React Icons
- HTML5
- LocalStorage

How It Works

1. Customers register or log in.
2. Customers select a home service.
3. They submit an emergency service request.
4. The application searches for an available technician matching the selected service.
5. The assigned request appears in the technician dashboard.
6. Technicians update the service status.
7. Customers can view their request information and status.

Installation and Setup

1. Clone the repository:
   
  https://github.com/simrankumari-coder/Emergency-Home-Services

2. Navigate to the project folder:
   
   cd EHS

3. Install dependencies:
   
   npm install

4. Start the development server:
   
   npm run dev

5. Open the local URL displayed in your terminal.

Project Limitations

This project is a frontend prototype.

- Data is stored using browser LocalStorage.
- Authentication is frontend-based.
- Technician assignment uses predefined technician data.
- Tracking displays stored request statuses; it does not provide real-time GPS tracking.
- There is no backend or database integration.

Learning Outcomes

Through this project, I practised:

- React component development.
- State management using useState.
- Form handling and validation.
- React Router navigation.
- Array methods such as filter(), find(), and map().
- Conditional rendering.
- LocalStorage data management.
- Role-based UI and dashboard functionality.

Author

Simran Kumari

Frontend Developer | BCA Student