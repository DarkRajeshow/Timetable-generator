import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from '../ui/Card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from '../ui/Dialog';

const Submission = () => {
    const [subjectSummary, setSubjectSummary] = useState([]);
    const [teacherSummary, setTeacherSummary] = useState([]);
    const [unallocatedSlots, setUnallocatedSlots] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
        const fetchTimetableSummary = async () => {
            try {
                // Mock data - in a real app, this would be an API call
                const mockSubjectSummary = [
                    { subject: 'Math', totalSlots: 5, allocatedSlots: 5 },
                    { subject: 'Science', totalSlots: 6, allocatedSlots: 4 },
                    { subject: 'English', totalSlots: 5, allocatedSlots: 5 }
                ];

                const mockTeacherSummary = [
                    { teacher: 'Mr. Smith', max: 3, allocatedSlots: 3 },
                    { teacher: 'Ms. Johnson', max: 2, allocatedSlots: 2 },
                    { teacher: 'Mr. Brown', max: 3, allocatedSlots: 3 }
                ];

                const mockUnallocatedSlots = [
                    { day: 'Wednesday', timeSlot: '2:15 PM - 3:15 PM' }
                ];

                setSubjectSummary(mockSubjectSummary);
                setTeacherSummary(mockTeacherSummary);
                setUnallocatedSlots(mockUnallocatedSlots);
            } catch (error) {
                console.error('Error fetching timetable summary', error);
            }
        };

        fetchTimetableSummary();
    }, []);

    const handleSubmitTimetable = async () => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/timetable/submit', {
                subjectSummary,
                teacherSummary
            });

            setSubmissionStatus({
                success: true,
                message: 'Timetable successfully submitted and locked!'
            });
        } catch (error) {
            setSubmissionStatus({
                success: false,
                message: 'Failed to submit timetable. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Timetable Submission Confirmation</CardTitle>
            </CardHeader>
            <CardContent>
                {/* Subject Summary */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Subject Allocation Summary</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {subjectSummary.map((summary, index) => (
                            <Card key={index} className={
                                summary.totalSlots !== summary.allocatedSlots
                                    ? 'border-red-500'
                                    : 'border-green-500'
                            }>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold">{summary.subject}</h3>
                                    <p>Total Slots: {summary.totalSlots}</p>
                                    <p>Allocated Slots: {summary.allocatedSlots}</p>
                                    {summary.totalSlots !== summary.allocatedSlots && (
                                        <p className="text-red-500">Incomplete Allocation</p>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Teacher Summary */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Teacher Allocation Summary</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {teacherSummary.map((summary, index) => (
                            <Card key={index} className={
                                summary.max !== summary.allocatedSlots
                                    ? 'border-yellow-500'
                                    : 'border-green-500'
                            }>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold">{summary.teacher}</h3>
                                    <p>Max Daily Slots: {summary.max}</p>
                                    <p>Allocated Slots: {summary.allocatedSlots}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Unallocated Slots */}
                {unallocatedSlots.length > 0 && (
                    <div className="mb-6 bg-yellow-50 p-4 rounded">
                        <h2 className="text-xl font-semibold text-yellow-700 mb-4">
                            Unallocated Slots
                        </h2>
                        {unallocatedSlots.map((slot, index) => (
                            <p key={index} className="text-yellow-800">
                                {slot.day} - {slot.timeSlot}
                            </p>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <button
                    onClick={handleSubmitTimetable}
                    disabled={
                        isSubmitting ||
                        subjectSummary.some(s => s.totalSlots !== s.allocatedSlots) ||
                        unallocatedSlots.length > 0
                    }
                    className="w-full"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit and Lock Timetable'}
                </button>
            </CardFooter>

            {/* Submission Status Dialog */}
            <Dialog
                open={!!submissionStatus}
                onOpenChange={() => setSubmissionStatus(null)}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {submissionStatus?.success
                                ? 'Timetable Submitted Successfully'
                                : 'Submission Failed'}
                        </DialogTitle>
                        <DialogDescription>
                            {submissionStatus?.message}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end">
                        <button onClick={() => setSubmissionStatus(null)}>
                            Close
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </Card>
    );
};

export default Submission;