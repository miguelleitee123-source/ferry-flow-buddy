import { supabase }from '@/lib/supabaseClient';

const signUp = async (email: string, password: string, name:string) => {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
      options:{
        data:{name},
      },
    });
    if (error) throw error;
    console.log('user created:', data.user);
  }

  const signIn = async (email: string, password: string, name: string) => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    console.log("Logged in:", data.user);
  }
  