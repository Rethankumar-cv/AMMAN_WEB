-- =====================================================
-- AMMAN EARTH MOVERS - Database Schema
-- Supabase PostgreSQL Database
-- =====================================================

-- =====================================================
-- 1. BOOKINGS TABLE
-- Stores all customer booking requests
-- =====================================================
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  location TEXT NOT NULL,
  date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert bookings
CREATE POLICY "Allow public to insert bookings"
ON bookings
FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow public to read all bookings
CREATE POLICY "Allow public to read bookings"
ON bookings
FOR SELECT
TO public
USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_phone ON bookings(phone);

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON bookings
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 2. CONTACTS TABLE
-- Stores general contact form submissions
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

-- Policy: Allow public to insert contacts
CREATE POLICY "Allow public to insert contacts"
ON contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow public to read contacts
CREATE POLICY "Allow public to read contacts"
ON contacts
FOR SELECT
TO public
USING (true);

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_responded ON contacts(responded);

-- =====================================================
-- 3. SERVICES TABLE (Optional - for dynamic services)
-- Stores available services/vehicles
-- =====================================================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  price_per_day DECIMAL(10, 2),
  available BOOLEAN DEFAULT TRUE,
  popular BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read services
CREATE POLICY "Allow public to read services"
ON services
FOR SELECT
TO public
USING (true);

-- Insert initial services data
INSERT INTO services (name, category, description, popular) VALUES
  ('Excavator 140', 'Excavation', 'Heavy-duty excavation for deep digging and trenching operations', false),
  ('Excavator 210', 'Excavation', 'Large-scale earthmoving projects with superior power and reach', true),
  ('Backhoe Loader', 'Loading', 'Versatile digging and loading operations for construction sites', false),
  ('Skid Steer Loader', 'Loading', 'Compact loader for tight spaces and material handling tasks', false),
  ('Dozer', 'Earthmoving', 'Powerful bulldozer for land clearing and heavy earthmoving', false),
  ('Soil Compactor', 'Compaction', 'Efficient soil compaction for stable foundation preparation', false),
  ('Mini Roller', 'Compaction', 'Compact roller for small areas and finishing work', false),
  ('Double Drum Roller', 'Compaction', 'Heavy-duty roller for road construction and asphalt compaction', false),
  ('Open Taurus', 'Transport', 'Reliable shifting vehicle for equipment transportation', false),
  ('Tractor', 'Utility', 'Multi-purpose tractor for various construction and agriculture tasks', false),
  ('Tipper', 'Transport', 'Large capacity tipper for material transportation and disposal', false)
ON CONFLICT (name) DO NOTHING;

-- =====================================================
-- 4. VERIFICATION QUERIES
-- Run these to verify tables were created successfully
-- =====================================================

-- List all tables
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Count records
-- SELECT 'bookings' as table_name, COUNT(*) as count FROM bookings
-- UNION ALL
-- SELECT 'contacts', COUNT(*) FROM contacts
-- UNION ALL
-- SELECT 'services', COUNT(*) FROM services;
