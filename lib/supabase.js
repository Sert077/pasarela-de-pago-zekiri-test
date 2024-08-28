import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://egonrqmjamzubuuycbrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnb25ycW1qYW16dWJ1dXljYnJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MzM0NjksImV4cCI6MjA0MDMwOTQ2OX0.E9K6h1MIney0fBRIkewdMM0K_o1fq9B9ImQ7cTrSo-Y'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
