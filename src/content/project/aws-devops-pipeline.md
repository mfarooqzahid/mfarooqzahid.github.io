---
title: "Minions: CI/CD Pipeline to ECS Fargate"
description: "A Jenkins pipeline that builds a Docker image, pushes it to Amazon ECR, and deploys it to ECS Fargate — with the infrastructure defined in Terraform."
category: "devops"
technologies: ["Terraform", "Jenkins", "Docker", "Amazon ECR", "Amazon ECS Fargate"]
diagram:
  src: "/assets/projects/aws-ecs-fargate-pipeline.svg"
  alt: "CI/CD pipeline diagram: a code change moves from GitHub through Jenkins to Amazon ECR and an ECS Fargate service, with Terraform provisioning the registry, cluster, task definition and service."
  width: 2000
  height: 880
---

## Context

Shipping a container by hand is slow and error prone. I wanted a pipeline where
a code push ends up as a running service with no manual steps.

## What I Built

- Infrastructure defined in **Terraform**.
- A **Jenkins** pipeline that builds a Docker image and pushes it to **Amazon
  ECR**.
- Deployment of that image to **ECS Fargate**, so there are no servers to
  manage.
- I presented the project and walked others through how it worked.

## How It Flows

1. Terraform provisions the ECR repository, ECS cluster, task definition, and
   service.
2. Jenkins builds the application image and pushes it to ECR.
3. A new task definition revision is registered and the ECS service rolls out
   the updated container.

## Outcome

A code change moves from commit to a running Fargate service without manual
build or deploy steps. Explaining the pipeline to others also forced me to make
the moving parts — and the hand-offs between them — much clearer.
