import React, { useState } from 'react';
import { subjectAPI } from '../api/api';

const departments = [
    'Science',
    'Engineering',
    'Arts',
    'Commerce',
    'Humanities'
];

const SubjectCreate = () => {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        department: '',
        credits: 1
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Subject Name is required';
        }

        if (!formData.code.trim()) {
            newErrors.code = 'Subject Code is required';
        } else if (!/^[A-Z]{3,4}\d{3}$/.test(formData.code)) {
            newErrors.code = 'Subject Code must be in format like MATH101';
        }

        if (!formData.department) {
            newErrors.department = 'Department is required';
        }

        if (!formData.credits || formData.credits < 1 || formData.credits > 6) {
            newErrors.credits = 'Credits must be between 1 and 6';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: name === 'credits' ? parseInt(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await subjectAPI.create(formData);
                setSuccessMessage('Subject created successfully!');

                // Reset form
                setFormData({
                    name: '',
                    code: '',
                    department: '',
                    credits: 1
                });
                setErrors({});
            } catch (error) {
                setErrors({ submit: 'Failed to create subject. Please try again.' });
            }
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            code: '',
            department: '',
            credits: 1
        });
        setErrors({});
        setSuccessMessage('');
    };

    return (
        <div className="container mx-auto p-6 max-w-md">
            <h1 className="text-3xl font-bold mb-6">Create New Subject</h1>

            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2">Subject Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="code" className="block mb-2">Subject Code</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded ${errors.code ? 'border-red-500' : ''}`}
                        placeholder="e.g., MATH101"
                    />
                    {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code}</p>}
                </div>

                <div>
                    <label htmlFor="department" className="block mb-2">Department</label>
                    <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded ${errors.department ? 'border-red-500' : ''}`}
                    >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                    {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>

                <div>
                    <label htmlFor="credits" className="block mb-2">Credits</label>
                    <input
                        type="number"
                        id="credits"
                        name="credits"
                        min="1"
                        max="6"
                        value={formData.credits}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded ${errors.credits ? 'border-red-500' : ''}`}
                    />
                    {errors.credits && <p className="text-red-500 text-sm mt-1">{errors.credits}</p>}
                </div>

                {errors.submit && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {errors.submit}
                    </div>
                )}

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Create Subject
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubjectCreate;