# BACKEND FOLDER

This folder contains all backend-related files for AMMAN EARTH MOVERS website.

## 📂 Folder Structure

```
BACKEND/
├── config/           # Configuration files
│   └── supabase.env  # Supabase credentials
├── database/         # Database schemas and migrations
│   └── schema.sql    # Main database schema
└── README.md         # This file
```

## 🔧 Setup Instructions

### 1. Create Supabase Database Tables

1. Go to Supabase SQL Editor: https://app.supabase.com/project/fdreqrbrqrxidygyuqc/sql/new
2. Open `database/schema.sql`
3. Copy all SQL code
4. Paste into Supabase SQL Editor
5. Click "Run" to execute

This will create:
- `bookings` table - stores customer booking requests
- `contacts` table - stores contact form submissions
- `services` table - stores available vehicles/services (optional)

### 2. Configure Frontend

Copy these environment variables to `amman-frontend/.env`:

```env
VITE_SUPABASE_URL=https://fdreqrbrqrxidygyuqc.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_TKFTd7AmvwT_o7i96hp96Q_HaazCCF9
```

### 3. Restart Development Server

```bash
cd amman-frontend
npm run dev
```

## 📊 Database Tables

### bookings
Stores all customer booking requests from the website.

**Columns:**
- `id` (UUID) - Primary key
- `name` (TEXT) - Customer name
- `phone` (TEXT) - Customer phone
- `service` (TEXT) - Selected service
- `location` (TEXT) - Project location
- `date` (DATE) - Required date
- `message` (TEXT) - Additional notes
- `status` (TEXT) - pending/confirmed/completed/cancelled
- `created_at` (TIMESTAMP) - When booking was created
- `updated_at` (TIMESTAMP) - Last update time

### contacts
Stores general contact form submissions.

**Columns:**
- `id` (UUID) - Primary key
- `name` (TEXT) - Contact name
- `email` (TEXT) - Contact email
- `phone` (TEXT) - Contact phone (optional)
- `message` (TEXT) - Message content
- `responded` (BOOLEAN) - Whether inquiry was responded to
- `created_at` (TIMESTAMP) - When message was sent

### services (Optional)
Dynamic service management.

**Columns:**
- `id` (UUID) - Primary key
- `name` (TEXT) - Service/vehicle name
- `category` (TEXT) - Service category
- `description` (TEXT) - Service description
- `image_url` (TEXT) - Image URL
- `price_per_day` (DECIMAL) - Daily rental price
- `available` (BOOLEAN) - Currently available
- `popular` (BOOLEAN) - Show popular badge
- `created_at` (TIMESTAMP) - Created date

## 🔒 Security

- Row Level Security (RLS) is enabled on all tables
- Public can INSERT and SELECT (read-only for display)
- Admin operations require authentication (future feature)

## 📧 Future Enhancements

### Email Notifications
Use Supabase Edge Functions or integrate:
- SendGrid
- Resend
- AWS SES

### Admin Dashboard
Create admin interface to:
- View all bookings
- Update booking status
- Manage services
- View analytics

### WhatsApp Integration
- Send booking confirmations via WhatsApp
- Real-time notifications

## 🚀 API Usage

All API calls are handled in `amman-frontend/src/utils/api.js`:

```javascript
import { submitBooking } from './utils/api';

// Submit booking
const result = await submitBooking({
  name: "John Doe",
  phone: "9876543210",
  service: "Excavator 210",
  location: "Coimbatore",
  date: "2026-01-10",
  message: "Need for foundation work"
});
```

## 📞 Support

For backend issues:
- Supabase Dashboard: https://app.supabase.com/project/fdreqrbrqrxidygyuqc
- Check logs in Dashboard > Logs
- Review policies in Table Editor
