---
title: "Load testing an ECS service before and after autoscaling"
description: "A hands-on experiment that load tests a containerized app on AWS ECS with a fixed task count, then again with autoscaling, and compares the numbers."
seoTitle: "ECS Autoscaling Load Test"
seoDescription: "A load test comparing an AWS ECS service with a fixed task count against the same service with target tracking autoscaling."
category: "devops"
status: "In progress"
technologies:
  [
    "AWS ECS",
    "Application Load Balancer",
    "Auto Scaling",
    "CloudWatch",
    "Docker",
    "Performance Testing",
  ]
diagram:
  src: "/assets/projects/ecs-autoscaling-load-test.svg"
  alt: "Load test diagram: a load generator sends the same traffic pattern through an Application Load Balancer to an ECS service with fixed tasks in run A and added tasks in run B, with CloudWatch metrics and Application Auto Scaling controlling the task count."
  width: 2000
  height: 960
---

## Overview

A hands-on experiment that load tests a containerized app on AWS ECS with a
fixed task count, then again with autoscaling, and compares the numbers.

Autoscaling is usually described as "it handles traffic spikes." This project
measures it: how much traffic breaks the service when it does not scale, and how
much better it holds up when it does. The app under test is a real application
with real endpoints and a database, not a dummy endpoint that just burns CPU.

## Experiment design

- Baseline run: the service deployed with a fixed number of ECS tasks and no
  autoscaling.
- Scaled run: the same service with an ECS target tracking autoscaling policy.
- The same load pattern is used in both runs so the comparison is fair.
- Load generator: one load generator sends traffic through the Application Load
  Balancer to the service in both runs.

## Metrics compared

- p50 and p95 latency.
- Requests per second handled.
- Error rate, including 5xx responses and timeouts.
- Task count over time.
- CPU and memory utilization.
- Time taken to scale out after the spike starts.

## Status

In progress, started November 2026. Results will be published when the runs are
complete.
