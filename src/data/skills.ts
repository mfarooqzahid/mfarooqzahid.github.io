export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Cloud",
    items: ["AWS: EC2, VPC, IAM, ECS, S3", "CDK"],
  },
  {
    title: "Infrastructure as code",
    items: ["Terraform", "Ansible"],
  },
  {
    title: "Delivery",
    items: ["Jenkins, Docker", "Kubernetes, Helm, ArgoCD"],
  },
  {
    title: "Apps",
    items: ["Flutter, Go", "PostgreSQL, Supabase"],
  },
];
