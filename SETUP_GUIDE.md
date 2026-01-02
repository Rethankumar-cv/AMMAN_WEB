# AMMAN EARTH MOVERS - Quick Setup Guide

## ✅ What's Already Done

1. ✅ Frontend website is complete and running
2. ✅ Supabase account created
3. ✅ Backend folder structure created
4. ✅ Environment variables configured
5. ✅ API integration code ready

## 🚀 Final Steps (Do This Now)

### Step 1: Create Database Tables (5 minutes)

1. **Open Supabase SQL Editor:**
   - Go to: https://app.supabase.com/project/fdreqrbrqrxidygyuqc/sql/new

2. **Run the Database Schema:**
   - Open file: `BACKEND/database/schema.sql`
   - Copy ALL the SQL code
   - Paste it into Supabase SQL Editor
   - Click the green "RUN" button

3. **Verify Tables Created:**
   - Go to: https://app.supabase.com/project/fdreqrbrqrxidygyuqc/editor
   - You should see 3 tables: `bookings`, `contacts`, `services`

### Step 2: Restart Dev Server (1 minute)

```bash
# Stop current server (Ctrl+C in terminal)
# Then restart:
cd "d:/AMMAN WEB/amman-frontend"
npm run dev
```

### Step 3: Test the Integration (2 minutes)

1. Open: http://localhost:5173/book
2. Fill out the booking form with test data
3. Click "Submit Booking"
4. Check Supabase Dashboard:
   - Go to: https://app.supabase.com/project/fdreqrbrqrxidygyuqc/editor
   - Click on `bookings` table
   - Your test booking should appear there!

## 🎉 You're Done!

Your website is now fully functional with backend:
- ✅ Bookings save to database
- ✅ Data is secure (Row Level Security enabled)
- ✅ Ready for email notifications
- ✅ Ready for admin panel

## 📂 Project Structure

```
d:/AMMAN WEB/
├── amman-frontend/          # React website
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # All pages
│   │   └── utils/
│   │       └── api.js       # Supabase integration ✅
│   └── .env                 # Environment variables ✅
│
└── BACKEND/                 # Backend resources
    ├── config/
    │   └── supabase.env     # Supabase credentials
    ├── database/
    │   └── schema.sql       # Database schema
    └── README.md            # Backend docs
```

## 🔧 Need Help?

**Database Issues:**
- Check Supabase Dashboard Logs
- Verify RLS policies are enabled

**Form Not Submitting:**
- Check browser console for errors
- Verify .env file has correct credentials
- Ensure dev server was restarted

**Next Steps:**
1. Set up email notifications (optional)
2. Create admin dashboard (optional)
3. Deploy to production
