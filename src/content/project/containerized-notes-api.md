---
title: "Containerized Notes API with Terraform, Ansible & Jenkins"
description: "A Node.js and MongoDB notes service shipped end to end with Docker Compose, Nginx, Terraform, Ansible, and Jenkins."
category: "devops"
technologies: ["Docker", "Docker Compose", "Node.js", "MongoDB", "Nginx", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "AWS EC2"]
---

## Context

A small app is a good way to practice the full delivery chain: containerize it,
provision a server, configure it, and deploy automatically.

## What I Built

- A **Node.js/Express + Mongoose** notes API with MongoDB, run together using
  **Docker Compose**.
- An **Nginx reverse proxy** in the Compose stack in front of the API.
- An **AWS EC2** instance provisioned with **Terraform**.
- **Ansible** playbooks that install Docker and Docker Compose on the server and
  pull the app image from Docker Hub.
- A **Jenkins** pipeline that automates the build and deploy.
- Basic monitoring, kept lean on purpose.

## Newer Iteration

I started a rebuild where **GitHub Actions** builds the Docker image, replacing
Jenkins for that step.

## Outcome

The project connects the pieces I use most in day-to-day delivery: containers,
infrastructure as code, configuration management, and a repeatable deployment
pipeline.
