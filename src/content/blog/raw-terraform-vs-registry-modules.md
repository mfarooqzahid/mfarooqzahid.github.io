---
title: "Raw Terraform vs Registry Modules: Which One Should You Use?"
description: "A practical comparison of raw Terraform resources and registry modules, with code examples, a side-by-side table and rules for structure, versioning and reuse."
author: "Muhammad Farooq"
tags: ["Terraform", "AWS", "Infrastructure as code"]
---

## The problem

When you start with Terraform, you write every resource by hand. It works, but
a single real setup can need a lot of resources, roles, security groups, logs and
wiring between them. The Terraform Registry has ready-made modules that wrap all
of that. So which one should you use?

## What is a registry module?

A module is a reusable package of Terraform code. You call it with a few inputs
and it creates a group of related resources for you. Registry modules are public
modules published by the community or vendors, like
`terraform-aws-modules/vpc/aws`.

## Raw Terraform

You write each resource yourself:

```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "private" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}

# plus route tables, gateways, associations...
```

You see and control every piece, but the code gets long fast.

## Registry module

You describe what you want and the module builds the rest:

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "app"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
}
```

Same result, a fraction of the code.

## Side by side

| | Raw resources | Registry module |
|---|---|---|
| Code size | Long | Short |
| Control | Full, every argument | Full for common cases, through module variables |
| Learning value | High | Lower, details are hidden |
| Defaults | You decide everything | Sensible defaults already set |
| Upgrades | You own every change | Version bumps can rename or recreate resources |
| Debugging | Easy to trace | Errors point inside module code |
| Odd custom setups | Easy | Can fight the module |
| Reuse | Copy paste or write your own module | Call it again with new inputs |

## Folder structure

With raw Terraform the usual layout is `main.tf`, `variables.tf` and
`outputs.tf`. With registry modules the root looks the same. The `modules/`
folder is only for modules you write yourself. Registry modules are downloaded
by `terraform init` into `.terraform/modules/`, so they are not stored in your
repo.

A layout that works well:

```text
my-project/
├── versions.tf
├── providers.tf
├── variables.tf
├── terraform.tfvars
├── vpc.tf       # module "vpc"
├── database.tf  # module "db"
├── outputs.tf
└── .gitignore
```

Split by concern once `main.tf` gets long, one module block per file.

## Rules that save pain

- Pin every module version. A new release can change your plan.
- Wire modules together through outputs, like `module.vpc.private_subnets`.
- Keep values in variables, not hardcoded in module blocks.
- Commit `.terraform.lock.hcl`. Do not commit `.terraform/` or state files.
- Run `terraform plan` after every version bump. Major versions have renamed
  variables before.
- Read the module source once. It is the best way to learn what it creates.

## Which one should you use?

- **Learning or a portfolio project:** write raw first. You learn what each piece
  does, and it shows you understand it. Then show the module version next to it.
- **Real projects:** use the module. Less code, good defaults, faster to build.
- **Very custom setups:** go raw, or write your own module, so you are not
  fighting someone else's design.

## Takeaway

Raw Terraform teaches you. Modules save you time. Do the first one once, then use
the second one.
