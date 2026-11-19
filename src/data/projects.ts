export interface Project {
  title: string;
  type: "DevOps" | "Mobile";
  description: string;
  stack: string;
  status?: string;
  repoUrl?: string;
  detailUrl?: string;
}

export const projects: Project[] = [
  {
    title: "StageFlow",
    type: "DevOps",
    description: "GitOps deployment across multiple environments on EKS.",
    stack: "EKS, ArgoCD, Helm",
    detailUrl: "/projects/stageflow-gitops-eks/",
  },
  {
    title: "ECS load test",
    type: "DevOps",
    description: "Autoscaling measured before and after under load.",
    stack: "ECS, autoscaling",
    status: "In progress",
    detailUrl: "/projects/ecs-autoscaling-load-test/",
  },
  {
    title: "DevSecOps pipeline",
    type: "DevOps",
    description:
      "Jenkins pipeline that security-scans and deploys a Netflix-style app to EC2.",
    stack: "Jenkins, Trivy, SonarQube",
    detailUrl: "/projects/devsecops-netflix-pipeline/",
  },
  {
    title: "Containerized notes app",
    type: "DevOps",
    description:
      "Multi-container notes app with MongoDB, provisioned and deployed to AWS.",
    stack: "Docker Compose, Terraform, Ansible",
    detailUrl: "/projects/containerized-notes-api/",
  },
  {
    title: "Cool Air Craft",
    type: "Mobile",
    description: "Invoicing app for an HVACR business.",
    stack: "Flutter",
    detailUrl: "/projects/cool-air-craft/",
  },
  {
    title: "Super Service",
    type: "Mobile",
    description: "Partner-facing app with an admin dashboard.",
    stack: "Flutter, Supabase",
    detailUrl: "/projects/super-service/",
  },
];
