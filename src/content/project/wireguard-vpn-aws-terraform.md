---
title: "WireGuard VPN Server on AWS with Terraform"
description: "A private WireGuard VPN on EC2, provisioned entirely with reusable Terraform modules, remote state, and no open SSH port."
category: "devops"
technologies: ["AWS", "Terraform", "WireGuard", "EC2", "IAM", "SSM", "S3", "Linux", "Bash", "Python"]
---

## Context

Commercial VPNs mean trusting a third party with your traffic. I wanted a
private VPN I fully control, built the way a production team would build it:
repeatable, secure by default, and documented.

## What I Built

A WireGuard VPN server on an EC2 instance, provisioned entirely with Terraform.
No console clicking.

- The Terraform code is split into three modules — **network**, **security**,
  and **vpn-instance** — so each part can be changed or reused on its own.
- Terraform state is stored remotely in **S3** instead of on my laptop.
- An **Elastic IP** gives the server a fixed address, so client configs never
  break after a restart.

## Security Decisions

- **No SSH port is open.** I access the server through AWS SSM Session Manager,
  controlled by IAM.
- **IMDSv2 is enforced** on the instance, which blocks a common class of
  credential theft attacks.
- The **EBS volume is encrypted**.

## Automation

- `add_client.sh` creates new VPN clients remotely using SSM Run Command, so I
  never log into the box.
- `generate-qr.py` turns a client config into a QR code, so a phone can be set
  up by scanning.

## Outcome

Working end to end, with a public tutorial site on GitHub Pages so anyone can
follow along and rebuild it.

- **Tutorial:** [mfarooqzahid.github.io/devops-vpn-server-setup](https://mfarooqzahid.github.io/devops-vpn-server-setup)
- **Code:** [github.com/mfarooqzahid/devops-vpn-server-setup](https://github.com/mfarooqzahid/devops-vpn-server-setup)
