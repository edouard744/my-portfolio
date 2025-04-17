import { NextRequest, NextResponse } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptedLang = request.headers.get("accept-language");
  const preferred = acceptedLang?.split(",")[0].split("-")[0] || defaultLocale;
  return locales.includes(preferred) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
