---
title: "Cat Stack - Offline One-Tap Puzzle Game"
description: "An offline, one-tap block puzzle for kids: drop crates to build a staircase and help the cat climb to the golden fish."
category: "flutter"
technologies: ["Flutter", "Flame", "Provider", "AdMob", "In-App Purchase"]
image: "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/banner.png"
screenshots:
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_01_stack_1080x1920.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_02_worlds_1080x1920.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_03_controls_1080x1920.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_04_offline_1080x1920.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_05_stars_1080x1920.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_06_levels_1080x1920.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_07_kids_1080x1920.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/cat-stack/screenshot_08_settings_1080x1920.png"
---

## Overview

**Cat Stack** is an offline, one-tap block-dropping puzzle for children (target
age ~5, one finger, no reading required after the first level). A crate slides
across the top of the screen — tap once and it drops into that column. The cat
walks itself forward and climbs the staircase you build, until it reaches the
golden fish.

## The One Rule

The cat can step **up one crate or down one crate**. Nothing else. That single
rule makes the game instantly readable for young players while still leaving
room for genuine planning as the levels open up.

## Key Features

- **One-tap controls** — tap to drop a crate; the cat handles the climbing
- **Endless, always-solvable levels** — terrain is generated, solved exactly,
  then accepted or rejected, so no level can ever soft-lock
- **Four worlds** — Daytime, Sunset, Night and Jungle share one layout but swap
  the palette
- **Star ratings** — finishing under par earns up to 3 stars; stars never gate
  progress
- **No pressure** — no lives, no timers, no punishment loop; running out of
  crates is a gentle "stuck" pose with a tap-to-reset
- **Fully offline** — progress, stars, speed and sound settings persist on the
  device, and the game never needs a network

## Art Direction

A deliberately mixed look: the scenery is flat vector art (one sky colour per
world, a ringed flat sun, layered mountains, grass over dirt), the crates are
smooth framed faces tiled edge-to-edge, and the cat and fish are 8-bit pixel
sprites on a 4px grid. Menus and buttons reuse the crate face, so the whole UI
feels carved from the same material.

## Audio

One continuous looping track plus drop, land, step, win and stuck effects,
synthesised from scratch in Python and dedicated to CC0 — bundled with the app,
nothing streamed at runtime.

## Tech Stack

- **Flutter** with the **Flame** engine for the gameplay scene
- **Provider** for app state and repositories
- A level generator with an exact minimum-crate solver (`par`) and unit tests
- **Google Mobile Ads** (child-directed) and **in-app purchase** for an optional
  one-time "Remove ads", both isolated and optional
- Bundled **Lilita One** and **Nunito** fonts, fully offline
