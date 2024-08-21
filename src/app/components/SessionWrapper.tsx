"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

type SessionWrapperProps = {
  children: ReactNode;
};

const SessionWrapper = ({ children }: SessionWrapperProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
