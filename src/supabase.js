import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qcrvjbenjkmcyxbundli.supabase.co";
const supabaseKey = "sb_publishable_DMZsnMduowjW0FYOTKeewA_G4HBTr4N";

export const supabase = createClient(supabaseUrl, supabaseKey);
