import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Submit a booking to Supabase
 * @param {Object} bookingData - Booking form data
 * @returns {Promise} Response with success/error
 */
export const submitBooking = async (bookingData) => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .insert([
                {
                    name: bookingData.name,
                    phone: bookingData.phone,
                    service: bookingData.service,
                    location: bookingData.location,
                    date: bookingData.date,
                    message: bookingData.message || '',
                    status: 'pending',
                }
            ])
            .select();

        if (error) throw error;

        return {
            success: true,
            message: 'Booking submitted successfully! We will contact you soon.',
            data: data,
        };
    } catch (error) {
        console.error('Booking submission error:', error);
        throw new Error(error.message || 'Failed to submit booking');
    }
};

/**
 * Submit a contact form message to Supabase
 * @param {Object} contactData - Contact form data
 * @returns {Promise} Response with success/error
 */
export const submitContact = async (contactData) => {
    try {
        const { data, error } = await supabase
            .from('contacts')
            .insert([
                {
                    name: contactData.name,
                    email: contactData.email,
                    phone: contactData.phone,
                    message: contactData.message,
                    responded: false,
                }
            ])
            .select();

        if (error) throw error;

        return {
            success: true,
            message: 'Message sent successfully! We will get back to you soon.',
            data: data,
        };
    } catch (error) {
        console.error('Contact submission error:', error);
        throw new Error(error.message || 'Failed to send message');
    }
};

/**
 * Get all bookings (for admin use)
 * @returns {Promise} Array of bookings
 */
export const getAllBookings = async () => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw new Error(error.message || 'Failed to fetch bookings');
    }
};

/**
 * Update booking status
 * @param {string} bookingId - Booking ID
 * @param {string} status - New status (pending, confirmed, completed, cancelled)
 * @returns {Promise} Updated booking
 */
export const updateBookingStatus = async (bookingId, status) => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .update({ status })
            .eq('id', bookingId)
            .select();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error updating booking:', error);
        throw new Error(error.message || 'Failed to update booking');
    }
};
