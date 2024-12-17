# Daily College Timetable Generator Application

## Overview

The **Daily College Timetable Generator Application** is a web-based platform designed to automate the generation of weekly timetables for colleges. This application simplifies the process of creating and managing class schedules, allowing administrators to define subjects, assign teachers, and manage class schedules with minimal manual effort. The application provides personalized accounts for teachers and students, enabling them to view and download their schedules easily.

## Features

### User Roles

1. **Administrator**
   - Has full control over timetable creation and management.
   - Permissions include creating/editing timetables, assigning teachers, modifying time slots, managing user accounts, and publishing timetables.

2. **Teacher**
   - Is responsible for teaching assigned subjects.
   - Can create/edit their own timetable, view their individual timetable, and download it in PDF or image format.

3. **Student**
   - Is enrolled in various subjects.
   - Can view their timetable based on class or batch and download it in PDF or image format.

### Core Features

- **User  Authentication & Authorization**: Provides secure login for all user roles with role-based access to features.
- **Timetable Management**: Offers flexible time slots, with a total of 7 hours per day, including breaks.
- **PDF/Image Export**: Allows users to download the final timetable in a tabular format as a PDF or image.

### Database Design

The application utilizes a structured database design with the following collections:

- **Users Collection**: Stores user information, including role, email, password, and associated class/department.
- **MainTimetable Collection**: Manages timetable entries, linking classes, subjects, teachers, and classrooms.
- **DayTimeTable Collection**: Manages day timetable entries, linking classes, subjects, and teachers.
- **TimeSlot Collection**: Creates time slot entries, linking subjects and teachers.
- **Subjects Collection**: Contains subject details, including unique identifiers and names.
- **Classroom Collection**: Manages classroom information and associations with classes and departments.
- **Time Slot Collection**: Defines time slots, including start and end times, and break indicators.

### Functional Details

- **User  Authentication**: Provides secure login for all users with role-based access.
- **Timetable Creation**: Allows administrators to create and manage timetables, while teachers can view their assigned schedules.
- **Timetable Download**: Enables all users to download the final timetable in PDF or image format.
- **Time Slot Flexibility**: Allows administrators to modify time slots and add breaks as needed.

## Technical Details

- **Frontend**: Built with React.js and styled using Tailwind CSS for a modern, responsive design.
- **Backend**: Node.js and Express.js handle server-side logic and user requests.
- **Database**: MongoDB is used to store user accounts, subjects, timetables, and other relevant data.
- **Authentication**: JWT is implemented for secure user login and registration.
- **PDF/Image Generation**: Libraries like `jspdf` and `html2canvas` are used to convert timetables into downloadable formats.

## Non-Functional Details

- **Performance**: The system handles multiple concurrent users without delays.
- **Scalability**: The application is scalable to accommodate new features and an increasing number of users and classes.
- **Usability**: The UI/UX is clean, intuitive, and user-friendly for all user roles.

## Final Output

The final timetable is presented in downloadable formats (PDF) and adheres to a specific tabular format as shown in the provided design.