import { supabase } from '@/supabase-client';
import React, { useEffect, useState } from 'react'
import useStore from "@/store/store";

const useGetSessionData = () => {
    const { setUser, syncLocalToSupabase }: any = useStore();

    const [session, setSession] = useState<any>(null);

    const fetchSession = async () => {
        const currentSession = await supabase.auth.getSession();
        setSession(currentSession.data.session);
        setUser(currentSession.data.session?.user);
    };

    useEffect(() => {
        fetchSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                // Always set session in state
                setSession(session);
                setUser(session?.user ?? null);

                // ONLY sync when user logs in
                if (event === "SIGNED_IN" && session?.user) {
                    console.log("User signed in → syncing local tasks...");

                    await syncLocalToSupabase();
                }

                // Clear Zustand if user logs out
                if (event === "SIGNED_OUT") {
                    console.log("User signed out");
                }
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return session;

}

export default useGetSessionData