"use client";

import { useState, useEffect } from "react";

// Schedule (IST — clinic local time):
// Mon–Sat: 10:00–14:30, 16:30–21:00
// Sun:     10:00–14:00

function computeStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon … 6=Sat
  const t = now.getHours() * 60 + now.getMinutes(); // minutes since midnight

  const MORNING_OPEN  = 10 * 60;        // 10:00 AM → 600
  const MORNING_CLOSE = 14 * 60 + 30;   // 2:30  PM → 870
  const EVE_OPEN      = 16 * 60 + 30;   // 4:30  PM → 990
  const EVE_CLOSE     = 21 * 60;        // 9:00  PM → 1260
  const SUN_CLOSE     = 14 * 60;        // 2:00  PM → 840

  if (day === 0) {
    // Sunday
    if (t >= MORNING_OPEN && t < SUN_CLOSE)
      return { isOpen: true,  label: "Open Now · Closes at 2 PM" };
    return { isOpen: false, label: "Closed · Opens Mon at 10 AM" };
  }

  // Mon – Sat
  if (t >= MORNING_OPEN && t < MORNING_CLOSE)
    return { isOpen: true,  label: "Open Now · Closes at 2:30 PM" };

  if (t >= EVE_OPEN && t < EVE_CLOSE)
    return { isOpen: true,  label: "Open Now · Closes at 9 PM" };

  if (t < MORNING_OPEN)
    return { isOpen: false, label: "Closed · Opens at 10 AM" };

  if (t >= MORNING_CLOSE && t < EVE_OPEN)
    return { isOpen: false, label: "Closed · Opens at 4:30 PM" };

  // After 9 PM
  if (day === 6)
    return { isOpen: false, label: "Closed · Opens Sun at 10 AM" };

  return { isOpen: false, label: "Closed · Opens tomorrow at 10 AM" };
}

export function useClinicStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string }>({
    isOpen: false,
    label: "Closed",
  });

  useEffect(() => {
    setStatus(computeStatus());
    const id = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
