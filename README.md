# Daily College Timetable Generator Application

## Overview

The **Daily College Timetable Generator Application** is a web-based platform designed to automate the generation of weekly timetables for colleges. This application aims to simplify the process of creating and managing class schedules, allowing administrators to define subjects, assign teachers, and manage class schedules with minimal manual effort. The application provides personalized accounts for teachers and students, enabling them to view and download their schedules easily.

## Features

### User Roles

1. **Administrator**
   - Full control over timetable creation and management.
   - Permissions include creating/editing timetables, assigning teachers, modifying time slots, managing user accounts, and publishing timetables.

2. **Teacher**
   - Responsible for teaching assigned subjects.
   - Can create/edit their own timetable, view their individual timetable, and download it in PDF or image format.

3. **Student**
   - Enrolled in various subjects.
   - Can view their timetable based on class or batch and download it in PDF or image format.

### Core Features

- **User  Authentication & Authorization**: Secure login for all user roles with role-based access to features.
- **Timetable Management**: Flexible time slots, with a total of 7 hours per day, including breaks.
- **PDF/Image Export**: Users can download the final timetable in a tabular format as a PDF or image.

### Database Design

The application utilizes a structured database design with the following collections:

- **Users Collection**: Stores user information, including role, email, password, and associated class/department.
- **Timetable Collection**: Manages timetable entries, linking classes, subjects, teachers, and classrooms.
- **Subjects Collection**: Contains subject details, including unique identifiers and names.
- **Classroom Collection**: Manages classroom information and associations with classes and departments.
- **Time Slot Collection**: Defines time slots, including start and end times, and break indicators.

### Functional Requirements

- **User  Authentication**: Secure login for all users with role-based access.
- **Timetable Creation**: Administrators can create and manage timetables, while teachers can view their assigned schedules.
- **Timetable Download**: All users can download the final timetable in PDF or image format.
- **Time Slot Flexibility**: Administrators can modify time slots and add breaks as needed.

## Technical Requirements

- **Frontend**: Built with React.js and styled using Tailwind CSS for a modern, responsive design.
- **Backend**: Node.js and Express.js handle server-side logic and user requests.
- **Database**: MongoDB is used to store user accounts, subjects, timetables, and other relevant data.
- **Authentication**: JWT is implemented for secure user login and registration.
- **PDF/Image Generation**: Libraries like `jspdf` or `html2canvas` are used to convert timetables into downloadable formats.

## Non-Functional Requirements

- **Performance**: The system should handle multiple concurrent users without delays.
- **Scalability**: The application should be scalable to accommodate new features and an increasing number of users and classes.
- **Usability**: The UI/UX should be clean, intuitive, and user-friendly for all user roles.

## Final Output

The final timetable will be presented in downloadable formats (PDF or Image) and will adhere to a specific tabular format as shown in the provided design.

---

This README provides a comprehensive overview of the Daily College Timetable Generator Application, detailing its objectives, features, technical requirements, and expected outputs. For further information or contributions, please refer to the project's documentation or contact the development team.