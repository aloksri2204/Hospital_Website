import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { staticApiClient, isStaticBuild } from "./staticApiClient";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For static builds, simulate API responses
  if (isStaticBuild()) {
    const mockResponse = new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
    return mockResponse;
  }

  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // For static builds, use static data
    if (isStaticBuild()) {
      const url = queryKey[0] as string;
      
      if (url === '/api/doctors') {
        return staticApiClient.getDoctors() as any;
      } else if (url === '/api/blog') {
        return staticApiClient.getBlogPosts() as any;
      } else if (url === '/api/appointments') {
        return staticApiClient.getAppointments() as any;
      } else if (url.startsWith('/api/doctors/')) {
        const id = parseInt(url.split('/').pop() || '0');
        return staticApiClient.getDoctor(id) as any;
      } else if (url.startsWith('/api/blog/')) {
        const id = parseInt(url.split('/').pop() || '0');
        return staticApiClient.getBlogPost(id) as any;
      }
      
      return null as any;
    }

    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
