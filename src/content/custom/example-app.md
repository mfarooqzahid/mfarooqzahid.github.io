---
title: "Example App"
description: "A sample standalone page. Copy this file to add your own."
tagline: "Standalone page"
icon: "🎮"
links:
  - label: "Google Play"
    url: "https://play.google.com/store/apps"
    icon: "▶️"
---

## About

This is a **standalone page** that lives under `/pages`. It is not linked from
the main site and is marked `noindex`, so it stays out of the navigation and out
of search results — reachable only if you know the URL.

Use it for an app landing page, a launch page, a media kit, or anything else you
don't want surfaced directly on the portfolio.

## How to add one

1. Copy this file into `src/content/custom/` and give it a name — the filename
   becomes the URL, e.g. `my-app.md` → `/pages/my-app`.
2. Fill in the frontmatter:

   | Field         | Purpose                                   |
   | ------------- | ----------------------------------------- |
   | `title`       | Page heading                              |
   | `description` | One line, shown in the `/pages` listing   |
   | `tagline`     | Small eyebrow label above the title       |
   | `icon`        | An emoji, or a URL to an image            |
   | `hero`        | Optional hero image URL                   |
   | `links`       | Buttons: `label`, `url`, optional `icon`  |
   | `screenshots` | Optional list of image URLs               |

3. Write the body below the frontmatter in Markdown.
