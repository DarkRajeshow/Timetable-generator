# Daily College Timetable Generator Application

## Overview

The **Daily College Timetable Generator Application** was a web-based platform designed to automate the generation of weekly timetables for colleges. This application aimed to simplify the process of creating and managing class schedules, allowing administrators to define subjects, assign teachers, and manage class schedules with minimal manual effort. The application provided personalized accounts for teachers and students, enabling them to view and download their schedules easily.

## Features

### User Roles

1. **Administrator**
   - Had full control over timetable creation and management.
   - Permissions included creating/editing timetables, assigning teachers, modifying time slots, managing user accounts, and publishing timetables.

2. **Teacher**
   - Was responsible for teaching assigned subjects.
   - Could create/edit their own timetable, view their individual timetable, and download it in PDF or image format.

3. **Student**
   - Was enrolled in various subjects.
   - Could view their timetable based on class or batch and download it in PDF or image format.

### Core Features

- **User  Authentication & Authorization**: Provided secure login for all user roles with role-based access to features.
- **Timetable Management**: Offered flexible time slots, with a total of 7 hours per day, including breaks.
- **PDF/Image Export**: Allowed users to download the final timetable in a tabular format as a PDF or image.

### Database Design

The application utilized a structured database design with the following collections:

- **Users Collection**: Stored user information, including role, email, password, and associated class/department.
- **MainTimetable Collection**: Managed timetable entries, linking classes, subjects, teachers, and classrooms.
- **DayTimeTable Collection**: Managed day timetable entries, linking classes, subjects, and teachers.
- **TimeSlot Collection**: Created time slot entries, linking subjects and teachers.
- **Subjects Collection**: Contained subject details, including unique identifiers and names.
- **Classroom Collection**: Managed classroom information and associations with classes and departments.
- **Time Slot Collection**: Defined time slots, including start and end times, and break indicators.

### Functional Details

- **User  Authentication**: Provided secure login for all users with role-based access.
- **Timetable Creation**: Allowed administrators to create and manage timetables, while teachers could view their assigned schedules.
- **Timetable Download**: Enabled all users to download the final timetable in PDF or image format.
- **Time Slot Flexibility**: Allowed administrators to modify time slots and add breaks as needed.

## Technical Details

- **Frontend**: Built with React.js and styled using Tailwind CSS for a modern, responsive design.
- **Backend**: Node.js and Express.js handled server-side logic and user requests.
- **Database**: MongoDB was used to store user accounts, subjects, timetables, and other relevant data.
- **Authentication**: JWT was implemented for secure user login and registration.
- **PDF/Image Generation**: Libraries like `jspdf` and `html2canvas` were used to convert timetables into downloadable formats.

## Non-Functional Details

- **Performance**: The system handled multiple concurrent users without delays.
- **Scalability**: The application was scalable to accommodate new features and an increasing number of users and classes.
- **Usability**: The UI/UX was clean, intuitive, and user-friendly for all user roles.

## Final Output

The final timetable was presented in downloadable formats (PDF) and adhered to a specific tabular format as shown in the provided design.