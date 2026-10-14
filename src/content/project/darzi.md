---
title: "Darzi - Tailor's Register & Order Book"
description: "A local-first register for tailors: customers, measurements and orders in one offline app."
category: "flutter"
technologies: ["Flutter", "BLoC", "Drift", "Offline"]
image: "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/banner.png"
screenshots:
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_092917.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_092935.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093029.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093006.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093012.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093020.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093023.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093033.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093040.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_093046.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_092942.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_092949.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/darzi/shot_20261014_092954.png"
---

## Overview

**Darzi** is a tailor's personal register that replaces the paper ledger. Customer
entries, measurement profiles, style choices and the order book all live on the
phone, fully offline and with no account. It is deliberately *not* a booking,
billing or invoicing app — just the shop's day-to-day record, done properly.

## The order flow

Everything starts from **New order**; customers are never created from a
separate screen. The flow walks through the order type, the customer, the
measurements and finally a single confirm step:

1. **Order type** — pick one garment (shalwar kameez, suit, shirt & trouser,
   dress, alteration, uniform). An optional "Remember my choice" skips the step
   next time.
2. **Who is it for** — a prominent *New customer* tile, then search or pick an
   existing customer.
3. **Measurements** — per-garment fields with saved style chips, then *Save
   details*.
4. **Confirm order** — summary, quantity, delivery date and notes, then one
   filled *Confirm order* button.

## Key features

- **Customer register** — auto-incrementing (and editable) serial numbers,
  phone, search and full order history
- **Measurement profiles** — several per customer, each tied to a garment type,
  with inches or centimetres and user-defined fields
- **Editable garment templates** — the tailor adds or renames measurement fields
  and style options from Settings
- **Order tracking** — cutting → stitching → ready → delivered, with delivery
  reminders and an overdue highlight on the home register
- **English and Urdu (RTL)** — switchable at runtime, with right-to-left safe
  layouts throughout
- **Light, dark and system themes**, all built from one color scheme
- **Fully offline** — data, settings and language persist on the device

## Tech stack

- **Flutter** (Android first, phone layout) with **BLoC / Cubit** and a
  feature-first architecture
- **Drift (SQLite)** for the relational local database and history queries
- **`flutter gen-l10n`** with ARB files for the English / Urdu localization
- Theme-level Material 3 styling — no hardcoded colors, sizes or radii
- **Fraunces** for display type and **DM Sans** for body, with **Noto Nastaliq
  Urdu** for the Urdu locale
