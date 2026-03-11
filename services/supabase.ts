//ตั้งค่าการเชื่อมต่อsupabase
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://frvohuwjisqbppsefsro.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydm9odXdqaXNxYnBwc2Vmc3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxODQ0NjUsImV4cCI6MjA4NTc2MDQ2NX0.cSmniU8YdN8-CBecf2hbmaE7qX8DWpiVFxkuCQyBwWo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
