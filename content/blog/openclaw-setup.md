---
title: "How I Set Up OpenClaw on a Raspberry Pi — It Prototypes While I Sleep"
description: "How I set up OpenClaw on a £50 computer for 24/7 AI assistance — with proper isolation for security."
date: "2026-02-02"
author: "Hammid Olagunju"
---

AI coding agents are incredible. Claude, Cursor, GPT — they've made building things faster than ever.

But here's the thing: **you still have to be at your computer to use them.**

I'd get ideas at random times — on the train, walking, half-asleep. I'd jot them in Apple Notes, hoping I'd remember the context later. Most didn't survive the journey back to my desk.

So I set up something different.

I have an AI agent running 24/7 on a Raspberry Pi. I message it on WhatsApp like a colleague. "Scaffold a landing page for X." "Set up the project structure." "Research this and give me options."

**By the time I sit down, the work is started. Sometimes it's done.**

## Why a Raspberry Pi?

Honestly? Isolation. I didn't want to give an AI agent full access to my main machine with all my credentials and files. The Pi has its own workspace, its own GitHub, its own API keys. I can SSH in anytime. It can't reach out to me.

Clean separation. I control the boundary.

**My MacBook:**
- 🔐 Bank credentials
- 🔑 SSH keys
- 📧 Personal email
- 🗂️ Private files

**Raspberry Pi:**
- 🤖 OpenClaw agent
- 📁 Agent workspace
- 🔑 Dedicated API keys
- 🐙 Separate GitHub

✅ I can SSH in → 🚫 Agent can't reach me

## The Tool

The tool is called [OpenClaw](https://openclaw.ai/) — open source, connects Claude to messaging apps and file systems. Still early, still rough edges. But the core idea works: an AI that can actually *do things*, not just talk about them.

## What I Use It For

- Scaffolding side projects I'd been putting off
- Researching topics and dumping structured summaries into Notion
- Setting up calendar invites for my week
- Running cron jobs to scan flight prices for upcoming trips
- Monitoring AI news and giving me 4-hourly updates

These aren't "tell me about X" tasks. These are **"go do X and come back when it's done"** tasks.

## Still Early Days

It's not replacing my job. But for personal projects, research, and life admin? It's already saving me hours. The unlock is that it runs 24/7 on a £50 computer and acts on my behalf while I do other things.

**Ideas no longer die in my notes app. That alone has been worth it.**
