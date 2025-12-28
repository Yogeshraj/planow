import { supabase } from "@/supabase-client";
import { useEffect, useState } from "react";
import useStore from "@/store/store";

const useGetSessionData = () => {
  const { setUser, syncLocalToSupabase, fetchData }: any = useStore();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) return;

    let cancelled = false;

    const run = async () => {
      await syncLocalToSupabase();
      if (cancelled) return;
      await fetchData();
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  return session;
};

export default useGetSessionData;
