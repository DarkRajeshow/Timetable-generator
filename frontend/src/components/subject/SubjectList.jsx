import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '../../components/ui/dialog';
import { subjectAPI } from '../../utils/api';
import { toast } from 'sonner';


const SubjectList = () => {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const subjectData = await subjectAPI.getAll();

                if (subjectData.success) {
                    setSubjects(subjectData.subjects);
                }
                else{
                    toast.error("Error fetching subjects.")
                }
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch subjects');
                setLoading(false);
            }
        };

        fetchSubjects();
    }, []);

    const handleEdit = (subject) => {
        navigate('/subjects/edit', { state: { subject } });
    };

    const handleDeleteConfirm = (subject) => {
        setDeleteConfirmation(subject);
    };

    const confirmDelete = async () => {
        if (deleteConfirmation) {
            try {
                await subjectAPI.delete(deleteConfirmation.code);
                setSubjects(subjects.filter(s => s.code !== deleteConfirmation.code));
                setDeleteConfirmation(null);
            } catch (err) {
                setError('Failed to delete subject');
            }
        }
    };

    if (loading) {
        return <div className="p-4 text-center">Loading subjects...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Subject Management</h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Subject Name</th>
                            <th className="p-3 text-left">Code</th>
                            <th className="p-3 text-left">Department</th>
                            <th className="p-3 text-left">Credits</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((subject) => (
                            <tr key={subject.code} className="border-b hover:bg-gray-50">
                                <td className="p-3">{subject.name}</td>
                                <td className="p-3">{subject.code}</td>
                                <td className="p-3">{subject.department}</td>
                                <td className="p-3">{subject.credits}</td>
                                <td className="p-3 flex justify-center space-x-2">
                                    <button
                                        onClick={() => handleEdit(subject)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteConfirm(subject)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {deleteConfirmation && (
                <Dialog open={!!deleteConfirmation} onOpenChange={() => setDeleteConfirmation(null)}>
                    <DialogContent className="w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Confirm Delete</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to delete the subject "{deleteConfirmation.name}"?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <button variant="outline">Cancel</button>
                            </DialogClose>
                            <button
                                onClick={confirmDelete}
                                className="bg-red-500 text-white hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default SubjectList;