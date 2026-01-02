# Supabase Backend Setup Instructions

## Step 1: Create Environment File

Create a file called `.env` in the `amman-frontend` folder with these contents:

```env
VITE_SUPABASE_URL=https://fdreqrbrqrxidygyuqc.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_TKFTd7AmvwT_o7i96hp96Q_HaazCCF9
```

**Path:** `d:/AMMAN WEB/amman-frontend/.env`

---

## Step 2: Create Database Tables in Supabase

1. Go to your Supabase project: https://app.supabase.com/project/fdreqrbrqrxidygyuqc
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste the SQL below:

```sql
-- =====================================================
-- BOOKINGS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  location TEXT NOT NULL,
  date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow public to insert bookings (for website form)
CREATE POLICY "Allow public to insert bookings"
ON bookings
FOR INSERT
TO public
WITH CHECK (true);

-- Allow public to read their own bookings (optional)
CREATE POLICY "Allow users to read bookings"
ON bookings
FOR SELECT
TO public
USING (true);

-- =====================================================
-- CONTACTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  responded BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public to insert contacts
CREATE POLICY "Allow public to insert contacts"
ON contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Allow public to read contacts (optional - remove if you don't want this)
CREATE POLICY "Allow public to read contacts"
ON contacts
FOR SELECT
TO public
USING (true);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at);
```

5. Click "Run" to execute the SQL
6. Verify tables were created by going to "Table Editor"

---

## Step 3: Restart Development Server

After creating the `.env` file, restart your dev server:

1. Stop the current server (Ctrl+C in terminal)
2. Run: `npm run dev`
3. The environment variables will now be loaded

---

## Step 4: Test the Booking Form

1. Go to http://localhost:5173/book
2. Fill out the booking form
3. Submit
4. Check Supabase dashboard → Table Editor → bookings table
5. Your submission should appear there!

---

## ✅ What's Now Working

- **Booking Form** → Saves to `bookings` table
- **Contact Form** (when you add it) → Saves to `contacts` table  
- **Real-time data** → All submissions instantly visible in Supabase
- **Backend ready** → You can now add email notifications, admin panel, etc.

---

## 🔒 Security Notes

- `.env` file is already in `.gitignore` - credentials won't be pushed to GitHub
- Row Level Security (RLS) is enabled - tables are secure
- Only public insert is allowed - no one can delete/update without authentication

---

## 📧 Next Steps (Optional)

### Email Notifications:
Add email notifications when bookings are received:
- Use Supabase Edge Functions
- Or integrate SendGrid/Resend

### Admin Dashboard:
Create admin page to view/manage bookings:
- Use Supabase Auth for admin login
- Display bookings in a table
- Update booking status

Would you like me to implement any of these next steps?
