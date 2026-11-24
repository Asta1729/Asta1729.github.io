---
title: "P2P Distributed Task Executor with Chord DHT Routing"
summary: "A peer-to-peer task execution simulator in OMNeT++ that uses Chord finger tables to cut routing from O(N) to O(log N) hops."
category: Course Project
course: "Computer Networks (CSL3080)"
tags: [C++, OMNeT++, Distributed Systems, Networking]
github: https://github.com/Asta1729/CSL3080_Assignment
order: 4
---

## Overview

A simulation of distributed remote program execution on a fully peer-to-peer network, built in **OMNeT++ 6.3.0**.

## What I did

- **Routing:** N clients sit on a ring network augmented with **Chord DHT finger tables**, which cuts inter-node
  routing from O(N) to **O(log N)** hops. The topology is loaded dynamically at runtime.
- **Scheduling:** Client 0 splits an array into subtasks and dispatches them round-robin across the N workers. Each
  worker computes a local maximum and routes the result back via Chord for global consolidation.
- **Termination:** a gossip flood protocol with hash-based duplicate suppression handles decentralised termination
  detection. Each node confirms completion only after hearing from all N peers.
