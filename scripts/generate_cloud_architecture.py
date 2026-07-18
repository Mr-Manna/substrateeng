import os

filepath = r'D:\Hattimateam\substrate\src\pages\cloud-architecture.astro'

# Write the file in parts using append mode
# Part 1: Frontmatter + Hero + Section 2 (What is Cloud Architecture)
part1 = """---
import Base from '../layouts/Base.astro';
import SectionHeading from '../components/SectionHeading.astro';
import Button from '../components/Button.astro';

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/#capabilities' },
  { name: 'Cloud Architecture', href: '' },
];
---

<Base
  title="Cloud Architecture Services for Enterprise | Substrate"
  description="Substrate helps enterprises design secure, scalable, and cost-efficient cloud architectures. Cloud strategy, multi-cloud, hybrid cloud, landing zones, and cloud-native platforms."
>
<!-- 1. HERO -->
<section class="relative overflow-hidden py-24 md:py-40" aria-labelledby="hero-heading">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--c-accent-soft)_0%,_transparent_60%)] pointer-events-none" aria-hidden="true" />
  <div class="container-x relative z-10">
    <nav class="mb-10 text-sm text-ink-3">
      {breadcrumbs.map((crumb, idx) => (
        <span>
          {idx > 0 && ' / '}
          {crumb.href && idx < breadcrumbs.length - 1
            ? <a href={crumb.href} class="text-accent hover:underline">{crumb.name}</a>
            : <span class={idx === breadcrumbs.length - 1 ? 'font-medium text-ink' : ''}>{crumb.name}</span>
          }
        </span>
      ))}
    </nav>
    <div class="max-w-4xl" data-reveal-group>
      <p class="kicker text-accent mb-5" data-reveal>
        <span class="text-accent">01</span><span aria-hidden="true">&nbsp;&mdash;&nbsp;</span>Cloud Architecture
      </p>
      <h1 id="hero-heading" class="display text-5xl md:text-[4.5rem] text-ink max-w-5xl" data-reveal>
        Design cloud architectures<br />that scale with your business.
      </h1>
      <p class="mt-6 text-lg md:text-xl text-ink-2 max-w-2xl leading-relaxed" data-reveal>
        Cloud architecture is the practice of designing technology environments that are secure, resilient, observable, and cost-efficient. Substrate helps organizations architect cloud platforms that accelerate innovation while maintaining enterprise-grade governance and control.
      </p>
      <div class="mt-10 flex flex-wrap gap-4" data-reveal>
        <Button href="/contact" variant="primary" size="md">Schedule an architecture review</Button>
        <Button href="#what-is" variant="secondary" size="md">Learn more</Button>
      </div>
    </div>
    <div class="mt-16 grid gap-6 md:grid-cols-3 max-w-4xl" data-reveal-group>
      <div class="border-t border-line pt-5" data-reveal>
        <p class="text-3xl font-display font-semibold text-accent">40-60%</p>
        <p class="text-sm text-ink-2 mt-1">Reduction in cloud infrastructure costs through architecture optimization and FinOps governance</p>
      </div>
      <div class="border-t border-line pt-5" data-reveal>
        <p class="text-3xl font-display font-semibold text-accent">99.99%</p>
        <p class="text-sm text-ink-2 mt-1">Target architecture availability through multi-region, multi-AZ, and self-healing infrastructure design</p>
      </div>
      <div class="border-t border-line pt-5" data-reveal>
        <p class="text-3xl font-display font-semibold text-accent">3-5x</p>
        <p class="text-sm text-ink-2 mt-1">Faster workload delivery with well-architected landing zones, automation, and self-service platforms</p>
      </div>
    </div>
  </div>
</section>

<!-- 2. WHAT IS CLOUD ARCHITECTURE? -->
<section id="what-is" class="py-20 md:py-28 bg-graphite" aria-labelledby="whatis-heading">
  <div class="container-x">
    <SectionHeading
      id="whatis-heading"
      index="02"
      label="What is Cloud Architecture"
      title="The blueprint for how your organization operates in the cloud."
      lede="Cloud architecture is the practice of designing and governing the structural components of a cloud environment: compute, networking, storage, security, identity, and the policies that connect them. It is the foundation upon which all cloud capabilities are built."
      tone="graphite"
    />
    <div class="mt-14 grid gap-10 md:grid-cols-2 lg:gap-16" data-reveal-group>
      <div data-reveal>
        <h3 class="text-xl font-display font-semibold text-graphite-fg mb-4">Definition and core principles</h3>
        <p class="text-graphite-fg-2 leading-relaxed mb-4">
          Cloud architecture is the systematic design of cloud environments to meet specific business, technical, and operational requirements. It encompasses everything from account structure and network topology to identity federation, security controls, observability pipelines, and cost governance.
        </p>
        <p class="text-graphite-fg-2 leading-relaxed">
          The core principles include security by design, least privilege access, infrastructure as code, immutable infrastructure, automated recovery, cost awareness, and continuous optimization.
        </p>
      </div>
      <div data-reveal>
        <h3 class="text-xl font-display font-semibold text-graphite-fg mb-4">Why cloud architecture matters</h3>
        <p class="text-graphite-fg-2 leading-relaxed mb-4">
          Without deliberate architecture, cloud environments evolve organically. Teams provision resources independently. Security policies are applied inconsistently. Costs grow without visibility. The resulting environment is fragile, expensive, and difficult to govern.
        </p>
        <p class="text-graphite-fg-2 leading-relaxed">
          A well-designed cloud architecture transforms the cloud from a collection of services into a cohesive platform. It provides standard patterns for networking, security, and deployment while enabling self-service with guardrails.
        </p>
      </div>
      <div data-reveal>
        <h3 class="text-xl font-display font-semibold text-graphite-fg mb-4">Cloud architecture vs. cloud migration</h3>
        <p class="text-graphite-fg-2 leading-relaxed mb-4">
          Cloud migration is the process of moving workloads from on-premises or one cloud to another. Cloud architecture is the design that determines how those workloads will run once they arrive. Migration without architecture produces lift-and-shift outcomes that replicate on-premises limitations in the cloud.
        </p>
        <p class="text-graphite-fg-2 leading-relaxed">
          Architecture must precede migration. The target architecture defines networking, security, identity, observability, and operational models before workloads begin moving.
        </p>
      </div>
      <div data-reveal>
        <h3 class="text-xl font-display font-semibold text-graphite-fg mb-4">Cloud architecture vs. infrastructure management</h3>
        <p class="text-graphite-fg-2 leading-relaxed mb-4">
          Infrastructure management focuses on day-to-day operations: provisioning, patching, monitoring, and incident response. Cloud architecture defines the structure, standards, and patterns that make infrastructure management effective.
        </p>
        <p class="text-graphite-fg-2 leading-relaxed">
          Architecture is the design phase. Management is the operational phase. Well-architected environments are easier to manage, cheaper to operate, and more resilient.
        </p>
      </div>
      <div data-reveal class="md:col-span-2">
        <h3 class="text-xl font-display font-semibold text-graphite-fg mb-4">Common misconceptions</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-graphite-fg-2">
              <span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" />
              <span><strong class="text-graphite-fg">Architecture is not just diagrams.</strong> Cloud architecture produces decisions, standards, and automation, not just Visio files.</span>
            </li>
            <li class="flex items-start gap-3 text-graphite-fg-2">
              <span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" />
              <span><strong class="text-graphite-fg">Cloud is not inherently cheaper.</strong> Without architecture and FinOps, cloud costs can exceed on-premises.</span>
            </li>
            <li class="flex items-start gap-3 text-graphite-fg-2">
              <span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" />
              <span><strong class="text-graphite-fg">Multi-cloud is not always the answer.</strong> A well-architected single cloud often outperforms a poorly architected multi-cloud.</span>
            </li>
          </ul>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-graphite-fg-2">
              <span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" />
              <span><strong class="text-graphite-fg">Cloud architecture is not a one-time project.</strong> Architecture must be continuously reviewed and adapted.</span>
            </li>
            <li class="flex items-start gap-3 text-graphite-fg-2">
              <span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" />
              <span><strong class="text-graphite-fg">Security is not separate from architecture.</strong> Security must be designed into every layer, not added as an afterthought.</span>
            </li>
            <li class="flex items-start gap-3 text-graphite-fg-2">
              <span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" />
              <span><strong class="text-graphite-fg">Kubernetes is not required for cloud-native.</strong> Cloud-native encompasses serverless, containers, managed services, and PaaS.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
"""

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(part1)
print("Part 1 written")

# Part 2: Section 3 (Business Challenges)
part2 = """
<!-- 3. BUSINESS CHALLENGES -->
<section class="py-20 md:py-28" aria-labelledby="challenges-heading">
  <div class="container-x">
    <SectionHeading
      id="challenges-heading"
      index="03"
      label="Business Challenges"
      title="The cost of operating without cloud architecture."
      lede="Organizations that neglect cloud architecture accumulate technical debt, operational risk, and cost inefficiencies that compound over time. These are the challenges we address across every engagement."
    />
    <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
"""
challenges = [
    ("Legacy infrastructure", "Aging on-premises data centers require capital-intensive hardware refreshes, complex maintenance, and specialized staff. Architectural debt limits the ability to adopt modern practices."),
    ("Cloud migration complexity", "Migrating to the cloud without a defined target architecture leads to cost overruns, security gaps, and architectures that fail to leverage cloud-native capabilities."),
    ("Security risks", "Misconfigured cloud resources are the leading cause of data breaches. Without architecture-level security controls, environments are vulnerable to attack and data exfiltration."),
    ("High cloud costs", "Unmanaged cloud spending grows faster than revenue. Orphaned resources, over-provisioned instances, and lack of cost allocation create budget overruns."),
    ("Vendor lock-in", "Tight coupling to proprietary cloud services makes migration costly and reduces negotiating leverage. Architecture should preserve optionality."),
    ("Poor scalability", "Manual scaling, fixed capacity, and monolithic designs cannot respond to traffic variations or support business growth."),
    ("Low resilience", "Single points of failure, lack of redundancy, and manual recovery procedures cause prolonged outages that impact customers."),
    ("Operational complexity", "Ad hoc environments, manual processes, and inconsistent tooling create operational overhead that grows faster than the engineering team."),
    ("Disaster recovery limitations", "Traditional backup and restore approaches are slow, fragile, and rarely tested. RTO and RPO cannot be met without automated replication and multi-region architecture."),
    ("Compliance requirements", "Frameworks such as SOC 2, HIPAA, PCI DSS, GDPR, and FedRAMP require demonstrable controls that cannot be retrofitted easily."),
    ("Multi-cloud management", "Operating across multiple cloud providers without consistent architecture multiplies complexity. Each provider has different APIs and security models."),
    ("Performance bottlenecks", "Poorly architected networking, suboptimal instance selection, and unoptimized databases create latency and throughput issues."),
]

for i, (title, desc) in enumerate(challenges, 1):
    part2 += f"""      <div class="rounded-lg border border-line-2 bg-paper p-6" data-reveal>
        <div class="flex items-center gap-3 mb-3">
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">{i:02d}</span>
          <h3 class="font-display font-semibold text-ink">{title}</h3>
        </div>
        <p class="text-sm text-ink-2 leading-relaxed">{desc}</p>
      </div>
"""

part2 += """    </div>
  </div>
</section>
"""

with open(filepath, 'a', encoding='utf-8') as f:
    f.write(part2)
print("Part 2 written")

# Part 3: Section 4 (Approach)
part3 = """
<!-- 4. OUR CLOUD ARCHITECTURE APPROACH -->
<section class="py-20 md:py-28 bg-graphite" aria-labelledby="approach-heading">
  <div class="container-x">
    <SectionHeading
      id="approach-heading"
      index="04"
      label="Our Approach"
      title="A phased methodology for cloud architecture."
      lede="We follow a structured, outcome-driven approach to cloud architecture. Every phase is grounded in your business context, technical requirements, and risk tolerance."
      tone="graphite"
    />
    <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
"""
phases = [
    ("Cloud Readiness Assessment", "Evaluate your current infrastructure, applications, security posture, team skills, and operational maturity. We produce a cloud readiness score with prioritized recommendations."),
    ("Current-State Architecture Review", "Analyze your existing architecture across all domains: networking, security, identity, compute, storage, databases, observability, and operations."),
    ("Business & Technical Requirements", "Capture and prioritize business objectives, compliance requirements, performance targets, availability SLAs, cost constraints, and team capabilities."),
    ("Cloud Strategy", "Define the cloud strategy: provider selection, deployment model, migration approach, and high-level architecture direction aligned with business goals."),
    ("Target Architecture Design", "Design the target-state architecture: account structure, network topology, security boundaries, identity federation, compute platforms, and integration patterns."),
    ("Security Architecture", "Design security across all layers: network segmentation, encryption standards, secrets management, identity and access management, and security monitoring."),
    ("Network Architecture", "Design network topology: VPC architecture, transit connectivity, hybrid networking, load balancing, CDN, DNS, and network security controls."),
    ("Identity & Access Design", "Design identity architecture: federation, directory services, RBAC, privilege management, workload identity, and just-in-time access."),
    ("Infrastructure Automation", "Design the automation foundation: IaC strategy, module registry, state management, CI/CD pipelines, GitOps workflows, and compliance validation."),
    ("Platform Engineering", "Design internal developer platforms: self-service infrastructure, golden paths, developer portals, service catalog, and paved roads."),
    ("Observability", "Design observability architecture: metrics, traces, and logs pipelines, instrumentation standards, SLO frameworks, and incident management integration."),
    ("Governance", "Establish cloud governance: policy as code, budget controls, compliance automation, cost allocation, tagging standards, and architecture review processes."),
    ("Optimization", "Optimize for cost, performance, and reliability. Right-sizing, reserved and spot instance strategies, auto-scaling policies, and storage tiering."),
    ("Continuous Improvement", "Establish review cycles, maturity tracking, feedback loops, and iteration practices to ensure architecture evolves with your business and technology."),
]

for i, (title, desc) in enumerate(phases, 1):
    part3 += f"""      <div class="rounded-lg border border-graphite-line bg-graphite-2 p-6" data-reveal>
        <span class="block font-mono text-xs text-accent-bright mb-3">{i:02d}</span>
        <h3 class="font-display font-semibold text-graphite-fg mb-2">{title}</h3>
        <p class="text-sm text-graphite-fg-2 leading-relaxed">{desc}</p>
      </div>
"""

part3 += """    </div>
  </div>
</section>
"""

with open(filepath, 'a', encoding='utf-8') as f:
    f.write(part3)
print("Part 3 written")

# Part 4: Section 5 (Services)
part4 = """
<!-- 5. CLOUD ARCHITECTURE SERVICES -->
<section class="py-20 md:py-28" aria-labelledby="services-heading">
  <div class="container-x">
    <SectionHeading
      id="services-heading"
      index="05"
      label="Our Services"
      title="End-to-end cloud architecture capabilities."
      lede="From strategic advisory through hands-on implementation and managed operations, we provide the full spectrum of cloud architecture services."
    />
    <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
"""

services = [
    ("Cloud Strategy & Advisory", "Define your cloud vision, strategy, and roadmap. Provider selection, adoption model, migration sequencing, and business case development.", ["Cloud maturity assessment", "Provider evaluation and selection", "3-5 year cloud roadmap"]),
    ("Cloud Architecture Design", "Comprehensive architecture design covering account structure, networking, security, identity, compute, storage, databases, and operations.", ["Target-state architecture design", "Architecture decision records", "Reference architecture development"]),
    ("Cloud Migration Planning", "Develop comprehensive migration plans with workload assessment, dependency mapping, wave sequencing, and rollback procedures.", ["Workload discovery and assessment", "Migration wave planning", "Cutover, validation, and rollback"]),
    ("Multi-Cloud Architecture", "Design multi-cloud architectures that distribute workloads strategically. Avoid lock-in, optimize costs, leverage best-in-class services.", ["Provider selection and placement", "Inter-cloud networking and data", "Consistent identity and policy"]),
    ("Hybrid Cloud Architecture", "Design hybrid architectures bridging on-premises and cloud. Consistent networking, identity, security, and operations across all environments.", ["Hybrid networking and connectivity", "Consistent Kubernetes across sites", "Data synchronization and replication"]),
    ("Cloud-Native Architecture", "Design architectures leveraging containers, serverless, managed services, and event-driven patterns for scalability and resilience.", ["Container and serverless strategy", "Managed service evaluation", "Event-driven and microservices"]),
    ("Kubernetes Architecture", "Design production-grade Kubernetes platforms: cluster topology, networking, security, multi-tenancy, GitOps, and day-2 operations.", ["Cluster architecture and lifecycle", "Multi-tenancy and network policy", "Service mesh and ingress"]),
    ("Platform Architecture", "Design internal developer platforms with self-service infrastructure, golden paths, and paved roads that accelerate delivery.", ["IDP design and architecture", "Developer portal and catalog", "Golden path and templates"]),
    ("Infrastructure as Code", "Implement IaC across your cloud footprint with Terraform, OpenTofu, Pulumi, or Crossplane. Tested, versioned, and reusable modules.", ["Module registry and publishing", "State management and locking", "Drift detection and remediation"]),
    ("Landing Zone Design", "Design cloud landing zones: multi-account structure, network architecture, security baselines, identity federation, and governance.", ["Multi-account architecture", "Network and security baseline", "Logging, monitoring, and cost"]),
    ("Identity & Access Architecture", "Design enterprise identity: federated identity, SSO, RBAC, privilege access management, workload identity, and just-in-time access.", ["Identity federation and directory", "RBAC and ABAC design", "Privileged access management"]),
    ("Network Architecture", "Design cloud network architectures: VPC design, transit networking, hybrid connectivity, load balancing, CDN, DNS, and security.", ["VPC and subnet architecture", "Transit gateway and hybrid connectivity", "Load balancing, CDN, and DNS"]),
    ("Disaster Recovery Design", "Design DR architectures: RTO/RPO definition, replication strategies, failover automation, testing, and multi-region patterns.", ["DR strategy and objectives", "Multi-region and multi-zone design", "Automated failover and testing"]),
    ("High Availability Architecture", "Design HA architectures: multi-AZ deployment, auto-scaling, load balancing, health checks, circuit breakers, and graceful degradation.", ["Multi-AZ and multi-region HA", "Auto-scaling and elasticity", "Health checking and self-healing"]),
    ("API Architecture", "Design API platforms: gateways, authentication, rate limiting, schema validation, versioning, developer portals, and lifecycle management.", ["API gateway architecture", "API security and rate limiting", "Developer portal and docs"]),
    ("Event-Driven Architecture", "Design event-driven systems: event taxonomy, message brokers, stream processing, event sourcing, CQRS, and event governance.", ["Event schema and governance", "Message broker and streaming", "Idempotency and exactly-once"]),
    ("Cost Optimization", "Analyze and optimize cloud spending. Right-sizing, reserved and spot instances, auto-scaling, storage tiering, and FinOps practices.", ["Cost analysis and observability", "Resource right-sizing", "Reserved and spot strategy"]),
    ("Security Architecture", "Design comprehensive security: network security, encryption, secrets management, identity, vulnerability management, and monitoring.", ["Cloud security posture management", "Encryption and secrets", "Security monitoring and SIEM"]),
    ("Compliance Architecture", "Design architectures meeting regulatory requirements: data residency, encryption, access controls, audit trails, and automation.", ["Compliance control mapping", "Automated compliance validation", "Audit evidence and reporting"]),
    ("Cloud Modernization", "Modernize existing cloud architectures to leverage cloud-native capabilities. Migration from legacy patterns to managed services.", ["Modernization assessment", "Managed service adoption", "Legacy pattern migration"]),
    ("Cloud Governance", "Establish governance frameworks: policy as code, budget controls, cost allocation, tagging standards, and compliance monitoring.", ["Governance framework design", "Cost governance and FinOps", "Compliance monitoring"]),
    ("Managed Cloud Architecture", "Ongoing architecture advisory and management. Continuous review, optimization, governance, and evolution as a managed service.", ["Continuous architecture advisory", "Ongoing optimization", "Maturity tracking"]),
]

for title, desc, bullets in services:
    part4 += f"""      <div class="rounded-lg border border-line-2 bg-paper p-7" data-reveal>
        <div class="font-mono text-xs text-accent mb-3">SERVICE</div>
        <h3 class="text-lg font-display font-semibold text-ink mb-2">{title}</h3>
        <p class="text-sm text-ink-2 leading-relaxed mb-4">{desc}</p>
        <ul class="space-y-1.5">
"""
    for b in bullets:
        part4 += f"""          <li class="flex items-center gap-2 text-xs text-ink-3"><span class="block h-1 w-1 rounded-full bg-accent" aria-hidden="true" /> {b}</li>
"""
    part4 += """        </ul>
      </div>
"""

part4 += """    </div>
  </div>
</section>
"""

with open(filepath, 'a', encoding='utf-8') as f:
    f.write(part4)
print("Part 4 written")

# Part 5: Section 6 (Architecture Domains)
part5 = """
<!-- 6. ARCHITECTURE DOMAINS -->
<section class="py-20 md:py-28 bg-graphite" aria-labelledby="domains-heading">
  <div class="container-x">
    <SectionHeading
      id="domains-heading"
      index="06"
      label="Architecture Domains"
      title="Deep expertise across every cloud architecture layer."
      lede="Cloud architecture spans multiple technical domains. Our team brings deep hands-on expertise across every layer, from infrastructure through application architecture and operations."
      tone="graphite"
    />
    <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-reveal-group>
"""
domains = [
    ("Infrastructure Architecture", "Compute, storage, and networking design. Instance families, auto-scaling, storage tiers, volume management, and infrastructure lifecycle automation."),
    ("Network Architecture", "VPC design, subnetting, transit gateways, VPN, Direct Connect, load balancing, CDN, DNS, network segmentation, and firewall architecture."),
    ("Identity & Access Management", "Federated identity, SSO, RBAC, ABAC, privileged access, workload identity, OAuth 2.0, OIDC, SAML, and just-in-time access."),
    ("Cloud Security", "Zero-trust architecture, encryption, secrets management, vulnerability management, security monitoring, CSPM, and incident response."),
    ("Kubernetes Platforms", "Production cluster design, multi-cluster management, networking, security policies, service mesh, GitOps, and day-2 operations."),
    ("Platform Engineering", "Internal developer platforms, developer portals, self-service infrastructure, golden paths, service catalogs, and paved roads."),
    ("Storage Architecture", "Object, block, and file storage. Data lifecycle policies, storage classes, backup strategies, and replication across regions."),
    ("Database Architecture", "Relational and NoSQL selection, managed services, replication, read replicas, sharding, connection pooling, and migration planning."),
    ("API Architecture", "API gateway design, REST and gRPC patterns, authentication, rate limiting, schema validation, versioning, and developer portals."),
    ("Integration Architecture", "Enterprise integration patterns, message brokers, event buses, service mesh, data synchronization, and hybrid integration."),
    ("Event-Driven Systems", "Event sourcing, CQRS, stream processing, event schema governance, broker selection, and exactly-once processing semantics."),
    ("High Availability", "Multi-AZ and multi-region architecture, active-active and active-passive patterns, health checking, auto-scaling, and circuit breakers."),
    ("Disaster Recovery", "RTO and RPO definition, backup and restore, pilot light, warm standby, multi-region active-active, and failover automation."),
    ("Observability", "Metrics, traces, and logs pipelines, OpenTelemetry instrumentation, SLO frameworks, burn-rate alerting, and dashboards."),
    ("Cost Optimization", "FinOps, cost allocation and showback, right-sizing, reserved and spot instances, auto-scaling, storage tiering, and continuous optimization."),
    ("Cloud Governance", "Policy as code, compliance automation, resource tagging, budget controls, approval workflows, and architecture review."),
]

for title, desc in domains:
    part5 += f"""      <div class="rounded-lg border border-graphite-line bg-graphite-2 p-6" data-reveal>
        <h3 class="font-display font-semibold text-graphite-fg mb-2">{title}</h3>
        <p class="text-sm text-graphite-fg-2 leading-relaxed">{desc}</p>
      </div>
"""

part5 += """    </div>
  </div>
</section>
"""

with open(filepath, 'a', encoding='utf-8') as f:
    f.write(part5)
print("Part 5 written")

# Part 6: Section 7 (Framework)
part6 = """
<!-- 7. CLOUD ARCHITECTURE FRAMEWORK -->
<section class="py-20 md:py-28" aria-labelledby="framework-heading">
  <div class="container-x">
    <SectionHeading
      id="framework-heading"
      index="07"
      label="Architecture Framework"
      title="A layered framework for enterprise cloud architecture."
      lede="We organize cloud architecture into distinct layers, each with specific concerns, standards, and best practices. This layered framework ensures complete coverage for every architectural domain."
    />
    <div class="mt-14 space-y-16" data-reveal-group>
"""
layers = [
    ("Business Layer", "Business capabilities, value streams, organizational structure, and strategic objectives driving all architecture decisions.", ["Business capability mapping", "Value stream analysis", "Operating model design", "Investment planning"], "Business capability map showing capabilities, maturity levels, and supporting technology systems."),
    ("Cloud Strategy Layer", "Cloud adoption strategy, provider selection, deployment model, landing zone architecture, and migration roadmap.", ["Provider selection", "Landing zone design", "Account structure", "Migration planning"], "Landing zone diagram showing multi-account structure, network topology, and shared services."),
    ("Identity Layer", "Identity federation, directory services, authentication, authorization, privilege management, and workload identity.", ["Federated identity and SSO", "RBAC and ABAC", "Privileged access management", "Secrets management"], "Identity diagram showing federation, directory integration, authentication flows, and access boundaries."),
    ("Network Layer", "Network topology, connectivity, segmentation, load balancing, CDN, DNS, and network security across all environments.", ["VPC and subnet design", "Transit and hybrid connectivity", "Load balancing and CDN", "Firewall and segmentation"], "Network topology diagram showing VPCs, subnets, transit gateways, VPN, and CDN distribution."),
    ("Compute Layer", "Virtual machines, container orchestration, serverless, auto-scaling, instance families, and compute lifecycle management.", ["Instance selection and families", "Auto-scaling and spot instances", "Capacity planning", "Compute optimization"], "Compute architecture diagram showing instance families, auto-scaling, and placement groups."),
    ("Container Platform", "Kubernetes cluster architecture, container orchestration, service mesh, image management, and container security.", ["Cluster topology and node pools", "RBAC and network policies", "Service mesh and ingress", "Image scanning and security"], "Kubernetes platform diagram showing cluster architecture, networking, ingress, and service mesh."),
    ("Storage Layer", "Object, block, and file storage. Data lifecycle policies, backup, replication, and disaster recovery for persistent data.", ["Storage class selection", "Data lifecycle and tiering", "Backup and replication", "Encryption and access"], "Storage diagram showing classes, lifecycle, backup pipelines, and replication topology."),
    ("Database Layer", "Relational and NoSQL database selection, managed services, replication, migration, and database operations at scale.", ["Engine selection and managed vs self-managed", "Replication and read replicas", "Sharding and pooling", "Backup and migration"], "Database diagram showing instances, replication, read replicas, backup pipelines, and access."),
    ("Integration Layer", "API gateways, message brokers, event buses, service mesh, and integration platforms connecting applications and data.", ["Gateway and broker selection", "Service mesh and integration", "Schema governance", "Protocol translation"], "Integration diagram showing gateways, brokers, event buses, service mesh, and integration flows."),
    ("Security Layer", "Security controls across all layers: network security, identity, encryption, secrets, monitoring, and incident response.", ["Zero-trust architecture", "Encryption and secrets", "CSPM and vulnerability", "SIEM and incident response"], "Security diagram showing defense-in-depth layers, controls, monitoring, and incident response."),
    ("Observability Layer", "Metrics, traces, and logs pipelines, instrumentation, dashboards, alerting, SLOs, and incident management.", ["OpenTelemetry instrumentation", "Metrics, traces, and logs", "SLO frameworks and alerts", "Dashboards and on-call"], "Observability diagram showing collection, pipeline topology, storage, dashboards, and alerting."),
    ("Automation Layer", "IaC, CI/CD, GitOps, policy as code, configuration management, and automated compliance validation.", ["IaC tooling and modules", "CI/CD and GitOps", "Policy enforcement", "Compliance automation"], "Automation diagram showing IaC pipeline, CI/CD, GitOps sync, policy enforcement, and compliance."),
    ("Governance Layer", "Cost governance, compliance automation, resource management, architecture review, and continuous improvement.", ["Policy as code and budgets", "Cost allocation and showback", "Architecture review", "Maturity tracking"], "Governance diagram showing policy hierarchy, enforcement, cost workflow, and review cycles."),
]

for idx, (title, desc, concerns, diagram) in enumerate(layers, 1):
    concern_items = "".join(f"<p class='mt-1 text-sm text-ink-2'>{c}</p>" for c in concerns)
    part6 += f"""      <div class="grid gap-8 md:grid-cols-5" data-reveal>
        <div class="md:col-span-2">
          <span class="block font-mono text-xs text-accent mb-2">LAYER {idx:02d}</span>
          <h3 class="text-2xl font-display font-semibold text-ink">{title}</h3>
          <p class="mt-2 text-sm text-ink-2">{desc}</p>
        </div>
        <div class="md:col-span-3 grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-line-2 bg-paper-2 p-4">
            <p class="text-xs font-mono text-accent">KEY CONCERNS</p>
{concern_items}
          </div>
          <div class="rounded-lg border border-line-2 bg-paper-2 p-4">
            <p class="text-xs font-mono text-accent">RECOMMENDED DIAGRAM</p>
            <p class="mt-1 text-sm text-ink-2">{diagram}</p>
          </div>
        </div>
      </div>
"""

part6 += """    </div>
  </div>
</section>
"""

with open(filepath, 'a', encoding='utf-8') as f:
    f.write(part6)
print("Part 6 written")

# Part 7: Sections 8-9 (Technologies + Principles)
part7 = """
<!-- 8. TECHNOLOGIES -->
<section class="py-20 md:py-28 bg-graphite" aria-labelledby="tech-heading">
  <div class="container-x">
    <SectionHeading
      id="tech-heading"
      index="08"
      label="Technologies"
      title="Tools and platforms we architect with."
      lede="We maintain deep expertise across the cloud ecosystem. Our technology recommendations are driven by your requirements, not vendor relationships."
      tone="graphite"
    />
    <div class="mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-4" data-reveal-group>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Cloud Providers</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">Amazon Web Services</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Microsoft Azure</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Google Cloud Platform</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Oracle Cloud Infrastructure</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">OpenStack</li>
        </ul>
      </div>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Containers &amp; Orchestration</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">Docker</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Kubernetes</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Helm</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Kustomize</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Argo CD</li>
        </ul>
      </div>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Infrastructure as Code</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">Terraform</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">OpenTofu</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Pulumi</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Ansible</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Crossplane</li>
        </ul>
      </div>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Networking</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">Cloud Load Balancers</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">API Gateway</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Kong</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">NGINX</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Cilium</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Istio</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Linkerd</li>
        </ul>
      </div>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Observability</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">Prometheus</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Grafana</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">OpenTelemetry</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Loki</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Tempo</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Jaeger</li>
        </ul>
      </div>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Security</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">HashiCorp Vault</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">OPA</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Kyverno</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Cert-Manager</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Trivy</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Falco</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Cosign</li>
        </ul>
      </div>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Databases</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">PostgreSQL</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">MySQL</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">MongoDB</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Redis</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">ClickHouse</li>
        </ul>
      </div>
      <div data-reveal>
        <h3 class="font-mono text-xs text-accent-bright mb-4">Programming Languages</h3>
        <ul class="space-y-2">
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2">Go</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">Python</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 ml-2">TypeScript</li>
          <li class="inline-block rounded-full border border-graphite-line px-3.5 py-1.5 text-sm text-graphite-fg-2 mt-2">Java</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- 9. CLOUD ARCHITECTURE PRINCIPLES -->
<section class="py-20 md:py-28" aria-labelledby="principles-heading">
  <div class="container-x">
    <SectionHeading
      id="principles-heading"
      index="09"
      label="Architecture Principles"
      title="The engineering principles that guide every architecture."
      lede="Our cloud architecture practice is grounded in proven principles that ensure every design is secure, scalable, maintainable, and aligned with business objectives."
    />
    <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal-group>
"""
principles = [
    ("Security by Design", "Security is not an add-on. Every decision considers threat models, encryption, access controls, and compliance from the first design iteration."),
    ("Least Privilege Access", "Every identity receives minimum required permissions. Just-in-time access, scoped roles, and continuous permission boundary enforcement."),
    ("Infrastructure as Code", "All infrastructure defined in version-controlled, tested, reusable code. Environments are reproducible, auditable, and recoverable from source control."),
    ("Automation First", "Any manual process is a risk. We automate provisioning, deployment, testing, security scanning, and compliance validation."),
    ("Scalability", "Systems designed to scale horizontally. Auto-scaling, distributed architectures, and stateless patterns ensure growth without re-architecture."),
    ("Elasticity", "Infrastructure scales dynamically with demand. Resources provisioned and deprovisioned automatically, matching load without over-provisioning."),
    ("High Availability", "Multi-AZ deployment, redundancy, health checking, and automated failover ensure minimal downtime through component failures."),
    ("Resilience", "Systems withstand and recover from failures. Circuit breakers, bulkheads, retry logic, graceful degradation, and self-healing mechanisms."),
    ("Fault Tolerance", "No single component failure causes system outage. Redundancy, replication, multi-region deployment, and automated recovery."),
    ("Cost Awareness", "Every decision considers TCO. Cost allocation, showback, right-sizing, and FinOps ensure architectures are financially sustainable."),
    ("Observability", "Every component produces metrics, traces, and logs. SLOs, dashboards, and alerting provide real-time visibility."),
    ("Open Standards", "We prioritize open standards: OpenTelemetry, OIDC, OPA, Kubernetes, Terraform. Portability and reduced lock-in risk."),
    ("Vendor Neutrality", "Architecture preserves optionality. We design for portability and avoid deep coupling to any single provider's proprietary services."),
    ("Continuous Optimization", "Architecture is never finished. Regular reviews, analysis, and maturity assessments ensure evolution with business needs."),
]

for title, desc in principles:
    part7 += f"""      <div class="rounded-lg border border-line-2 bg-paper p-6" data-reveal>
        <h3 class="font-display font-semibold text-ink mb-2">{title}</h3>
        <p class="text-sm text-ink-2 leading-relaxed">{desc}</p>
      </div>
"""

part7 += """    </div>
  </div>
</section>
"""

with open(filepath, 'a', encoding='utf-8') as f:
    f.write(part7)
print("Part 7 written")

# Part 8: Sections 10-15
part8 = """
<!-- 10. BENEFITS -->
<section class="py-20 md:py-28 bg-graphite" aria-labelledby="benefits-heading">
  <div class="container-x">
    <SectionHeading
      id="benefits-heading"
      index="10"
      label="Benefits"
      title="What well-architected cloud delivers."
      lede="The return on cloud architecture investment is measured in efficiency, resilience, security, cost, and team velocity."
      tone="graphite"
    />
    <div class="mt-14 grid gap-10 md:grid-cols-2" data-reveal-group>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR EXECUTIVE LEADERSHIP</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Faster time to market</p><p class="text-sm text-graphite-fg-2">Self-service platforms and automated pipelines reduce time from idea to production from months to days.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Lower total cost of ownership</p><p class="text-sm text-graphite-fg-2">Well-architected environments eliminate waste and reduce operational overhead by 40-60 percent.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Improved business agility</p><p class="text-sm text-graphite-fg-2">Modular architectures enable response to market changes without large-scale rework.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Reduced risk</p><p class="text-sm text-graphite-fg-2">Automated compliance, security by design, and proven DR reduce operational, security, and regulatory risk.</p></div></li>
      </ul></div>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR ENGINEERING TEAMS</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Self-service infrastructure</p><p class="text-sm text-graphite-fg-2">Provision environments and deploy services without waiting for operations teams.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Consistent environments</p><p class="text-sm text-graphite-fg-2">Every environment identical, reproducible, and disposable. No configuration drift.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Golden paths to production</p><p class="text-sm text-graphite-fg-2">Standardized paths reduce decision fatigue and accelerate delivery.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Reduced cognitive load</p><p class="text-sm text-graphite-fg-2">Platform abstractions hide complexity so teams focus on business logic.</p></div></li>
      </ul></div>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR PLATFORM TEAMS</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Standardized infrastructure</p><p class="text-sm text-graphite-fg-2">Reusable modules and consistent patterns reduce duplication and enforcement burden.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Observability built in</p><p class="text-sm text-graphite-fg-2">Metrics, traces, and logs standardized. Dashboards and alerts provisioned automatically.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Policy as code</p><p class="text-sm text-graphite-fg-2">Security and compliance policies enforced automatically, reducing manual overhead.</p></div></li>
      </ul></div>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR OPERATIONS</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Automated recovery</p><p class="text-sm text-graphite-fg-2">Self-healing infrastructure reduces MTTR from hours to minutes.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Reduced toil</p><p class="text-sm text-graphite-fg-2">Automation eliminates manual provisioning and recovery. Focus on engineering, not firefighting.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Unified observability</p><p class="text-sm text-graphite-fg-2">Single pane of glass across all environments with standardized dashboards and alerts.</p></div></li>
      </ul></div>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR SECURITY</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Security by default</p><p class="text-sm text-graphite-fg-2">Controls embedded in the architecture. Every new environment inherits security baselines.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Continuous compliance</p><p class="text-sm text-graphite-fg-2">Policy as code ensures continuous compliance validation. Audit evidence generated automatically.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Complete visibility</p><p class="text-sm text-graphite-fg-2">Security monitoring, vulnerability scanning, and threat detection across all layers.</p></div></li>
      </ul></div>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR FINANCE</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Predictable cloud costs</p><p class="text-sm text-graphite-fg-2">Governance, budgets, and allocation models eliminate surprise bills and enable accurate forecasting.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Showback and chargeback</p><p class="text-sm text-graphite-fg-2">Allocation models drive accountability and optimization across business units.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Optimized spend</p><p class="text-sm text-graphite-fg-2">Right-sizing, reserved instances, and storage tiering reduce cloud spend by 40-60 percent.</p></div></li>
      </ul></div>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR COMPLIANCE</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Automated evidence collection</p><p class="text-sm text-graphite-fg-2">Compliance evidence collected and reported automatically, reducing audit prep from weeks to hours.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Policy enforcement</p><p class="text-sm text-graphite-fg-2">Compliance enforced at the architecture level. Non-compliant configurations prevented, not detected.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Audit-ready architecture</p><p class="text-sm text-graphite-fg-2">Every decision documented. Change history immutable. Reports generated on demand.</p></div></li>
      </ul></div>
      <div data-reveal><h3 class="font-mono text-xs text-accent-bright mb-4">FOR CUSTOMERS</h3><ul class="space-y-4">
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Fast, reliable experiences</p><p class="text-sm text-graphite-fg-2">Well-architected systems deliver consistent performance and high availability.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Secure by default</p><p class="text-sm text-graphite-fg-2">Customer data protected by architecture-level encryption and access controls.</p></div></li>
        <li class="flex items-start gap-3"><span class="block h-1.5 w-1.5 rounded-full bg-accent-bright mt-2 shrink-0" aria-hidden="true" /><div><p class="font-medium text-graphite-fg">Continuous improvement</p><p class="text-sm text-graphite-fg-2">Platforms continuously improve without customer-visible disruption.</p></div></li>
      </ul></div>
    </div>
  </div>
</section>

<!-- 11. ENGAGEMENT MODEL -->
<section class="py-20 md:py-28" aria-labelledby="engagement-heading">
  <div class="container-x">
    <SectionHeading
      id="engagement-heading"
      index="11"
      label="Engagement Model"
      title="How we work with your organization."
      lede="Our engagement model delivers immediate value while building long-term architecture capability. Every engagement is tailored to your context and outcomes."
    />
    <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5" data-reveal-group>
"""
phases_engagement = [
    ("Discovery", "Understand your business objectives, technical landscape, team capabilities, and constraints. Establish scope and success criteria."),
    ("Cloud Assessment", "Comprehensive assessment of current architecture, security, cost, operational maturity, and migration readiness."),
    ("Architecture Design", "Design the target architecture with decision records, reference architectures, and implementation specifications."),
    ("Proof of Concept", "Validate architecture decisions through targeted PoC implementations. Demonstrate patterns and measure outcomes."),
    ("Migration Planning", "Detailed migration plans with workload sequencing, dependency mapping, cutover, and rollback procedures."),
    ("Implementation", "Hands-on implementation of landing zones, networking, security, automation, observability, and platform components."),
    ("Validation", "Rigorous validation: security testing, performance testing, chaos engineering, DR testing, and compliance verification."),
    ("Knowledge Transfer", "Documentation, runbooks, training, and mentoring to ensure your team can operate and evolve the architecture."),
    ("Operational Handover", "Structured handover with SLAs, runbooks, escalation procedures, and a transition period with architect support."),
    ("Continuous Advisory", "Ongoing architecture reviews, optimization recommendations, technology evaluation, and governance support."),
]

for i, (title, desc) in enumerate(phases_engagement, 1):
    part8 += f"""      <div class="rounded-lg border border-line-2 bg-paper p-6" data-reveal>
        <span class="block font-mono text-xs text-accent mb-3">PHASE {i:02d}</span>
        <h3 class="font-display font-semibold text-ink mb-2">{title}</h3>
        <p class="text-sm text-ink-2 leading-relaxed">{desc}</p>
      </div>
"""

part8 += """    </div>
  </div>
</section>

<!-- 12. WHY CHOOSE SUBSTRATE -->
<section class="py-20 md:py-28 bg-graphite" aria-labelledby="why-heading">
  <div class="container-x">
    <SectionHeading
      id="why-heading"
      index="12"
      label="Why Substrate"
      title="Ten reasons enterprises choose us for cloud architecture."
      lede="Our practice is built on engineering excellence, vendor independence, and a commitment to measurable outcomes."
      tone="graphite"
    />
    <div class="mt-14 grid gap-6 md:grid-cols-2" data-reveal-group>
"""
reasons = [
    ("Engineering-first approach", "We are engineers who build. Every recommendation is backed by hands-on experience, not theoretical frameworks."),
    ("Vendor-neutral recommendations", "No financial incentives with any provider. Recommendations based solely on your requirements."),
    ("Platform engineering expertise", "We design platforms for self-service, reduced cognitive load, and standardized delivery."),
    ("Cloud-native architecture", "We design for cloud-native patterns: containers, serverless, managed services, and event-driven architectures."),
    ("Security-first mindset", "Security embedded in every decision. Zero-trust, encryption by default, and continuous compliance."),
    ("Automation-first delivery", "Everything automated: IaC, CI/CD, GitOps, policy as code for consistency and auditability."),
    ("Enterprise governance", "Governance frameworks balancing control with velocity. Policy as code and compliance automation."),
    ("Open standards", "OpenTelemetry, OIDC, Kubernetes, Terraform, OPA. No single-vendor lock-in."),
    ("Long-term partnership", "Ongoing advisory, optimization, and governance. Architecture is a continuous practice."),
    ("Knowledge transfer", "Comprehensive training, documentation, and mentoring. Your team gains independence."),
]

for i, (title, desc) in enumerate(reasons, 1):
    part8 += f"""      <div class="flex items-start gap-4 border-b border-graphite-line pb-6" data-reveal>
        <span class="shrink-0 font-mono text-2xl font-semibold text-accent-bright">{i:02d}</span>
        <div>
          <h3 class="font-display font-semibold text-graphite-fg">{title}</h3>
          <p class="text-sm text-graphite-fg-2 mt-1">{desc}</p>
        </div>
      </div>
"""

part8 += """    </div>
  </div>
</section>

<!-- 13. INDUSTRIES -->
<section class="py-20 md:py-28" aria-labelledby="industries-heading">
  <div class="container-x">
    <SectionHeading
      id="industries-heading"
      index="13"
      label="Industries"
      title="Cloud architecture expertise across every sector."
      lede="We design architectures for organizations across regulated and high-growth industries. Our approach adapts to each sector's unique requirements."
    />
    <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
"""
industries = [
    ("Financial Services", "Regulatory-compliant architectures for banking, insurance, and fintech. SOC 2, PCI DSS, SOX addressed through architecture-level controls."),
    ("Healthcare", "HIPAA-compliant architectures with PHI safeguards, audit trails, data residency controls, and BAA support."),
    ("Retail & E-commerce", "Scalable, high-availability architectures for retail. Seasonal peak handling, CDN optimization, and personalization infrastructure."),
    ("Manufacturing", "IoT data pipelines, supply chain integration, edge computing, and hybrid architectures connecting factory floor to cloud."),
    ("Logistics", "Real-time tracking, route optimization, fleet management, and supply chain visibility. Event-driven systems for distributed networks."),
    ("Telecommunications", "Cloud-native for 5G, NFV, edge computing, subscriber management, and real-time billing with carrier-grade availability."),
    ("Government", "FedRAMP and sovereign architectures for government. Controlled access, data classification, and inter-agency integration."),
    ("Education", "Architectures for learning management, research computing, student data platforms, and collaboration infrastructure."),
    ("Media & Entertainment", "Media production, content delivery, streaming, and digital asset management. Global CDN and high-throughput processing."),
    ("SaaS", "Multi-tenant architectures, tenant isolation, usage metering, CI/CD, and global deployment strategies."),
    ("Energy & Utilities", "Smart grid processing, SCADA integration, predictive maintenance, and regulatory compliance for critical infrastructure."),
    ("Artificial Intelligence Platforms", "GPU compute, model training, MLOps pipelines, model serving, and data lake architecture for AI/ML platforms."),
]

for title, desc in industries:
    part8 += f"""      <div class="rounded-lg border border-line-2 bg-paper p-6" data-reveal>
        <h3 class="font-display font-semibold text-ink mb-2">{title}</h3>
        <p class="text-sm text-ink-2 leading-relaxed">{desc}</p>
      </div>
"""

# FAQ section
part8 += """    </div>
  </div>
</section>

<!-- 14. FAQ -->
<section class="py-20 md:py-28 bg-graphite" aria-labelledby="faq-heading">
  <div class="container-x">
    <SectionHeading
      id="faq-heading"
      index="14"
      label="FAQ"
      title="Frequently asked questions about cloud architecture."
      lede="Answers to questions enterprise leaders ask most when evaluating cloud architecture engagements."
      tone="graphite"
    />
    <div class="mt-14 max-w-4xl mx-auto space-y-6" data-reveal-group>
"""
faqs = [
    ("What is cloud architecture?", "Cloud architecture is the practice of designing the structural components of a cloud environment: accounts, networking, security, identity, compute, storage, databases, observability, and governance."),
    ("Why is cloud architecture important for enterprises?", "Without deliberate architecture, cloud environments become fragile, expensive, and insecure. Architecture provides the structure and standards that make cloud predictable and governable at scale."),
    ("What is the difference between public, private, and hybrid cloud?", "Public cloud shares infrastructure over the internet. Private cloud is dedicated to one organization. Hybrid cloud connects both for workload portability and unified operations."),
    ("Should we use a single cloud or multiple clouds?", "A well-architected single cloud often outperforms a poorly architected multi-cloud. Multi-cloud is appropriate for geographic coverage, specific services, or negotiating leverage."),
    ("What is a cloud landing zone?", "A landing zone is the foundational architecture: multi-account structure, network topology, security baselines, identity federation, logging, and governance for new environments."),
    ("How do you approach cloud migration?", "We follow: assessment, target architecture design, migration planning, wave execution, validation, and optimization. Architecture must precede migration."),
    ("What is Kubernetes and when should we use it?", "Kubernetes orchestrates containers for deployment, scaling, and management. Use it for portability, microservices at scale, or consistent deployment patterns. Not required for every workload."),
    ("How do you ensure high availability?", "Through multi-AZ deployment, redundancy, health checking, auto-scaling, load balancing, automated failover, and graceful degradation. Validated through chaos engineering."),
    ("What is your approach to disaster recovery?", "We define RTO and RPO with stakeholders, design the appropriate strategy (backup, pilot light, warm standby, or active-active), and automate failover with regular testing."),
    ("How do you handle cloud security architecture?", "Security in every layer: network segmentation, encryption, identity federation, least privilege, secrets management, vulnerability management, and incident response following zero-trust."),
    ("How do you reduce cloud costs?", "Right-sizing, reserved and spot instances, auto-scaling, storage tiering, eliminating orphaned resources, and FinOps practices with cost allocation and budget controls."),
    ("What is Infrastructure as Code?", "Managing infrastructure through version-controlled code rather than manual processes. Tools like Terraform and Pulumi enable reproducible, auditable, recoverable environments."),
    ("What is cloud governance?", "The framework of policies, standards, controls, and processes ensuring cloud environments are secure, compliant, cost-efficient, and aligned with business objectives."),
    ("How do you address compliance in cloud architecture?", "Architecture-level controls: encryption standards, access controls, data residency enforcement, audit trail automation, and policy as code mapped to frameworks like SOC 2, HIPAA, and PCI DSS."),
    ("How do you avoid vendor lock-in?", "We prioritize open standards and portable technologies: Kubernetes, Terraform, OpenTelemetry, OIDC, OPA. We avoid deep coupling to proprietary APIs."),
    ("What is cloud modernization?", "Evolving existing cloud architectures to leverage native capabilities: automation, managed services, containers, serverless, and modern observability and security practices."),
    ("How long does a cloud architecture engagement take?", "Assessment: 2-4 weeks. Comprehensive design: 6-12 weeks. Multi-year programs include ongoing advisory and optimization."),
    ("How do you work with existing architecture teams?", "Collaboratively. Our architects embed with your organization, transfer knowledge continuously, and build your internal capability for independence."),
    ("What deliverables can we expect?", "Assessment report, target architecture design, decision records, reference architectures, migration roadmap, IaC modules, landing zone, security baseline, governance framework, and runbooks."),
    ("Are you agnostic or do you specialize in one cloud?", "Fully vendor-neutral with no financial ties. We design for AWS, Azure, GCP, OCI, and OpenStack based solely on your requirements."),
]

for question, answer in faqs:
    part8 += f"""      <details class="group rounded-lg border border-graphite-line bg-graphite-2 p-6" data-reveal>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <h3 class="font-display font-semibold text-graphite-fg pr-4">{question}</h3>
          <span class="shrink-0 text-accent-bright transition-transform group-open:rotate-45" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </span>
        </summary>
        <p class="mt-4 text-sm text-graphite-fg-2 leading-relaxed">{answer}</p>
      </details>
"""

# CTA
part8 += """    </div>
  </div>
</section>

<!-- 15. CTA -->
<section class="relative overflow-hidden py-28 md:py-40" aria-labelledby="cta-heading">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--c-accent-soft)_0%,_transparent_70%)] pointer-events-none" aria-hidden="true" />
  <div class="container-x relative z-10 text-center">
    <div data-reveal-group>
      <p class="kicker text-accent mb-5" data-reveal>
        <span class="text-accent">15</span><span aria-hidden="true">&nbsp;&mdash;&nbsp;</span>Get Started
      </p>
      <h2 id="cta-heading" class="display text-4xl md:text-[3.4rem] text-ink max-w-3xl mx-auto" data-reveal>
        Ready to design a cloud architecture<br />that scales with your business?
      </h2>
      <p class="mt-6 text-lg text-ink-2 max-w-xl mx-auto leading-relaxed" data-reveal>
        Schedule a complimentary cloud architecture strategy session with our team. We will discuss your current environment, your objectives, and how Substrate can help you build a secure, scalable, and cost-efficient cloud foundation.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4" data-reveal>
        <Button href="/contact" variant="primary" size="md">Schedule a strategy session</Button>
        <Button href="/resources/cloud-architecture-guide" variant="secondary" size="md">Download our architecture guide</Button>
      </div>
    </div>
  </div>
</section>

</Base>
"""

with open(filepath, 'a', encoding='utf-8') as f:
    f.write(part8)
print("Part 8 written - Complete!")
