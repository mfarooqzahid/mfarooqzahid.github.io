---
title: "Cool Air Craft - Offline Invoicing App"
description: "A local-first invoice and quotation app for AC service businesses, with high-speed entry and instant PDF output."
category: "flutter"
technologies: ["Flutter", "BLoC", "Drift", "PDF", "Web"]
image: "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/banner.png"
screenshots:
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000001.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000002.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000003.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000004.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000005.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000006.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000007.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000008.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000009.jpg"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cool-air-craft/000010.jpg"
---

## Overview

**Cool Air Craft** is a local-first invoice and quotation app for
air-conditioning service businesses. It focuses on extremely fast data entry and
instant, professional PDF output — with **no cloud dependency at all**.

## Key Features

- **High-speed entry loop** — auto-focused search, keyboard navigation and quick
  quantity entry
- **Live PDF preview** — split-screen on web/tablet, fullscreen sheet on mobile
- **Offline-only data** — invoices and line items are stored on the device, with
  no sync or network logic
- **Adaptive layout** — stacked flow under 600dp, split view above

## Tech Stack

- **Flutter** (Android & Web) with BLoC/Cubit
- **Drift / Isar** local database
- **pdf** & **printing** for document generation, run in an isolate to keep the
  UI at 60fps
