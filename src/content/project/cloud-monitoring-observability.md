---
title: "Cloud Monitoring & Observability Stack"
description: "The main monitoring tools set up side by side: CloudWatch, Prometheus, Grafana, and the ELK stack."
category: "devops"
technologies: ["CloudWatch", "Prometheus", "Node Exporter", "Grafana", "Elasticsearch", "Kibana", "Filebeat", "Elastic Agent"]
---

## Context

You cannot run infrastructure you cannot see. I set up the main monitoring
tools side by side to understand what each one is good at.

## What I Built

- **CloudWatch** and the **CloudWatch Agent** for AWS-native metrics and logs.
- **Prometheus** with **Node Exporter** for host-level metrics.
- **Grafana** dashboards and alerting on top of the metrics.
- The **ELK stack** (Elasticsearch, Kibana, Filebeat/Elastic Agent) for
  centralized log search.

## Problems I Solved

- Version incompatibilities between Elasticsearch, Kibana, and the agents.
- Memory issues when running the ELK components on small instances.

## Outcome

Seeing the same system through four different lenses made the trade-offs
obvious: managed AWS metrics are the quickest starting point, Prometheus and
Grafana give fine-grained control, and the ELK stack earns its keep when I need
to search logs across services.
