---
title: "Emoji Mashup - Offline Emoji Puzzle Game"
description: "An offline puzzle game for kids that combines illustrated ingredients into new creations across 100+ levels."
category: "flutter"
technologies: ["Flutter", "BLoC", "OpenMoji", "Shorebird"]
image: "https://raw.githubusercontent.com/mfarooqzahid/media/main/emoji-mashup/feature_graphic_1024x500.png"
screenshots:
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/emoji-mashup/000001.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/emoji-mashup/000002.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/emoji-mashup/000003.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/emoji-mashup/000004.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/emoji-mashup/000005.png"
  - "https://raw.githubusercontent.com/mfarooqzahid/media/main/emoji-mashup/000006.png"
---

## Overview

**Emoji Mashup** is an offline Flutter puzzle game for children aged 5–14.
Players combine illustrated ingredients to craft a target through one or more
recipe steps — every level is solvable in **one, two, or three mixes**.

## Key Features

- **100+ handcrafted levels** across Starter, Nature, Cooking, Animals and
  Fantasy episodes
- **Combination puzzle loop** — pick two ingredients, hit **Mix**, and discover
  new creations
- **Star ratings** based on moves and hints used
- **Dynamic hints** — relevant ingredients glow after repeated failed attempts
- **Fully offline** — progress, discoveries, settings and best stars are saved
  locally
- **Consistent artwork** — every ingredient is a bundled OpenMoji SVG, so the
  game looks identical on Android and iOS with no network

## Craft Storybook UI

A paper-craft design system built from design tokens and custom painters:
stitched borders, felt badges, washi tape, a paper-trail level map and a chunky
fabric **MIX** button.

## Tech Stack

- **Flutter** with BLoC/Cubit state management
- **OpenMoji 17.0** artwork (CC BY-SA 4.0)
- **Shorebird** for over-the-air updates
- Local persistence, ads and in-app purchase integrations
