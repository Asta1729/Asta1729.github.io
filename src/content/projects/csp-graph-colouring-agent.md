---
title: "CSP Agent: Graph Colouring under Partial Observability"
summary: "An AI agent that colours a partially visible graph using AC-3 constraint propagation, MRV/LCV heuristics and backtracking with forward checking."
category: Course Project
course: "Artificial Intelligence (CSL3090)"
tags: [Python, Constraint Satisfaction, Search]
github: https://github.com/Asta1729/AI_CSL3090_Assignment
featured: true
order: 3
---

## Overview

The agent has to colour every node of a graph so that no two neighbours share a colour, while it can only see part of
the graph at a time and pays a cost for each move and each backtrack.

## Approach

- **Constraint propagation:** AC-3 keeps every node's domain arc-consistent, with incremental domain pruning after
  each observation step.
- **Where to move:** pick the visible uncoloured node with the fewest legal colours (**MRV**). When everything visible
  is coloured, move towards nodes with unseen neighbours to explore the graph.
- **Which colour:** backtracking search with **forward checking**, choosing the **least constraining value (LCV)**
  so neighbours keep as many options as possible.

## Result

Near-optimal tournament scores across all test instances, keeping search depth and constraint violations to a minimum.
