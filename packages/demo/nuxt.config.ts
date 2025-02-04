// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-01-02',
  runtimeConfig: {
    public: {
      accessToken:
        'pk.eyJ1IjoiYWdlbmNlc3R1ZGlvbWV0YSIsImEiOiJjbTZxZXZidzYxaXR3MmtzaG5qNzc3NGxqIn0.c_YVpXQptiZtOgzj_5jvaw',
    },
  },
});
