---
title: "Stageflow: GitOps on Amazon EKS"
description: "A multi-environment GitOps workflow on EKS, with Helm charts, ArgoCD sync, and GitHub Actions across dev, uat, and preprod."
category: "devops"
technologies: ["Amazon EKS", "ArgoCD", "Helm", "eksctl", "AWS CDK", "GitHub Actions", "Kubernetes", "AWS"]
---

## Context

Manual deploys to Kubernetes drift over time, and nobody can say what is
actually running. GitOps fixes that by making Git the single source of truth. I
built this to learn the full workflow hands on.

## What I Built

- An EKS cluster (`gitops-lab`) in **ap-southeast-2**, provisioned with
  **CDK** and managed with **eksctl** and **kubectl**.
- **Helm charts** for the application, with separate **dev**, **uat**, and
  **preprod** environments.
- **ArgoCD** watching the Git repo and syncing each environment automatically.
- **GitHub Actions** pipelines across the three environments.
- ArgoCD exposed through a **public ELB**, with a bastion EC2 host for cluster
  access.

## Problems I Debugged

This is the valuable part of the project.

- Rotating ArgoCD's SSH credentials for the Git repo cleanly using `--upsert`.
- CDK teardowns failing because orphaned ALBs and NAT gateways kept blocking
  VPC deletion.
- YAML indentation errors in ArgoCD Application manifests.
- A deprecated container image registry breaking pulls, plus port mismatches
  between service and container.
- I rebuilt the pipeline from scratch several times, which taught me the order
  things must be created and destroyed in.

## What I Learned

The project made the GitOps loop concrete: commit a change, let ArgoCD notice
it, and reconcile the cluster to match. Debugging the teardown path was just as
instructive as the deploy path — cleanup order matters as much as creation
order.

## Note

Built during my Systems Limited internship as a guided learning project, not a
production system. The repository is private.
