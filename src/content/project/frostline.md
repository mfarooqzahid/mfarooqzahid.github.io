---
title: "Frostline - HVAC Field Service App"
description: "A two-sided field-service app for heating and cooling businesses: customers request and track service while crews schedule jobs, run checklists and invoice."
category: "flutter"
technologies: ["Flutter", "Field Service", "Scheduling"]
image: "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/banner.png"
screenshots:
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Customer%20request.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Customer%20tracker.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Owner%20today.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Request%20detail.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Crew%20schedule.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/02%20-%20Technician%20day.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/On%20site.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Job%20done.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Customer%20equipment.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/Customer%20quote.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/frostline/01%20-%20Welcome.png"
---

## Overview

**Frostline** is a two-sided field-service app for heating and cooling
businesses. Homeowners raise a service request and follow their technician in
real time; the office and the crew get one shared board — today's jobs, the
inbox, the schedule and the paperwork. The demo business used throughout is
*Birchline Heating*.

## For the customer

- **Raise a request in a few taps** — no heat, no cooling, a strange noise or
  just a tune-up, with a note, a photo of the unit and a gas-safety prompt
- **Live technician tracking** — an ETA, a map from the shop to the home and a
  plain-language job timeline (received → assigned → on the way → heat restored)
- **Equipment record per home** — install year, warranty, service history and
  health, with automatic tune-up reminders
- **Approve quotes** — itemised supply/labour with tax, plus an optional yearly
  tune-up plan and a direct line to the technician

## For the owner and crew

- **Today** — jobs, new requests, money to collect and a live view of who is on
  the way, on site or free
- **Inbox** — request detail with the customer's equipment history and one-tap
  assignment to the nearest technician who has the parts
- **Schedule** — the day by time slot, with an unassigned request pinned to the
  top
- **On site** — a job checklist, before/after photos and a running time-on-site
  clock
- **Job done** — time on site, parts and labour rolled into an itemised total and
  an invoice ready to send

## Design

A navy and safety-orange palette with big, calm type and card-based layouts.
Every screen leads with a single filled action, and status is always carried by
both a colour and a word, never colour alone.

## Tech stack

- **Flutter** — one codebase covering both the customer and the technician
  experiences
- **Field service** domain model — customers, equipment, requests, jobs, quotes
  and invoices
- **Scheduling** — time-slot day view with technician assignment and live status
- **Invoicing** — itemised parts and labour with tax and scheduled reminders
